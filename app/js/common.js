$(function() {

$('input[type=tel]').mask('+7 (999) 999-99-99');

$('.fancybox').fancybox();

$('.fancybox-media').fancybox({
	helpers : {
		media : {}
	}
});

$('.js-modal-open').click(function(e) {
	e.preventDefault();
	$('body').addClass('overflow-hidden');
	$( $(this).attr('href') ).fadeIn();
});

$('.modal__close').click(function() {
	$('body').removeClass('overflow-hidden');
	$(this).parents('.modal').fadeOut();
});

$('.modal').click(function(e) {
	let modal = $(this).find('.modal__box');
	if (modal.is(e.target) || modal.has(e.target).length > 0) return;
	$('body').removeClass('overflow-hidden');
	$(this).fadeOut();
});

$('.js-scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$('.tabs__content').hide();
$('.tabs__content:first').show();
$('.tabs__list li:first').addClass('active');
$('.tabs__list li').click(function(event) {
	let parent = $(this).parents('.tabs');
	parent.find('.tabs__list li').removeClass('active');
	$(this).addClass('active');
	parent.find('.tabs__content').hide();
	var selectTab = $(this).find('a').attr("href");
	$(selectTab).fadeIn();
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.scroll-top').fadeIn(200);
	} else {
		$('.scroll-top').fadeOut(200);
	}
});

$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});

$('.scroll-link').click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 1000);
});

$('.works__list').slick({
	prevArrow: '.works .slider__prev',
	nextArrow: '.works .slider__next',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
	]
});

$('.faq__item').click(function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).find('.faq__answer').slideUp(200);
	} else {
		$('.faq__item').removeClass('active');
		$('.faq__answer').slideUp();
		$(this).addClass('active');
		$(this).find('.faq__answer').slideDown(200);
	}
});

$('.reviews__list').slick({
	prevArrow: '.reviews .slider__prev',
	nextArrow: '.reviews .slider__next',
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
	]
});

$('.about__list').slick({
	prevArrow: '.about .slider__prev',
	nextArrow: '.about .slider__next',
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}
	]
});

$('.header__toggle').click(function() {
	$('.header__nav').slideToggle();
	$(this).toggleClass('active');
});

});
