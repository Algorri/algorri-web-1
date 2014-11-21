var timer = 0;

function content1out () {
	$('.introBackground').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(280);
}
function content2in () {
	$('.introBackground').removeClass("slide1Background1");
	$('.introBackground').addClass("slide1Background2");
	$(".slide1messageText").html("Smart security");
	$('.introBackground').fadeTo( 500, 1);
	$(".slide1messageText").delay(400).fadeTo( 100, 1);
}
function content2out () {
	$('.introBackground').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(650);
}
function content3in () {
	$('.introBackground').removeClass("slide1Background2");
	$('.introBackground').addClass("slide1Background3");
	$(".slide1messageText").html("Protect your car, protect your family");
	$('.introBackground').fadeTo( 500, 1);
	$(".slide1messageText").delay(400).fadeTo( 100, 1);
}
function content3out () {
	$('.introBackground').fadeTo( 500, 0);
	$(".slide1messageText").fadeTo( 100, 0);
	$(".slide1message").delay(200).width(420);
}
function content1in () {
	$('.introBackground').removeClass("slide1Background3");
	$('.introBackground').addClass("slide1Background1");
	$(".slide1messageText").html("It will not let you forget");
	$('.introBackground').fadeTo( 500, 1);
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

	watch(500);
	
	$('#menuContainer a').hover(
		function(){
			$(this).addClass('menuOptionHighlighted');
		},
		function(){
			$(this).removeClass('menuOptionHighlighted');
		}
	);
	
});