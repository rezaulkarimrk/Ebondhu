$(document).ready(function(){


	$('.slider').owlCarousel({
		items: 1,
		autoplay:true,
		margin:30,
		loop: true,
		nav: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
	});

});