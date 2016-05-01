$(function(){
    var wrapper = $("#game-wrapper");

    $("#draw-btn").click(function(){
        var rows = $("#rows").find(":selected");
        var cols = $("#cols").find(":selected");

        rows = $(rows).text();
        cols = $(cols).text();

        alert("Rows: " + rows + " Cols: " + cols);
    });
});