  $(document).ready(function() {
    $(".menu-bar").click(function(){
    $(".nav .navigation-menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});

$(".navigation-menu .fa-times").click(function(){
    $(".nav div.navigation-menu, .overlay").toggle(500);
	$('body').css('overflow-y', 'visible');
});
});
  
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
        $('header div').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header div').removeClass('visible-title');
    }
});

