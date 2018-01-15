$(document).ready(function () {
    $(".comentario").hide();
    $('.boton').click(function () {
        $(this).parent().find(".comentario").slideToggle("slow");
    });

    
});