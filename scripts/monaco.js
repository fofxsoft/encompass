$(function() {
    $("explorer").on("resizestart", function() {
        $("monaco").hide();
    });

    $("explorer").on("resizestop", function() {
        $("monaco").show();
    });
});