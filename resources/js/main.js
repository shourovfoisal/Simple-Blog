$(document).ready(function() {

	// SCRIPT FOR SIDEBAR
	$('.sidebar').toggleClass('visible');	// To make the menu visible to the user at first
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



	/*
		FUNCTIONS FOR SUB CATEGORY
	*/

	var first_cat = $('.category-list>li:first>ul');
	var children = first_cat.children();
	var len = children.length;
	var height = (len*37)+30;
	first_cat.animate({height: +height+'px'}, 500);
	first_cat.addClass('expanded');
	$('.category-list>li:first>i').css('transform', 'rotateX(180deg)');

	$('.category-list>li>i').on('click',function() {
		if($(this).next().hasClass('expanded')){

			$(this).css('transform', 'rotateX(0deg)');
			if($(this).parent().index())					// INDEX RETURNS TRUE FOR ALL ELEMENTS EXCEPT THE FIRST
				$(this).parent().removeClass('active');		// WE DON'T WANT TO REMOVE THE ACTIVE CLASS FROM THE FIRST ELEMENT
			$(this).next().animate({height: '0px'}, 500);
			$(this).next().removeClass('expanded');
		}
		else {

			$(this).css('transform', 'rotateX(180deg)');
			$(this).parent().addClass('active');
			var children = $(this).next().children();
			var len = children.length;						// CALCULATING THE NUMBER OF ELEMENTS THE SUB CATEGORY OWNS
			var height = (len*37)+30;						// CALCULATING HOW MUCH HEIGHT THE SUB CATEGORY NEEDS IN TOTAL
			$(this).next().animate({height: +height+'px'}, 500);
			$(this).next().addClass('expanded');
		}
	});



	/*
		FB PLUGIN MODIFICATION - TO MAKE IT RESPONSIVE
	*/

	$(window).on('resize', function() {
	   setTimeout(function(){changeFBPagePlugin()}, 500);
	});
	 
	$(window).on('load', function() {
	   setTimeout(function(){changeFBPagePlugin()}, 1500);
	});


	changeFBPagePlugin = function () {
	   //getting parent box width
	   var container_width = (Number($('.category-container').width()) - Number($('.category-container').css('padding-left').replace("px", ""))).toFixed(0);
	   if (!isNaN(container_width)) {
	   	  container_width*=0.95;
	   	  var url = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width='+container_width.toFixed()+'&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId';
	      $(".category-container iframe").attr("width", container_width);
	      $(".category-container iframe").attr("src", url);
	   }
	   
	}



});