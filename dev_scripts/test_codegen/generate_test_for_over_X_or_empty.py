"""Generate the test code for the ``OverXOrEmpty`` methods."""

import io
import os
import pathlib
import sys

from aas_core_codegen import intermediate
from aas_core_codegen.common import Stripped, Identifier
from aas_core_codegen.typescript import naming as typescript_naming
from aas_core_codegen.python import naming as python_naming
from aas_core_codegen.typescript.common import (
    INDENT as I,
    INDENT2 as II,
    INDENT3 as III,
)

import test_codegen.common
from test_codegen import test_data_io


def main() -> int:
    """Execute the main routine."""
    symbol_table = test_codegen.common.load_symbol_table()

    this_path = pathlib.Path(os.path.realpath(__file__))
    repo_root = this_path.parent.parent.parent

    test_data_dir = repo_root / "test_data"

    warning = test_codegen.common.generate_warning_comment(
        this_path.relative_to(repo_root)
    )

    blocks = [
        Stripped(
            """\
/**
 * Test `over*OrEmpty` methods.
 */"""
        ),
        warning,
        Stripped(
            """\
import * as TestCommonJsonization from "./commonJsonization";"""
        ),
    ]

    for our_type in symbol_table.our_types:
        if not isinstance(our_type, intermediate.ConcreteClass):
            continue

        cls_name_typescript = typescript_naming.class_name(our_type.name)

        # NOTE (mristin, 2023-03-19):
        # Our test data generation procedure is quite crude: we sample the properties,
        # and then brutishly fix them after the sampling.
        #
        # There are classes whose invariants prevent them from having all
        # the properties set in their maximal instances. Therefore, we have
        # to generate different code for those cases.
        #
        # Similar for minimal examples. Though some properties are not required,
        # the invariants of the class might mandate that one or more of the optional
        # properties are set based, say, on a required property.

        maximal_instance = test_data_io.load_maximal(
            test_data_dir=test_data_dir, cls=our_type
        )

        minimal_instance = test_data_io.load_minimal(
            test_data_dir=test_data_dir, cls=our_type
        )

        for prop in our_type.properties:
            method_name_typescript = typescript_naming.method_name(
                Identifier(f"Over_{prop.name}_or_empty")
            )

            prop_name_typescript = typescript_naming.property_name(prop.name)

            prop_name_python = python_naming.property_name(prop.name)

            if isinstance(
                prop.type_annotation, intermediate.OptionalTypeAnnotation
            ) and isinstance(
                prop.type_annotation.value, intermediate.ListTypeAnnotation
            ):
                if getattr(maximal_instance, prop_name_python) is not None:
                    load_maximal_name = typescript_naming.function_name(
                        Identifier(f"load_maximal_{our_type.name}")
                    )

                    # noinspection SpellCheckingInspection
                    blocks.append(
                        Stripped(
                            f"""\
test("{cls_name_typescript}.{method_name_typescript} non-default", () => {{
{I}const instance = TestCommonJsonization.{load_maximal_name}();

{I}if (instance.{prop_name_typescript} === null) {{
{II}throw new Error(
{III}"Unexpected " +
{III}"{prop_name_typescript} === null " +
{III}"in the maximal example of " +
{III}"{cls_name_typescript}"
{II});
{I}}} 

{I}let count = 0;
{I}for (const _ of instance.{method_name_typescript}()) {{
{II}count++;
{I}}}

{I}expect(count).toStrictEqual(
{II}instance.{prop_name_typescript}.length
{I});
}});"""
                        )
                    )
                else:
                    blocks.append(
                        Stripped(
                            f"""\
// The maximal example of {cls_name_typescript} contains no {prop_name_typescript},
// so we can not generate the corresponding test case 
// "{cls_name_typescript}.{method_name_typescript} non-default"."""
                        )
                    )

                if getattr(minimal_instance, prop_name_python) is None:
                    load_minimal_name = typescript_naming.function_name(
                        Identifier(f"load_minimal_{our_type.name}")
                    )

                    blocks.append(
                        Stripped(
                            f"""\
test("{cls_name_typescript}.{method_name_typescript} empty on default", () => {{
{I}const instance = TestCommonJsonization.{load_minimal_name}();

{I}if (instance.{prop_name_typescript} !== null) {{
{II}throw new Error(
{III}"Unexpected " +
{III}"{prop_name_typescript} !== null " +
{III}"in the minimal example of " +
{III}"{cls_name_typescript}"
{II});
{I}}}

{I}let count = 0;
{I}for (const _ of instance.{method_name_typescript}()) {{
{II}count++;
{I}}}

{I}expect(count).toStrictEqual(0);
}});"""
                        )
                    )
                else:
                    blocks.append(
                        Stripped(
                            f"""\
// The minimal example of {cls_name_typescript} contains no {prop_name_typescript},
// so we can not generate the corresponding test case
// "{cls_name_typescript}.{method_name_typescript} empty on default"."""
                        )
                    )

    blocks.append(warning)

    writer = io.StringIO()
    for i, block in enumerate(blocks):
        if i > 0:
            writer.write("\n\n")

        writer.write(block)

    writer.write("\n")

    target_pth = repo_root / "test/types.overXOrEmpty.spec.ts"
    target_pth.write_text(writer.getvalue(), encoding="utf-8")

    return 0


if __name__ == "__main__":
    sys.exit(main())
