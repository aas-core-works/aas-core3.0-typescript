"""Generate the test code for the ``descendOnce`` methods."""

import io
import os
import pathlib
import sys
from typing import List

import aas_core_codegen
import aas_core_codegen.common
import aas_core_codegen.naming
import aas_core_codegen.parse
import aas_core_codegen.run
from aas_core_codegen import intermediate
from aas_core_codegen.common import Stripped, Identifier
from aas_core_codegen.typescript import (
    common as typescript_common,
    naming as typescript_naming,
)
from aas_core_codegen.typescript.common import (
    INDENT as I,
    INDENT2 as II,
    INDENT3 as III,
    INDENT4 as IIII,
)

import test_codegen.common


def main() -> int:
    """Execute the main routine."""
    symbol_table = test_codegen.common.load_symbol_table()

    this_path = pathlib.Path(os.path.realpath(__file__))
    repo_root = this_path.parent.parent.parent

    warning = test_codegen.common.generate_warning_comment(
        this_path.relative_to(repo_root)
    )

    blocks = [
        Stripped(
            """\
/**
 * Test `modelType()` methods.
 */"""
        ),
        warning,
        Stripped(
            """\
import * as AasTypes from "../src/types";
import * as AasStringification from "../src/stringification";
import * as TestCommonJsonization from "./commonJsonization";"""
        ),
    ]  # type: List[Stripped]

    from_string = typescript_naming.function_name(
        Identifier("model_type_from_string")
    )

    must_to_string = typescript_naming.function_name(
        Identifier("must_model_type_to_string")
    )

    model_type_enum = typescript_naming.enum_name(Identifier("Model_type"))

    for concrete_cls in symbol_table.concrete_classes:
        cls_name_typescript = typescript_naming.class_name(concrete_cls.name)

        load_minimal_name = typescript_naming.function_name(
            Identifier(f"load_minimal_{concrete_cls.name}")
        )

        model_type_literal = typescript_naming.enum_literal_name(concrete_cls.name)

        blocks.append(
            Stripped(
                f"""\
test("model type of {cls_name_typescript}", () => {{
{I}const instance = TestCommonJsonization.{load_minimal_name}();

{I}expect(instance.modelType()).toStrictEqual(
{II}AasTypes.{model_type_enum}.{model_type_literal}
{I});
}});"""
            )
        )

        string_literal = typescript_common.string_literal(
            typescript_naming.enum_literal_name(concrete_cls.name)
        )

        blocks.append(
            Stripped(
                f"""\
test("model type from string of {cls_name_typescript}", () => {{
{I}const text = {string_literal};
{I}const literal = AasStringification.{from_string}(
{II}text
{I});

{I}expect(literal).toStrictEqual(
{II}AasTypes.{model_type_enum}.{model_type_literal}
{I});
}});"""
            )
        )

        blocks.append(
            Stripped(
                f"""\
test("model type to string of {cls_name_typescript}", () => {{
{I}const text = AasStringification.{must_to_string}(
{II}AasTypes.{model_type_enum}.{model_type_literal}
{I});

{I}expect(text).toStrictEqual(
{II}{string_literal}
{I});
}});"""
            )
        )

    blocks.append(
        Stripped(
            f"""\
test("model type from invalid string", () => {{
{I}const text = "This is definitely not a valid model type.";
{I}const literal = AasStringification.{from_string}(
{II}text
{I});

{I}expect(literal).toBeNull();
}});"""
        )
    )

    to_string = typescript_naming.function_name(
        Identifier("model_type_to_string")
    )

    blocks.append(
        Stripped(
            f"""\
test("invalid model type to string", () => {{
{I}// The number 9007199254740991 is the maximum safe integer. 
{I}const literal = <AasTypes.{model_type_enum}>9007199254740991;
{I}const text = AasStringification.{to_string}(
{II}literal
{I});

{I}expect(text).toBeNull();
}});"""
        )
    )

    writer = io.StringIO()
    for i, block in enumerate(blocks):
        if i > 0:
            writer.write("\n\n")

        writer.write(block)

    writer.write("\n")

    target_pth = repo_root / "test/types.modelType.spec.ts"
    target_pth.write_text(writer.getvalue(), encoding="utf-8")

    return 0


if __name__ == "__main__":
    sys.exit(main())
