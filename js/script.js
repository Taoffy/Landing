$(function(){
	$('.examples_slick').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: '.arrow-right',
	  prevArrow: '.arrow-left',
	  dots: true,
	  responsive: [
    	{
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 2,
	        slidesToScroll: 1,
	      }},
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }]
	});
});

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$(function(){
	$('.menu-mob').hide();
	$('#nav-icon').click(function(){
		$('.menu-mob').fadeToggle('slow', 'linear');
	})
})