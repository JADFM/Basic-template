$(document).ready(function(){
	$(".menu a").smoothscrolling();

	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$('.scrollup').fadeIn();
		}else{
			$('.scrollup').fadeOut();
		}
	})
})
