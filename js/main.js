$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 3,
		margin:10,
	    nav :true,
	    dots: false,
	    navText:[
	    '<i class="icofont-arrow-left"></i>',
	    '<i class="icofont-arrow-right"></i>'
	    ],
	    responsive:{
	        0:{
	            items:1,
	            nav: false,
	        },
	        600:{
	            items:2,
	            nav: false,
	        },
	        1000:{
	            items:3
	        }
	    }
	});

});
$(window).scroll(function(){
	if($(window).scrollTop() >= 250){
		$('.gototop').css({
			"opacity": "1","pointer-events": "auto"
		});
		
	}else{
		$('.gototop').css({
			"opacity": "0",	"pointer-events": "none"
		});
		
	}
});
$('.gototop').click(function(){
	$('html').animate({scrollTop:0},500);
});


$(document).ready(function(){
	AOS.init();
});

