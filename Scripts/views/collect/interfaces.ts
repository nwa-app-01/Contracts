/// <autosync enabled="true" />
/// <reference path="..\..\typings\requirejs\require.d.ts" />
/// <reference path="..\..\typings\knockout.validation\knockout.validation.d.ts" />
/// <reference path="..\..\typings\knockout.mapping\knockout.mapping.d.ts" />
/// <reference path="..\..\typings\knockout\knockout.d.ts" />
/// <reference path="..\..\typings\jquery\jquery.d.ts" />
/// <reference path="..\..\typings\bootstrap\bootstrap.d.ts" />

// Interface
export interface INotifier {
    notify(message: string): void;
}

//eg : 
//Trust / Contract / Supplier / Genmed
export interface ICollectionType {
    id: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    order: KnockoutObservable<number>;
}

// Collection of data for a document
export interface ICollection {
    id: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    updated: KnockoutObservable<Date>;
}

//eg 
/*
Contract
Contract No
The unique contract number
X8832-1000
100
*/
export interface ICollectionItem {
    id: KnockoutObservable<number>;
    collectionId: KnockoutObservable<number>;
    collectionTypeId: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    value: KnockoutObservable<string>;
    order: KnockoutObservable<number>;
}