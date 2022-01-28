$(".btn-menu").click(function() {
    $(".menu").fadeIn();
    $(".btn-menu").fadeOut();
});

$(".btn-close").click(function() {
    $(".menu").fadeOut();
    $(".btn-menu").fadeIn();
});