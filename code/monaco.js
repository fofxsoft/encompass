$(function () {
    $("explorer").on("resizestart", function () {
        $("monaco").hide();
    });

    $("explorer").on("resizestop", function () {
        $("monaco").show();
    });
});

var editor = {};

require.config({
    paths: {
        "vs": "../static/libraries/monaco/min/vs"
    }
});

var LoadFile = function (url, type) {
    require(["vs/editor/editor.main"], function () {
        var path = url.split("/");
        var name = path[path.length - 1].replace(/\./gi, "_").toLowerCase();

        editor[name] = monaco.editor.create($("#editor_" + name)[0], {
            automaticLayout: true,
            colorDecorators: true
        });

        $.get(url, function (data) {
            editor[name].setModel(monaco.editor.createModel(data, type));
        });
    });
};

var LoadDiff = function (original, modified, type) {
    require(["vs/editor/editor.main"], function () {
        var path = original.split("/");
        var name = "diff_" + path[path.length - 1].replace(/\./gi, "_").toLowerCase();

        editor[name] = monaco.editor.createDiffEditor($("#editor_" + name)[0], {
            automaticLayout: true
        });

        $.get(original, function (data) {
            var value = {};

            value.original = monaco.editor.createModel(data, type);

            $.get(modified, function (data) {
                value.modified = monaco.editor.createModel(data, type)

                editor[name].setModel(value);

                //$("mask").hide();
            });
        });
    });
};
