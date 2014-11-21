var timer = 0;

function content1out () {
	$('.background').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(280);
}
function content2in () {
	$('.background').removeClass("slide1Background1");
	$('.background').addClass("slide1Background2");
	$(".slide1messageText").html("Smart security");
	$('.background').fadeTo( 500, 1);
	$(".slide1messageText").delay(400).fadeTo( 100, 1);
}
function content2out () {
	$('.background').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(650);
}
function content3in () {
	$('.background').removeClass("slide1Background2");
	$('.background').addClass("slide1Background3");
	$(".slide1messageText").html("Protect your car, protect your family");
	$('.background').fadeTo( 500, 1);
	$(".slide1messageText").delay(400).fadeTo( 100, 1);
}
function content3out () {
	$('.background').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(420);
}
function content1in () {
	$('.background').removeClass("slide1Background3");
	$('.background').addClass("slide1Background1");
	$(".slide1messageText").html("It will not let you forget");
	$('.background').fadeTo( 500, 1);
	$(".slide1messageText").delay(400).fadeTo( 100, 1);
}

function watch (interval) {
	setInterval(function () {
		timer++;
		if (timer == 10) {
			content1out();
		}
		if (timer == 11) {
			content2in();
		}
		if (timer == 21) {
			content2out();
		}
		if (timer == 22) {
			content3in();
		}
		if (timer == 32) {
			content3out();
		}
		if (timer == 33) {
			content1in();
			timer = 0;
		}
	}, interval);
};

$(document).ready(function () {

	var docWidth = $(document).width();
	docWidth = (docWidth - 960) / 2;
	if (docWidth < 0) {
		docWidth = 0;
	}
	leftWidth = docWidth.toString() + 'px';
	$('#header_left').css( "width", leftWidth);

	watch(500);
	
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