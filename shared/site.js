$(function() {
    $("explorer").resizable({
        handles: "e",
        maxWidth: 1000,
        minWidth: 1
    });

    $("tabs").on("click", ".tab", function () {
        var tab = $(this);
        var page = tab.attr("component");

        if (page != "" && !$(this).hasClass("active")) {
            $("component").hide();
            $("tabs .tab").removeClass("active");
            $("#" + page).show();

            tab.addClass("active");
        }
    });
});