$(document).ready(function () {
	
	$('#menuContainer a').hover(
		function(){
			$(this).addClass('menuOptionHighlighted');
		},
		function(){
			$(this).removeClass('menuOptionHighlighted');
		}
	);
	
});