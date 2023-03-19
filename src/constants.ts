/**
 * Provide constant values of the meta-model.
 */

// This code has been automatically generated by aas-core-codegen.
// Do NOT edit or append.

/* eslint-disable @typescript-eslint/no-unused-vars */

import * as AasTypes from "./types";

/**
 * Categories for {@link types!IDataElement} as defined in Constraint AASd-090
 */
export const VALID_CATEGORIES_FOR_DATA_ELEMENT = new Set<string>([
  "CONSTANT",
  "PARAMETER",
  "VARIABLE"
]);

/**
 * Enumeration of all identifiable elements within an asset administration shell.
 */
export const GENERIC_FRAGMENT_KEYS = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.FragmentReference
]);

/**
 * Enumeration of different key value types within a key.
 */
export const GENERIC_GLOBALLY_IDENTIFIABLES = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.GlobalReference
]);

/**
 * Enumeration of different key value types within a key.
 */
export const AAS_IDENTIFIABLES = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.AssetAdministrationShell,
  AasTypes.KeyTypes.ConceptDescription,
  AasTypes.KeyTypes.Identifiable,
  AasTypes.KeyTypes.Submodel
]);

/**
 * Enumeration of all submodel elements within an asset administration shell.
 */
export const AAS_SUBMODEL_ELEMENTS_AS_KEYS = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.AnnotatedRelationshipElement,
  AasTypes.KeyTypes.BasicEventElement,
  AasTypes.KeyTypes.Blob,
  AasTypes.KeyTypes.Capability,
  AasTypes.KeyTypes.DataElement,
  AasTypes.KeyTypes.Entity,
  AasTypes.KeyTypes.EventElement,
  AasTypes.KeyTypes.File,
  AasTypes.KeyTypes.MultiLanguageProperty,
  AasTypes.KeyTypes.Operation,
  AasTypes.KeyTypes.Property,
  AasTypes.KeyTypes.Range,
  AasTypes.KeyTypes.ReferenceElement,
  AasTypes.KeyTypes.RelationshipElement,
  AasTypes.KeyTypes.SubmodelElement,
  AasTypes.KeyTypes.SubmodelElementCollection,
  AasTypes.KeyTypes.SubmodelElementList
]);

/**
 * Enumeration of different fragment key value types within a key.
 */
export const AAS_REFERABLE_NON_IDENTIFIABLES = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.AnnotatedRelationshipElement,
  AasTypes.KeyTypes.BasicEventElement,
  AasTypes.KeyTypes.Blob,
  AasTypes.KeyTypes.Capability,
  AasTypes.KeyTypes.DataElement,
  AasTypes.KeyTypes.Entity,
  AasTypes.KeyTypes.EventElement,
  AasTypes.KeyTypes.File,
  AasTypes.KeyTypes.MultiLanguageProperty,
  AasTypes.KeyTypes.Operation,
  AasTypes.KeyTypes.Property,
  AasTypes.KeyTypes.Range,
  AasTypes.KeyTypes.ReferenceElement,
  AasTypes.KeyTypes.RelationshipElement,
  AasTypes.KeyTypes.SubmodelElement,
  AasTypes.KeyTypes.SubmodelElementCollection,
  AasTypes.KeyTypes.SubmodelElementList
]);

/**
 * Enumeration of referables.
 */
export const AAS_REFERABLES = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.AssetAdministrationShell,
  AasTypes.KeyTypes.ConceptDescription,
  AasTypes.KeyTypes.Identifiable,
  AasTypes.KeyTypes.Submodel,
  AasTypes.KeyTypes.AnnotatedRelationshipElement,
  AasTypes.KeyTypes.BasicEventElement,
  AasTypes.KeyTypes.Blob,
  AasTypes.KeyTypes.Capability,
  AasTypes.KeyTypes.DataElement,
  AasTypes.KeyTypes.Entity,
  AasTypes.KeyTypes.EventElement,
  AasTypes.KeyTypes.File,
  AasTypes.KeyTypes.MultiLanguageProperty,
  AasTypes.KeyTypes.Operation,
  AasTypes.KeyTypes.Property,
  AasTypes.KeyTypes.Range,
  AasTypes.KeyTypes.ReferenceElement,
  AasTypes.KeyTypes.Referable,
  AasTypes.KeyTypes.RelationshipElement,
  AasTypes.KeyTypes.SubmodelElement,
  AasTypes.KeyTypes.SubmodelElementCollection,
  AasTypes.KeyTypes.SubmodelElementList
]);

/**
 * Enumeration of all referable elements within an asset administration shell
 */
export const GLOBALLY_IDENTIFIABLES = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.GlobalReference,
  AasTypes.KeyTypes.AssetAdministrationShell,
  AasTypes.KeyTypes.ConceptDescription,
  AasTypes.KeyTypes.Identifiable,
  AasTypes.KeyTypes.Submodel
]);

/**
 * Enumeration of different key value types within a key.
 */
export const FRAGMENT_KEYS = new Set<AasTypes.KeyTypes>([
  AasTypes.KeyTypes.AnnotatedRelationshipElement,
  AasTypes.KeyTypes.BasicEventElement,
  AasTypes.KeyTypes.Blob,
  AasTypes.KeyTypes.Capability,
  AasTypes.KeyTypes.DataElement,
  AasTypes.KeyTypes.Entity,
  AasTypes.KeyTypes.EventElement,
  AasTypes.KeyTypes.File,
  AasTypes.KeyTypes.FragmentReference,
  AasTypes.KeyTypes.MultiLanguageProperty,
  AasTypes.KeyTypes.Operation,
  AasTypes.KeyTypes.Property,
  AasTypes.KeyTypes.Range,
  AasTypes.KeyTypes.ReferenceElement,
  AasTypes.KeyTypes.RelationshipElement,
  AasTypes.KeyTypes.SubmodelElement,
  AasTypes.KeyTypes.SubmodelElementCollection,
  AasTypes.KeyTypes.SubmodelElementList
]);

/**
 * IEC 61360 data types for concept descriptions categorized with PROPERTY or VALUE.
 */
export const DATA_TYPE_IEC_61360_FOR_PROPERTY_OR_VALUE =
  new Set<AasTypes.DataTypeIec61360>([
    AasTypes.DataTypeIec61360.Date,
    AasTypes.DataTypeIec61360.String,
    AasTypes.DataTypeIec61360.StringTranslatable,
    AasTypes.DataTypeIec61360.IntegerMeasure,
    AasTypes.DataTypeIec61360.IntegerCount,
    AasTypes.DataTypeIec61360.IntegerCurrency,
    AasTypes.DataTypeIec61360.RealMeasure,
    AasTypes.DataTypeIec61360.RealCount,
    AasTypes.DataTypeIec61360.RealCurrency,
    AasTypes.DataTypeIec61360.Boolean,
    AasTypes.DataTypeIec61360.Rational,
    AasTypes.DataTypeIec61360.RationalMeasure,
    AasTypes.DataTypeIec61360.Time,
    AasTypes.DataTypeIec61360.Timestamp
  ]);

/**
 * IEC 61360 data types for concept descriptions categorized with REFERENCE.
 */
export const DATA_TYPE_IEC_61360_FOR_REFERENCE = new Set<AasTypes.DataTypeIec61360>([
  AasTypes.DataTypeIec61360.String,
  AasTypes.DataTypeIec61360.Iri,
  AasTypes.DataTypeIec61360.Irdi
]);

/**
 * IEC 61360 data types for concept descriptions categorized with DOCUMENT.
 */
export const DATA_TYPE_IEC_61360_FOR_DOCUMENT = new Set<AasTypes.DataTypeIec61360>([
  AasTypes.DataTypeIec61360.File,
  AasTypes.DataTypeIec61360.Blob,
  AasTypes.DataTypeIec61360.Html
]);

/**
 * These data types imply that the unit is defined in the data specification.
 */
export const IEC_61360_DATA_TYPES_WITH_UNIT = new Set<AasTypes.DataTypeIec61360>([
  AasTypes.DataTypeIec61360.IntegerMeasure,
  AasTypes.DataTypeIec61360.RealMeasure,
  AasTypes.DataTypeIec61360.RationalMeasure,
  AasTypes.DataTypeIec61360.IntegerCurrency,
  AasTypes.DataTypeIec61360.RealCurrency
]);

/* eslint-enable @typescript-eslint/no-unused-vars */

// This code has been automatically generated by aas-core-codegen.
// Do NOT edit or append.
