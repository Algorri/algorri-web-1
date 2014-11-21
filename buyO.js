$(document).ready(function () {

	var docWidth = $(document).width();
	docWidth = (docWidth - 960) / 2;
	if (docWidth < 0) {
		docWidth = 0;
	}
	leftWidth = docWidth.toString() + 'px';
	$('#header_left').css( "width", leftWidth);
	
	$('.side-menu').hover(
		function(){
			$(this).addClass('side-menu-active');
		},
		function(){
			$(this).removeClass('side-menu-active');
		}
	);
	
	$('.top-menu-text').hover(
		function(){
			$(this).addClass('highlighted');
		},
		function(){
			$(this).removeClass('highlighted');
		}
	);
	
	$('.buy-now').hover(
		function(){
			$(this).addClass('buy-highlighted');
		},
		function(){
			$(this).removeClass('buy-highlighted');
		}
	);
	
		$('#i-button1').hover(
			function(){
				$(this).append('<div class="image-previewer"></div>').append('<span class="image-previewer-text">Red</span>');
			},
			function(){
				$(this).empty();
			}
		);
	
	
});

$(window).resize(function () {

	var docWidth = $(document).width();
	docWidth = (docWidth - 960) / 2;
	if (docWidth < 0) {
		docWidth = 0;
	}
	leftWidth = docWidth.toString() + 'px';
	$('#header_left').css( "width", leftWidth);
		
});