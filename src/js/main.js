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

});