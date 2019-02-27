$(function(){

	function disableScroll(){
		$('html, body').on('touchmove', function(){
			preventDefault();
		});
		$('html, body').css('overflow', 'hidden');
	}
	function enableScroll(){
		$('html, body').off('touchmove');
		$('html, body').css('overflow-y', 'auto');
	}


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

	$('.head__call-order, .footer_call-order, .head__call-order-mob').click(function() {
		$('.popup-container, .popup-container__callback').fadeIn(200);
		disableScroll();
	});

	$('.popup-container').click(function(event){
		if (event.target == this) {
			$('.popup-container, .popup-container__callback').fadeOut(50);
			enableScroll();
		};
	});

	$('.about-me__learn-more, .what-i-do_price, .examples_order-button_order-project').click(function(){
		$('.popup-container, .popup-container__question').fadeIn(200);
		disableScroll();
	});

	$('.popup-container').click(function(event){
		if (event.target == this) {
			$('.popup-container, .popup-container__question').fadeOut(50);
			enableScroll();
		};
	});

	$('.menu-mob').hide();
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu-mob').fadeToggle('slow', 'linear');
	});

	$('.popup-container__callback__form__phone').mask('+7 (999) 999-99-99');

	$("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 0;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	  e.preventDefault();
	});
});
