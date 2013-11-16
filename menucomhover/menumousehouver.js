$(document).ready(function() {

	$("#clickme").click(function() {
		
			if (!$(this).hasClass('clicked')) {
				$(this).addClass('clicked');
				$('#menu-list').fadeOut('1500');

			}
			else{
				$(this).removeClass('clicked');
				$('#menu-list').fadeIn('1500');
			}
	});

});