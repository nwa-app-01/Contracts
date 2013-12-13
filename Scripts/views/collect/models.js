define(["require", "exports", "knockout", "utils"], function(require, exports, ko, utils) {
    

    var CollectionType = (function () {
        function CollectionType() {
            this.id = ko.observable(-1);
            this.name = ko.observable('');
            this.order = ko.observable(-1);
        }
        return CollectionType;
    })();
    exports.CollectionType = CollectionType;

    var Collection = (function () {
        function Collection() {
            this.id = ko.observable(-1);
            this.name = ko.observable('');
            this.updated = ko.observable(new Date());
        }
        return Collection;
    })();
    exports.Collection = Collection;

    var CollectionItem = (function () {
        function CollectionItem() {
            this.id = ko.observable(-1);
            this.collectionId = ko.observable(-1);
            this.collectionTypeId = ko.observable(-1);
            this.name = ko.observable('');
            this.description = ko.observable('');
            this.value = ko.observable('');
            this.order = ko.observable(-1);
        }
        return CollectionItem;
    })();
    exports.CollectionItem = CollectionItem;

    var ViewModel = (function () {
        function ViewModel() {
            var _this = this;
            this.load = function (id) {
                return $.when(_this.notify("Loading...")).then(_this.loadCollectionTypes).then(_this.loadCollections).then(_this.notify("Done..."));
            };
            this.notify = function (message) {
                return null;
            };
            this.collectionTypes = ko.observableArray([]);
            this.collections = ko.observableArray([]);
            this.loadCollectionTypes = function () {
                return $.when(_this.notify("Loading Collection Types...")).then(function () {
                    return utils.get([
                        { id: 1, name: 'Trust' },
                        { id: 2, name: 'Supplier' },
                        { id: 3, name: 'Contract' },
                        { id: 4, name: 'Genmed' }
                    ]);
                }).then(function (result) {
                    return mapping.fromJS(result, {}, _this.collectionTypes);
                }).then(function () {
                    return _this.notify("Collection Types Loaded");
                });
            };
            this.loadCollections = function () {
                return $.when(_this.notify("Loading Collections...")).then(function () {
                    return utils.get([
                        { id: 10, name: 'Collection No 10', updated: '2013-12-01' },
                        { id: 20, name: 'Collection No 20', updated: '2013-11-01' },
                        { id: 30, name: 'Collection No 30', updated: '2013-02-14' },
                        { id: 40, name: 'Collection No 40' }
                    ]);
                }).then(function (result) {
                    return mapping.fromJS(result, {}, _this.collections);
                }).then(function () {
                    return _this.notify("Collections Loaded");
                });
            };
        }
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
});
