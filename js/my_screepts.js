$(document).ready(function () {
    $(".button-collapse").sideNav();
});
$(document).ready(function () {
    $(".parallax").parallax();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.carousel').carousel();
});

$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});