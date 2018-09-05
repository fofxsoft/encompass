$(function() {
    $("#explorer").on("resizestart", function() {
        $("#editor").hide();
    });

    $("#explorer").on("resizestop", function() {
        $("#editor").show();
    });
});