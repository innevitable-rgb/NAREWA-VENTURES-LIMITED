jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header (Home One layout only)
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			var headerTopBar = $('.top-bar').outerHeight();
			var headerOneTopSpace = $('.header-one .logo-area').outerHeight();
			var headerOneELement = $('.header-one .site-navigation');

			if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
				$(headerOneELement).addClass('navbar-fixed');
				$('.header-one').css('margin-bottom', headerOneELement.outerHeight());
			} else {
				$(headerOneELement).removeClass('navbar-fixed');
				$('.header-one').css('margin-bottom', 0);
			}
		}
		fixedHeader();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	$(document).ready(function () {

		// navSearch show/hide
		function navSearch() {
			$('.nav-search').on('click', function () {
				$('.search-block').fadeIn(350);
			});
			$('.search-close').on('click', function () {
				$('.search-block').fadeOut(350);
			});
		}
		navSearch();

		// mobile nav max-height (nav has no dropdowns left, just the scroll clamp)
		function navbarMobileHeight() {
			if ($(window).width() < 992) {
				var navbarHeight = $('.site-navigation').outerHeight();
				$('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
			}
		}
		navbarMobileHeight();


		// back to top
		function backToTop() {
			$('#back-to-top').on('click', function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		}
		backToTop();


		// banner-carousel (Home One only)
		function bannerCarouselOne() {
			$('.banner-carousel.banner-carousel-1').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				dots: true,
				speed: 600,
				arrows: true,
				prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
			});
			$('.banner-carousel.banner-carousel-1').slickAnimation();
		}
		bannerCarouselOne();


		// pageSlider (Projects + Services)
		// Guarded: skips any slider a page has already initialized itself
		// (Services does this inline), which avoids the double-init blank gap.
		function pageSlider() {
			var $slider = $('.page-slider');
			if ($slider.length && !$slider.hasClass('slick-initialized')) {
				$slider.slick({
					fade: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					dots: false,
					speed: 600,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
				});
			}
		}
		pageSlider();


		// Shuffle js filter and masonry (homepage Recent Ventures section)
		function projectShuffle() {
			if ($('.shuffle-wrapper').length !== 0) {
				var Shuffle = window.Shuffle;
				var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
					itemSelector: '.shuffle-item',
					sizer: '.shuffle-sizer',
					buffer: 1
				});
				$('input[name="shuffle-filter"]').on('change', function (evt) {
					var input = evt.currentTarget;
					if (input.checked) {
						myShuffle.filter(input.value);
					}
				});
				$('.shuffle-btn-group label').on('click', function () {
					$('.shuffle-btn-group label').removeClass('active');
					$(this).addClass('active');
				});
			}
		}
		projectShuffle();


		// testimonial carousel (homepage global testimonials section)
		function testimonialCarousel() {
			$('.testimonial-slide').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				speed: 600,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 5000
			});
		}
		testimonialCarousel();


		// team carousel (About page)
		// About's inline script unslicks and re-inits this with its own config,
		// so this initial pass has to exist for that to work.
		function teamCarousel() {
			var $team = $('.team-slide');
			if ($team.length && !$team.hasClass('slick-initialized')) {
				$team.slick({
					dots: false,
					infinite: false,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll: 2,
					arrows: true,
					prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
					nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
					responsive: [{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 481,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			}
		}
		teamCarousel();


		// media popup (homepage project gallery lightbox)
		function mediaPopup() {
			$('.gallery-popup').colorbox({
				rel: 'gallery-popup',
				transition: 'slideshow',
				innerHeight: '500'
			});
		}
		mediaPopup();

	});

});