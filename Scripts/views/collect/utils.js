/// <autosync enabled="true" />
/// <reference path="..\..\typings\requirejs\require.d.ts" />
/// <reference path="..\..\typings\knockout.validation\knockout.validation.d.ts" />
/// <reference path="..\..\typings\knockout.mapping\knockout.mapping.d.ts" />
/// <reference path="..\..\typings\knockout\knockout.d.ts" />
/// <reference path="..\..\typings\jquery\jquery.d.ts" />
/// <reference path="..\..\typings\bootstrap\bootstrap.d.ts" />
define(["require", "exports", "jquery"], function(require, exports, $) {
    function get(result) {
        var dfd = $.Deferred();
        setTimeout(dfd.resolve(result), 500);
        return dfd.promise();
    }
    exports.get = get;
});
