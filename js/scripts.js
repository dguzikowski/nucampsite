$(function() {
    // carousel functionality 
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").on('click',() => {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    // activating reserve modal
    $('#reserveButton').on('click',() => {
        $('#reserveModal').modal('show');
    });

    // activating login modal
    $('#loginButton').on('click',() => {
        $('#loginModal').modal('show');
    });
});