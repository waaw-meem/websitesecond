// Home Category Button

// $("#home-category__btn").click(function(){
//     $(".category_dropdown").slideToggle('slow')
// })

// Home sidebar menu bar button

$("#menu--bar-button").click(function(){
    $(".sidebar__container").toggleClass("active")
})


// Single Store coupon website

// all view

$("#view_more-all_ss").click(function(){
    $(".all-ss_card-h").slideToggle('slow');
});

// code

$("#view_more_ss-code").click(function(){
    $(".ss-h-code_box").slideToggle('slow');
});


// deals

$("#view_more_ss").click(function(){
    $(".ss_card-h").slideToggle('slow');
});


// Copied Button

$("#copy-code-btn").click(function(){
    $("#paste-instructions").addClass("active")
})

$('.input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
       $('.dropdown_search').fadeIn(100);
    } else {
       $('.dropdown_search').fadeOut(100);
    }
 });


 $("#menu--bar-button").click(function() {
    $('.menu_toggler i.fa').toggleClass(".fa-align-right").toggleClass("fa-times"); //Adds 'a', removes 'b'

});

// Category Section Slider

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:false,
    dots:false,
    autoplay:false,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})
