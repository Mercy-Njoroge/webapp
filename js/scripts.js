$(document).ready(function(){
    $("#Birthday").submit(function(event)){
        event.preventDefault();
        var Birthday=$("input#Date").val();
        var Gnder=$("select#Gender").val();
    }
}

var days=