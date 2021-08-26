$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });

    $(".burger").click(function(){
        $(this).toggleClass("active");
        $(".navs").toggleClass("show");
    });

    $(".accordion li a").click(function(acc){
        acc.preventDefault();
        $(".accordion li").removeClass("active");
        $($(this).parent()).addClass("active");
    });
});