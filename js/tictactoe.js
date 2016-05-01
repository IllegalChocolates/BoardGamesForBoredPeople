var turn = "blue";
var blueArray = [], redArray = [];

function buttonClick(id){
    var x = $("#"+id);


    if(turn == "blue"){
        if ($(x).hasClass("btn-default")){
            $(x).removeClass("btn-default").addClass("btn-primary");
            blueArray.push(id);
            turn = "red";
        }
    }else{
        if ($(x).hasClass("btn-default")){
            $(x).removeClass("btn-default").addClass("btn-danger");
            redArray.push(id);

            turn = "blue";
        }
    }


    if (isInArray(1, blueArray) && isInArray(2, blueArray) && isInArray(3, blueArray)){
        alert("Blue Wins");
        window.location.reload();
    }else if (isInArray(1, blueArray) && isInArray(4, blueArray) && isInArray(7, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }else if (isInArray(1, blueArray) && isInArray(5, blueArray) && isInArray(9, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }else if (isInArray(4, blueArray) && isInArray(5, blueArray) && isInArray(6, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }else if (isInArray(7, blueArray) && isInArray(8, blueArray) && isInArray(9, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }else if (isInArray(2, blueArray) && isInArray(5, blueArray) && isInArray(8, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }else if (isInArray(7, blueArray) && isInArray(5, blueArray) && isInArray(3, blueArray)){
        alert("Blue Wins");
        window.location.reload();

    }


    if (isInArray(1, redArray) && isInArray(2, redArray) && isInArray(3, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(1, redArray) && isInArray(4, redArray) && isInArray(7, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(1, redArray) && isInArray(5, redArray) && isInArray(9, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(4, redArray) && isInArray(5, redArray) && isInArray(6, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(7, redArray) && isInArray(8, redArray) && isInArray(9, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(2, redArray) && isInArray(5, redArray) && isInArray(8, redArray)){
        alert("Red Wins");
        window.location.reload();

    }else if (isInArray(7, redArray) && isInArray(5, redArray) && isInArray(3, redArray)){
        alert("Red Wins");
        window.location.reload();

    }



}

function isInArray(value, array) {
    return array.indexOf(value) > -1;
}