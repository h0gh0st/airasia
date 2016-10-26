$(document).ready(function() {
			
	$('.pop_box_close').click(function() {
		$(this).parent().hide();
	});
			
	$(".clock_animate").spritespin({
	  source  : "img/poi_animate/clock.png", 
	  width   : 94.29,
	  height  : 96, 
	  frames  : 7,   
	  framesX : 7,    
	  frameTime: 800,
	  behavior: move
	  });

	$(".house_animate").spritespin({
	  source  : "img/poi_animate/house.png", 
	  width   : 123,
	  height  : 242, 
	  frames  : 27,   
	  framesX : 1,    
	  });

	$('.petrol_animate').spritespin({
	  source  : 'img/poi_animate/petrol.png', 
	  width   : 222,
	  height  : 162, 
	  frames  : 65,   
	  framesX : 1,    
	  frameTime: 200  
	});

	$(".mall_animate").spritespin({
	  source  : "img/poi_animate/mall.png", 
	  width   : 217,
	  height  : 158, 
	  frames  : 12,   
	  framesX : 1,    
	  frameTime: 200  
	  });

	$(".bank_animate").spritespin({
	  source  : "img/poi_animate/bank.png", 
	  width   : 282, 
	  height  : 137, 
	  frames  : 32,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".cafe_animate").spritespin({		
	  source  : "img/poi_animate/cafe.png", 
	  width   : 132, 
	  height  : 122, 
	  frames  : 85,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".computer_animate").spritespin({
	  source  : "img/poi_animate/computer.png", 
	  width   : 126,  // path to sprite sheet
	  height  : 196,  // width in pixels of the window/frame
	  frames  : 20,   // total number of frames
	  framesX : 1,     // number of frames in one row inside the spritesheet
	  frameTime: 200  // Time in ms between updates. 40 is exactly 25 FPS
	  });

 	$(".ipad_animate").spritespin({
	  source  : "img/poi_animate/ipad.png", 
	  width   : 66,
	  height  : 100, 
	  frames  : 40,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".hotel_animate").spritespin({
	  source  : "img/poi_animate/hotel.png", 
	  width   : 117,
	  height  : 182, 
	  frames  : 57,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".boarding_animate").spritespin({
	  source  : "img/poi_animate/boarding.png", 
	  width   : 192, 
	  height  : 107, 
	  frames  : 39,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".airport_animate").spritespin({		
	  source  : "img/poi_animate/airport.png", 
	  width   : 305, 
	  height  : 183, 
	  frames  : 43,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".guy1_front_animate").spritespin({
	  source  : "img/poi_animate/guy1_front.png", 
	  width   : 128, 
	  height  : 170, 
	  frames  : 21,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".guy1_back_animate").spritespin({
	  source  : "img/poi_animate/guy1_back.png", 
	  width   : 128, 
	  height  : 170, 
	  frames  : 21,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".guy2_front_animate").spritespin({
	  source  : "img/poi_animate/guy2_front.png", 
	  width   : 104, 
	  height  : 147, 
	  frames  : 25,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	$(".guy3_animate").spritespin({
	  source  : "img/poi_animate/guy3.png", 
	  width   : 97, 
	  height  : 155, 
	  frames  : 9,   
	  framesX : 1,    
	  frameTime: 200  
	  });

 	function step(e) {
 		if (e == 0) {
 			step0();
 		}
 		else if (e == 1) {
 			step1();
 		}
 		else if (e == 2) {
 			step2();
 		}
 		else if (e == 3) {
 			step3();
 		}
 		else if (e == 4) {
 			step4();
 		}
 		else if (e == 5) {
 			step5();
 		}
 		else if (e == 6) {
 			step6();
 		}
 		else if (e == 7) {
 			step7();
 		}
 		else if (e == 8) {
 			step8();
 		}
 	}

 	function step_back(e) {
 		if (e == 0) {
 			step_back0();
 		}
 		else if (e == 1) {
 			step_back1();
 		}
 		else if (e == 2) {
 			step_back2();
 		}
 		else if (e == 3) {
 			step_back3();
 		}
 		else if (e == 4) {
 			step_back4();
 		}
 		else if (e == 5) {
 			step_back5();
 		}
 		else if (e == 6) {
 			step_back6();
 		}
 		else if (e == 7) {
 			step_back7();
 		}
 		else if (e == 8) {
 			step_back8();
 		}
 	}

 	function step0() {
		$('.guy1').animate( { 'marginLeft': '+=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=250px'}, 'fast' ); 
		$('.guy1').animate( { 'marginLeft': '+=60px', 'marginTop': '+=50px' }, 'fast' );
	};

	function step_back0() {
		$('.guy1').animate( { 'marginLeft': '-=60px', 'marginTop': '-=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=250px'}, 'fast' ); 
		$('.guy1').animate( { 'marginLeft': '-=120px' }, 'fast' );		
	};

	function step1() {		
		$('.guy1').animate( { 'marginTop': '+=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=40px', 'marginTop': '+=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=160px' }, 'fast' );
	};

	function step_back1() {
		$('.guy1').animate( { 'marginLeft': '+=160px' }, 'fast' );	
		$('.guy1').animate( { 'marginLeft': '+=40px', 'marginTop': '-=100px' }, 'fast' );
		$('.guy1').animate( { 'marginTop': '-=120px' }, 'fast' );
	};

	function step2() {
		$('.guy1').animate( { 'marginLeft': '-=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=200px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=50px', 'marginTop': '+=50px' }, 'fast' );
		$('.guy1').animate( { 'marginTop': '+=170px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=50px', 'marginTop': '+=100px'}, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=100px' }, 'fast' );
		
	};

	function step_back2() {
		$('.guy1').animate( { 'marginLeft': '-=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=50px', 'marginTop': '-=100px'}, 'fast' );
		$('.guy1').animate( { 'marginTop': '-=170px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=50px', 'marginTop': '-=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=200px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=120px' }, 'fast' );
	};

	function step3() {
		$('.guy1').animate( { 'marginLeft': '+=210px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=240px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=50px', 'marginTop': '+=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=20px','marginTop': '+=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=20px', 'marginTop': '+=100px' }, 'fast' );
		
	};

	function step_back3() {
		$('.guy1').animate( { 'marginLeft': '+=20px', 'marginTop': '-=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=20px','marginTop': '-=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=50px', 'marginTop': '-=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=240px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=210px' }, 'fast' );
	};

	function step4() {
		$('.guy1').animate( { 'marginLeft': '-=100px', 'marginTop': '+=80px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=170px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=130px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=200px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=100px', 'marginTop': '+=60px' }, 'fast' );
	};

	function step_back4() {
		$('.guy1').animate( { 'marginLeft': '+=100px', 'marginTop': '-=60px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=200px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=130px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=170px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=100px', 'marginTop': '-=80px' }, 'fast' );
	};

	function step5() {		
		$('.guy1').animate( { 'marginTop': '+=100px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=20px', 'marginTop': '+=110px' }, 'fast' );
	};

	function step_back5() {
		$('.guy1').animate( { 'marginLeft': '-=20px', 'marginTop': '-=110px' }, 'fast' );
		$('.guy1').animate( { 'marginTop': '-=100px' }, 'fast' );
	};

	function step6() {
		$('.guy1').animate( { 'marginLeft': '+=40px', 'marginTop': '+=40px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=90px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=130px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=110px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=150px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=45px', 'marginTop': '+=50px' }, 'fast' );
	};

	function step_back6() {
		$('.guy1').animate( { 'marginLeft': '-=45px', 'marginTop': '-=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=150px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=110px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=130px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=90px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=40px', 'marginTop': '-=40px' }, 'fast' );
	};

	function step7() {
		$('.guy1').animate( { 'marginTop': '+=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=50px','marginTop': '+=120px' }, 'fast' );
	};

	function step_back7() {
		$('.guy1').animate( { 'marginLeft': '+=50px','marginTop': '-=120px' }, 'fast' );
		$('.guy1').animate( { 'marginTop': '-=120px' }, 'fast' );
	};

	function step8() {
		$('.guy1').animate( { 'marginLeft': '-=220px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=80px','marginTop': '+=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '-=20px', 'marginTop': '+=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=60px', 'marginTop': '+=140px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=250px' }, 'slow' );
	};

	function step_back8() {
		$('.guy1').animate( { 'marginLeft': '-=250px' }, 'slow' );
		$('.guy1').animate( { 'marginLeft': '-=60px', 'marginTop': '-=140px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=20px', 'marginTop': '-=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=80px','marginTop': '-=50px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=120px' }, 'fast' );
		$('.guy1').animate( { 'marginLeft': '+=220px' }, 'fast' );
	};

	function move() {
		if (current_button > prev_button) 
		{
			$('.guy1_animate').children('.back').hide();
			$('.guy1_animate').children('.front').show();

			for (var x=prev_button; x<current_button; x++) {
				step(x);
			}

		} else if (current_button < prev_button) 
			{
				$('.guy1_animate').children('.front').hide();
				$('.guy1_animate').children('.back').show();

				for (var x=prev_button; x>current_button; x--) {
					step_back(x-1);
				}
			}
	};

	$('.guy1_animate').children('.back').hide();
	
	$('.house_top').click(function() {
		if ($('.guy1').hasClass('ready')) {
		}
		else {
			$('.guy1').animate( { 'marginLeft': '+=100px' }, 'fast' );
			$('.guy1').addClass('ready');
			$('.glow_text').css('display', 'block');
		}
	});

	var prev_button = 0;
	var current_button = 0;

	$('.button').click(function() {

		if ($('.guy1').hasClass('checked')) {

		}

		else if ($('.guy1').hasClass('ready')) {

			$('.guy').addClass('checked');
			$('.pop_box').css( 'display', 'none');

			if ($(this).hasClass('button1')) {
				current_button = 1;
				move();	
				prev_button = 1;
			}

			else if ($(this).hasClass('button2')) {
				current_button = 2;	
			 	move('.button2');
				prev_button = 2;
			}

			else if ($(this).hasClass('button3')) {
				current_button = 3;
			 	move();
			 	prev_button = 3;
			}

			else if ($(this).hasClass('button4')) {
				current_button = 4;
			 	move();
				prev_button = 4;
			}

			else if ($(this).hasClass('button5')) {
				current_button = 5;
			 	move();
				prev_button = 5;
			}
			
			else if ($(this).hasClass('button6')) {
				current_button = 6;
			 	move();
				prev_button = 6;
			}
			else if ($(this).hasClass('button7')) {
				current_button = 7;
			 	move();
				prev_button = 7;
			}
			else if ($(this).hasClass('button8')) {
				current_button = 8;
			 	move();
				prev_button = 8;
			}
			else if ($(this).hasClass('button9')) {
				current_button = 9;
			 	move();
				prev_button = 9;
			}

			$(this).next('.pop_box').css('display', 'block');
			$('.guy').removeClass('checked');
		}
	});

	$('.footer_up').click(function() {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 'fast' )
	});

});
