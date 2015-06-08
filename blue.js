$(document).ready(function() {
	$(".toggleMenu").css("display", "none");
	$(".nav li").hover(function() {
	 	$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});

$(document).ready(function() {
	var ww = document.body.clientWidth;
	if (ww < 800) {
		$(".toggleMenu").css("display", "inline-block");
		$(".nav li a").click(function() {
			$(this).parent("li").toggleClass('hover');
		});
	} else {
		$(".toggleMenu").css("display", "none");
		$(".nav li").hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	}
});
