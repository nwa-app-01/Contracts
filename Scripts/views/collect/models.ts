/// <autosync enabled="true" />
declare var mapping: KnockoutMapping;

import ko = require("knockout");
import utils = require("utils");
import interfaces = require("interfaces");

export class CollectionType implements interfaces.ICollectionType {
    public id: KnockoutObservable<number> = ko.observable(-1);
    public name: KnockoutObservable<string> = ko.observable('');
    public order: KnockoutObservable<number> = ko.observable(-1);
}

export class Collection implements interfaces.ICollection {
    public id: KnockoutObservable<number> = ko.observable(-1);
    public name: KnockoutObservable<string> = ko.observable('');
    public updated: KnockoutObservable<Date> = ko.observable(new Date());
}

export class CollectionItem implements interfaces.ICollectionItem {
    public id: KnockoutObservable<number> = ko.observable(-1);
    public collectionId: KnockoutObservable<number> = ko.observable(-1);
    public collectionTypeId: KnockoutObservable<number> = ko.observable(-1);
    public name: KnockoutObservable<string> = ko.observable('');
    public description: KnockoutObservable<string> = ko.observable('');
    public value: KnockoutObservable<string> = ko.observable('');
    public order: KnockoutObservable<number> = ko.observable(-1);
}

export class ViewModel implements interfaces.INotifier {
    public load = (id: number) => {
        return $.when(this.notify("Loading..."))
            .then(this.loadCollectionTypes)
            .then(this.loadCollections)
            .then(this.notify("Done..."));
    }
    public notify = (message: string) => { return null; }
    public collectionTypes: KnockoutObservableArray<interfaces.ICollectionType> = ko.observableArray<interfaces.ICollectionType>([]);
    public collections: KnockoutObservableArray<interfaces.ICollection> = ko.observableArray<interfaces.ICollection>([]);

    private loadCollectionTypes = () => {
        return $.when(this.notify("Loading Collection Types..."))
            .then(() => utils.get([
                { id: 1, name: 'Trust' },
                { id: 2, name: 'Supplier' },
                { id: 3, name: 'Contract' },
                { id: 4, name: 'Genmed' }
            ]))
            .then((result) => mapping.fromJS(result, {}, this.collectionTypes))
            .then(() => this.notify("Collection Types Loaded"))
    };

    private loadCollections = () => {
        return $.when(this.notify("Loading Collections..."))
            .then(() => utils.get([
                { id: 10, name: 'Collection No 10', updated: '2013-12-01' },
                { id: 20, name: 'Collection No 20', updated: '2013-11-01' },
                { id: 30, name: 'Collection No 30', updated: '2013-02-14' },
                { id: 40, name: 'Collection No 40' }
            ]))
            .then((result) => mapping.fromJS(result, {}, this.collections))
            .then(() => this.notify("Collections Loaded"))
    };
}