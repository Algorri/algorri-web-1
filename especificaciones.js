var currentScreen = 1;
var timer = 0;
function watch (interval) {
	setInterval(function () {
		timer++;
		if (timer > interval) {
			screenChange(currentScreen);
		}
	}, 1000);
};
function screenChange (screen) {
	var textSelector = '.text' + screen.toString();
	var classSelector = 'actual-image' + screen.toString();
	var iSelector = '.i-button' + screen.toString();
	if (screen == 8) {
		var textNext = '.text1';
		var classNext = 'actual-image1';
		var iNext = '.i-button1';
		currentScreen = 1;
	} else {
		var textNext = '.text' + (screen + 1).toString();
		var classNext = 'actual-image' + (screen + 1).toString();
		var iNext = '.i-button' + (screen + 1).toString();
		currentScreen++;
	}
	$('.image_back').addClass(classNext);
	$('.image_back').removeClass(classSelector);
	$(iSelector).removeClass('image-button-selected');
	$(iNext).addClass('image-button-selected');
	setTimeout(function () {
		$(textSelector).css( "display", "none");
		$(textNext).css( "display", "initial");
	}, 300);
	timer = 0;
};
function backChange (screen) {
	var textSelector = '.text' + screen.toString();
	var classSelector = 'actual-image' + screen.toString();
	var iSelector = '.i-button' + screen.toString();
	if (screen == 1) {
		var textNext = '.text8';
		var classNext = 'actual-image8';
		var iNext = '.i-button8';
		currentScreen = 8;
	} else {
		var textNext = '.text' + (screen - 1).toString();
		var classNext = 'actual-image' + (screen - 1).toString();
		var iNext = '.i-button' + (screen - 1).toString();
		currentScreen--;
	}
	$('.image_back').addClass(classNext);
	$('.image_back').removeClass(classSelector);
	$(iSelector).removeClass('image-button-selected');
	$(iNext).addClass('image-button-selected');
	setTimeout(function () {
		$(textSelector).css( "display", "none");
		$(textNext).css( "display", "initial");
	}, 300);
	timer = 0;
};
function toChange (screen, destination) {
	var textSelector = '.text' + screen.toString();
	var classSelector = 'actual-image' + screen.toString();
	var iSelector = '.i-button' + screen.toString();
	var textNext = '.text' + destination.toString();
	var classNext = 'actual-image' + destination.toString();
	var iNext = '.i-button' + destination.toString();
	if (currentScreen != destination) {
		$('.image_back').addClass(classNext);
		$('.image_back').removeClass(classSelector);
	}
	currentScreen = destination;
	$(iSelector).removeClass('image-button-selected');
	$(iNext).addClass('image-button-selected');
	setTimeout(function () {
		$(textSelector).css( "display", "none");
		$(textNext).css( "display", "initial");
	}, 300);
	timer = 0;
};

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
	
	$('.image-button').hover(
		function(){
			$(this).addClass('image-button-highlighted');
		},
		function(){
			$(this).removeClass('image-button-highlighted');
		}
	);
	
	$('.image_back').hover(
		function(){
			$('.arrow').addClass('highlight-arrow');
		},
		function(){
			$('.arrow').removeClass('highlight-arrow');
		}
	);
	
	$('.arrow').hover(
		function(){
			$(this).addClass('select-arrow');
		},
		function(){
			$(this).removeClass('select-arrow');
		}
	);
	
	
	watch(4);
	$('.right_arrow').click(function () {
		screenChange(currentScreen);
	});
	$('.left_arrow').click(function () {
		backChange(currentScreen);
	});
		$('.i-button1').click(function () {
			toChange(currentScreen, 1);
		});
		$('.i-button2').click(function () {
			toChange(currentScreen, 2);
		});
		$('.i-button3').click(function () {
			toChange(currentScreen, 3);
		});
		$('.i-button4').click(function () {
			toChange(currentScreen, 4);
		});
		$('.i-button5').click(function () {
			toChange(currentScreen, 5);
		});
		$('.i-button6').click(function () {
			toChange(currentScreen, 6);
		});
		$('.i-button7').click(function () {
			toChange(currentScreen, 7);
		});
		$('.i-button8').click(function () {
			toChange(currentScreen, 8);
		});

	
		$('.specifications_choice').click(function () {
			$('html, body').animate({scrollTop: 0}, "slow");
		});
		$('.side-option1').click(function () {
			$('html, body').animate({scrollTop: 700}, "slow");
		});
		$('.side-option2').click(function () {
			$('html, body').animate({scrollTop: 1240}, "slow");
		});
		$('.side-option3').click(function () {
			$('html, body').animate({scrollTop: 1780}, "slow");
		});
		$('.side-option4').click(function () {
			$('html, body').animate({scrollTop: 2320}, "slow");
		});
		$('.side-option5').click(function () {
			$('html, body').animate({scrollTop: 2860}, "slow");
		});
		$('.side-option6').click(function () {
			$('html, body').animate({scrollTop: 3400}, "slow");
		});
		$('.side-option7').click(function () {
			$('html, body').animate({scrollTop: 3940}, "slow");
		});
		$('.side-option8').click(function () {
			$('html, body').animate({scrollTop: 4480}, "slow");
		});
	
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