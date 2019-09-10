var playing = false;
var score;
var action;
var timeremaining;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
	//if we are playing
	if(playing == true){
		location.reload(); //reload page
	} else {//if we are not playing
		
	    //change mode to playing
		playing = true;
		
		//set score to 0
		score = 0;
		document.getElementById("scorevalue").innerHTML = score;
		
		//show countdown box
		show("timeremaining")
		
		timeremaining = 60;
		document.getElementById("timeremainningvalue").innerHTML = timeremaining;
		
		//hide game over box
		
		 hide("gameOver");
		
		//change button to reset
		
		document.getElementById("startreset").innerHTML = "Reset Game";
		
		//start countdown
		
		startCountdown();
		
		// generate a new Q&A
		
		generateQA();
	}
	
}
	//if we are playing
		//reload page
	
		//set score to 0
		
		//reduce time by 1sec in loops
			//time left?
				//yes->countinue
				//no-> gameover
		//change button to reset
		// generate new button Q&A



//if we click on answer box
	//if we are playing
		//correct?
			//yes
				//increase score
				//show correct box for 1sec
				//generate new Q&A
			//no 
				//show try again box for 1sec

 
//function

// start counter
 function startCountdown(){
	  action = setInterval(function(){
		  timeremaining -= 1;
		   document.getElementById("timeremainningvalue").innerHTML = timeremaining; 
		  if (timeremaining == 0){//game over
		  		stopCountdown();
		
		 	    show("gameOver")
	      
		  document.getElementById("gameOver").innerHTML = "<p>Game over!</> <p>Your score is " + score + ".</p>";
	      
		   hide("timeremaining");
		   hide("correct");
		   hide("wrong")
		   playing = false;
		   document.getElementById("startreset").innerHTML = "Start Game"
			    
		  }
	  },1000); 
    
 }

// stop counter
function stopCountdown(){
	clearInterval(action);
}

// hide an element
function hide (Id) {
	document.getElementById(Id).style.display = "none";	
}

// show an element
function show (Id) {
	document.getElementById(Id).style.display = "block";
}

// generate quation and multiple answer

function generateQA(){
	
}