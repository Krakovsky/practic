'use strict';

$(document).ready(function() {
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$("#phone").mask("+38(099) 999-99-99");

	$(".btn-clear-filter").click(function(){
		$(".tabs form")[0].reset();
		$(".tabs form")[1].reset();
	});

	$(".call-me-btn").click(function(){
		$(".modal").animate({
			top: "-1000px"
		}, 300);

		$(".modal-call").animate({
			top: "10%"
		}, 300);

		$(".overlay").toggle();
	});

	$(".close-modal").click(function(){
		$(".modal").animate({
			top: "-1000px"
		}, 300);
		$(".overlay").toggle();
	});

	$(".ico-burger").click(function(){
		$(".menu-aside").toggle("slow");
	});

	var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var MenuHandler = function () {
		function MenuHandler() {_classCallCheck(this, MenuHandler);
			this.menuTrigger = $('#menu-trigger');

			this.toggleMenu();
		}_createClass(MenuHandler, [{ key: 'toggleMenu', value: function toggleMenu()

			{var _this = this;
				this.menuTrigger.on('click', function () {
					_this.menuTrigger.toggleClass('is-open');
					_this.menu.toggleClass('is-open');
				});
			} }]);return MenuHandler;}();


		$(document).ready(function ($) {
			var menuHandler = new MenuHandler('.menu');
		});

    $("#menu-trigger").click(function(){
    	if(	$(this).next().css("display") === "none") {
    		$(this).next().css("display", "flex");
    	} else {
    		$(this).next().css("display", "none");
    	}
    });
});