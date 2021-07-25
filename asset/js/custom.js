$(document).ready(function() {
   
    // testmonial_slide_active
    $('.testmonial_slide_active').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.venobox').venobox();
    SVGInject(document.querySelectorAll("img.injectable"));












    
});