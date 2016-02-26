$(document).ready(function () {
    $('.hamburger').click(function(){
    //alert("click");
        $(this).next().slideToggle();
    });
});
