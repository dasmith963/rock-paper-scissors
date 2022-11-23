function getComputerChoice(){
  const randomNumber = Math.floor( (Math.random() * 3) + 1);
 
  if (randomNumber === 1){
    return 'Rock';
  } else if (randomNumber === 2){
    return 'Paper';
  } else{
    return 'Scissors';
  }
}


// the user inputs their choice: rock, paper, scissors
// check for case sensitive values 

// when both played an object, look to see who’s won 
	//if Rock “crushes” scissors
 	 //if scissors “cuts” paper 
  	//if paper “covers” rock.
	//if both players throw the same object, tie. 
    // In this situation, simply play again. Continue doing this until there is a clear winner.

// Determine the winner

 // Initialize a scoreCount variable and set its value to zero
// “best of 5” While counter is smaller than 5 increment the counter by one
// Print the value of the counter variable