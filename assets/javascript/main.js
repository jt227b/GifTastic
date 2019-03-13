// Variables //
var sitcomsArray = ["The Office", "Everybody Loves Raymond", "Friends", "That 70's Show", "The Simpsons", "Atlanta", "Parks and Recreation", "Modern Family", "Family Guy", "How I Met Your Mother"];

$(document).ready(function () {
    for (var i = 0; i < sitcomsArray.length; i++) {
        $("#sitcomButtons").append("<button type='button' onclick='searchGif(\"" + sitcomsArray[i] + "\")' class='btn btn-primary' value=' " + sitcomsArray[i] + "'> " + sitcomsArray[i] + " </button>");
    }
});