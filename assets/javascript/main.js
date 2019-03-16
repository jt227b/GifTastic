// Variables //
var sitcomsArray = ["The Office", "Everybody Loves Raymond", "Friends", "That 70s Show", "The Simpsons", "Atlanta", "Parks and Recreation", "Modern Family", "Family Guy", "How I Met Your Mother"];

$(document).ready(function () {
    for (var i = 0; i < sitcomsArray.length; i++) {
        $("#sitcomButtons").append("<button type='button' onclick='searchGif(\"" + sitcomsArray[i] + "\")' class='btn btn-dark' value=' " + sitcomsArray[i] + "'> " + sitcomsArray[i] + " </button>");
    }
});


// Functions //
function sitcomButtonClicked() {
    var userInput = $('#sitcomInput').val();
    searchGif(userInput);
}

function submitButtonClicked() {
    var userInput = $('#sitcomInput').val();

    if (userInput) {
        $('#sitcomButtons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-dark' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &limit=10&api_key=TamrlyDzPVZgOk3WDx75JtbU7R9Blxt7',
        type: 'GET',
    })
        .done(function (response) {
            displayGif(response);
        })
}

// Function for GIFS //
function displayGif(response) {
    $('#sitcoms').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:300px; height:300px">';


        // Images inside container //
        image = '<div class="col-md-12">' + image + "</div>";
        $('#sitcoms').append(image);
    }


    // If/Else Gifs to play or stop //
    $('.movImage').on('click', function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
