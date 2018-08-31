$(function() {
    $("#explorer").resizable({
        handles: "e",
        maxWidth: 1000,
        minWidth: 1,
        start: function() {
            $("#editor").hide();
        },
        stop: function() {
            $("#editor").show();
        }
      });
});