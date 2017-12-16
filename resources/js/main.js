$(document).ready(function() {

	// SCRIPT FOR SIDEBAR
	$('.sidebar-btn').click(function() {
		$('.sidebar').toggleClass('visible');
	});



	// ADDING ANIMATION TO THE RECENT COMMENT ICONS
	$('.recent-comment-icons').on('mouseover', function() {
		var detectEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		$(this).addClass('animated jackInTheBox').one(detectEnd, function() {
			$(this).removeClass('animated jackInTheBox');
		});
	});



	// BOTH THE TWO ANIMATIONS SHOWN BELOW WORK VERY WELL
	// THE SECOND ONE IS THE EASIEST
	// WHILE THE FIRST ONE IS THE MOST CUSTOMIZABLE

	// function slider() {
	// 	first_child = $('.timeline-list li:first');
	// 	first_child.fadeTo('slow',0).animate({width: '0px'}, 700, function() {
	// 		$('.timeline-list').append(first_child);
	// 		setTimeout(function() {
	// 			first_child.fadeTo('slow',1).css('width','200px');
	// 			requestAnimationFrame(slider);
	// 		}, 2000);
	// 	});
	// }
	// requestAnimationFrame(slider);


	function slider() {
		first_child = $('.timeline-list li:first');
		first_child.hide('slow'); 

		setTimeout(function() {
			$('.timeline-list').append(first_child);
			first_child.fadeIn();
			requestAnimationFrame(slider);
		}, 4000);
	}

	setTimeout(function() {
		requestAnimationFrame(slider);
	}, 4000);

});