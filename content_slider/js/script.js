$(document).ready(
	function () {
		// set options
		var speed = 500;	//fade speed
		var autoswitch = true; //auto slide option
		var autoswitch_speed = 2000; // auto slide speed
		
		//Add initial active class
		$('.slide').first().addClass('active');
		$('.slide').hide();
		
		//Show first slide
		$('.active').show();
		
		$('#next').on('click',nextSlide);
		
		$('#prev').on('click',prevSlide);
		
		
		
		if (autoswitch == true) {
			setInterval (nextSlide,autoswitch_speed);
		}
		
		//Next slide function
		function nextSlide(){
			$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':last-child')) {
				$('.slide').first().addClass('active');	 
			} else {
				$('.oldActive').next().addClass('active');
				
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
		}
		
		//Previous slide function
		function prevSlide(){
			$('.active').removeClass('active').addClass('oldActive');
			if($('.oldActive').is(':first-child')) {
				$('.slide').last().addClass('active');	 
			} else {
				$('.oldActive').prev().addClass('active');
				
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
		}
		
	}
);