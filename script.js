$(document).ready(function(){
	window.onbeforeunload = function() {
  	return "Your Promodoro data will be lost. are you sure?";
};
	var sessionCount = parseInt($('#set-session').html());
	var breakCount = parseInt($('#set-break').html());
	var sessionTime = 0;
	// reset back to default
	function resetAll(count){
		$('#reset').click(function(){

			clearInterval(count);
			sessionCount = 25;
			breakCount = 5;
			$('#reset').show();
			$('.hiding').show();
			$('#screen-display').html("Session");
			$('#time').html(sessionCount);	

		});
	}

	//minus break time
	$('#minus-break').click(function(){

		if(breakCount > 1){
			breakCount -= 1;
			$('#set-break').html(breakCount);
		}
	});
	//BREAK TIME block
	//adding break time
	$('#plus-break').click(function(){

			breakCount += 1;
			$('#set-break').html(breakCount);
	});
	//SESSION TIME BLOCK
	//minus session time
	$('#minus-session').click(function(){
		
		if(sessionCount > 1){
			sessionCount -= 1;
			$('#set-session').html(sessionCount);
		}
	});
	$('#plus-session').click(function(){

			sessionCount += 1;
			$('#set-session').html(sessionCount);
	});

	$('#start').click(function(){
		$('.hiding').hide();
		var counter = setInterval(timer, 1000);
		sessionCount *= 60;
		
		function timer(){
			sessionCount -= 1;
			if(sessionCount === 0){
				breakCount *= 60;
				clearInterval(counter);
				var breakCounter = setInterval(breakTimer, 1000);
				$('#screen-display').text("Break");
			}

			if(sessionCount%60>=10){
				$('#time').html(Math.floor(sessionCount/60)+":"+sessionCount%60);
			}
			else{
				$('#time').html(Math.floor(sessionCount/60)+":"+"0"+sessionCount%60);
			}
			resetAll(counter);	
			//for break time
			function breakTimer(){
					
				$('#display').text("Break");
				
				breakCount -= 1;

				if(breakCount === 0){
					$('#reset').show();
					clearInterval(breakCounter);

				}

				if(breakCount%60>=10){
					$('#time').html(Math.floor(breakCount/60)+":"+breakCount%60);
				}
				else{
					$('#time').html(Math.floor(breakCount/60)+":"+"0"+breakCount%60);
				}		

				resetAll(breakCounter);
			}
		}
	});
});