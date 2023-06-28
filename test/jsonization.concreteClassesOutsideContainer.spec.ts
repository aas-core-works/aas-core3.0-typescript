/**
 * Test JSON de/serialization of concrete classes outside a container.
 */

// This code has been automatically generated by:
// dev_scripts/test_codegen/generate_test_for_jsonization_of_concrete_classes_outside_container.py
// Do NOT edit or append.

import * as AasJsonization from "../src/jsonization";
import * as TestCommon from "./common";
import * as TestCommonJsonization from "./commonJsonization";

test("Extension round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalExtension();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.extensionFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Extension serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("AdministrativeInformation round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalAdministrativeInformation();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.administrativeInformationFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of AdministrativeInformation serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Qualifier round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalQualifier();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.qualifierFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Qualifier serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("AssetAdministrationShell round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalAssetAdministrationShell();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.assetAdministrationShellFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of AssetAdministrationShell serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("AssetInformation round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalAssetInformation();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.assetInformationFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of AssetInformation serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Resource round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalResource();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.resourceFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Resource serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("SpecificAssetId round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalSpecificAssetId();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.specificAssetIdFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of SpecificAssetId serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Submodel round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalSubmodel();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.submodelFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Submodel serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("RelationshipElement round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalRelationshipElement();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.relationshipElementFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of RelationshipElement serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("SubmodelElementList round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalSubmodelElementList();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.submodelElementListFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of SubmodelElementList serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("SubmodelElementCollection round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalSubmodelElementCollection();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.submodelElementCollectionFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of SubmodelElementCollection serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Property round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalProperty();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.propertyFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Property serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("MultiLanguageProperty round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalMultiLanguageProperty();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.multiLanguagePropertyFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of MultiLanguageProperty serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Range round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalRange();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.rangeFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Range serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("ReferenceElement round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalReferenceElement();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.referenceElementFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of ReferenceElement serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Blob round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalBlob();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.blobFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Blob serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("File round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalFile();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.fileFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of File serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("AnnotatedRelationshipElement round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalAnnotatedRelationshipElement();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.annotatedRelationshipElementFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of AnnotatedRelationshipElement serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Entity round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalEntity();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.entityFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Entity serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("BasicEventElement round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalBasicEventElement();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.basicEventElementFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of BasicEventElement serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Operation round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalOperation();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.operationFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Operation serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("OperationVariable round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalOperationVariable();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.operationVariableFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of OperationVariable serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Capability round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalCapability();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.capabilityFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Capability serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("ConceptDescription round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalConceptDescription();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.conceptDescriptionFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of ConceptDescription serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Reference round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalReference();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.referenceFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Reference serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("Key round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalKey();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.keyFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of Key serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LangStringNameType round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalLangStringNameType();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.langStringNameTypeFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LangStringNameType serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LangStringTextType round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalLangStringTextType();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.langStringTextTypeFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LangStringTextType serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("EmbeddedDataSpecification round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalEmbeddedDataSpecification();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.embeddedDataSpecificationFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of EmbeddedDataSpecification serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LevelType round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalLevelType();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.levelTypeFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LevelType serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("ValueReferencePair round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalValueReferencePair();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.valueReferencePairFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of ValueReferencePair serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("ValueList round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalValueList();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError = AasJsonization.valueListFromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of ValueList serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LangStringPreferredNameTypeIec61360 round-trip OK", () => {
  const instance =
    TestCommonJsonization.loadMaximalLangStringPreferredNameTypeIec61360();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.langStringPreferredNameTypeIec61360FromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LangStringPreferredNameTypeIec61360 serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LangStringShortNameTypeIec61360 round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalLangStringShortNameTypeIec61360();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.langStringShortNameTypeIec61360FromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LangStringShortNameTypeIec61360 serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("LangStringDefinitionTypeIec61360 round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalLangStringDefinitionTypeIec61360();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.langStringDefinitionTypeIec61360FromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of LangStringDefinitionTypeIec61360 serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});

test("DataSpecificationIec61360 round-trip OK", () => {
  const instance = TestCommonJsonization.loadMaximalDataSpecificationIec61360();

  const jsonable = AasJsonization.toJsonable(instance);

  const anotherInstanceOrError =
    AasJsonization.dataSpecificationIec61360FromJsonable(jsonable);
  expect(anotherInstanceOrError.error).toBeNull();
  const anotherInstance = anotherInstanceOrError.mustValue();

  const anotherJsonable = AasJsonization.toJsonable(anotherInstance);

  const inequalityError = TestCommon.checkJsonablesEqual(jsonable, anotherJsonable);
  if (inequalityError !== null) {
    throw new Error(
      "The maximal example of DataSpecificationIec61360 serialized " +
        "to JSON, then de-serialized and serialized again does not match " +
        `the first JSON: ${inequalityError.path}: ${inequalityError.message}`
    );
  }
});