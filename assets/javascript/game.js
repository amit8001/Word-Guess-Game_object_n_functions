//Few global variables
var s;
var count;
var letterGuess;
var answerArray;
var clicks_rmg ;
var randomWord ; 
var win =0; //assigned globally (outside of start fn), so that when starts up retains the win #
var losses =0; //assigned globally (outside of start fn), so that when starts up retains the loss #
var rd_wd;
var Undscrs;

//Defining an object called "game"
var game = {
      
      //I define a method in which I define an array of words to choose from, the computer will randonly choose from these words
      getRandomWord: function(){
        var randomWordArr = ["food","pizza","happy","joy","omlette","rice","tacos","pasta","burrito",
                            "sandwich","yogurt","smoothie","mango","fruit","tomato","healthy","meal"];
        //then choose a random word from the array above, using the globally declared variable "randomWord"
        randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
        return randomWord;
      } ,
      //Then I define another method where I have a loop which populates the 
      //elements of an array with as many "_"s based on the length of the randomWord.
      getUnderscoresForSelectedWord: function(rndWrd){
        for (i=0; i < rndWrd.length; i++) {
              answerArray[i] = "_";
        }
        //Next join the elements of an array into a string and return that string and store in a variable s
        s = answerArray.join(" ");
        return s;
      },
      //Then I define a startup method that initiates few variables and gets a random word from the array. 
      // Also display the underscores based on the length of the random word.
      Startup : function(){
        answerArray=[];
        clicks_rmg=12;
        letterGuess=[];
        rd_wd = game.getRandomWord();
        Undscrs = game.getUnderscoresForSelectedWord(rd_wd);
        document.getElementById("answer").innerHTML = Undscrs;
        // document.getElementById("cptr_word").innerHTML = rd_wd;
        console.log( rd_wd); 
        document.getElementById("clk_rmg").innerHTML = clicks_rmg;
        document.getElementById("guess_alrdy").innerHTML = "Letters already guessed: " +letterGuess;
        document.getElementById("wins").innerHTML = "Wins: "+win;
        document.getElementById("loss").innerHTML = "Losses: "+losses;
      }   
};

//Handling the key up event     
document.onkeyup = function(event) {
// Determines which key was pressed.
  var userGuess = event.key;
//  console.log("Inside key press");
//  console.log(rd_wd);
    for (i = 0; i < rd_wd.length; i++){
          if (rd_wd[i] === userGuess){
          //assign that letter to the answerArray in the same position
              answerArray[i] = userGuess;
          //the below line replaces the "_" with actual letter/s on the page for the matched letter
              console.log(answerArray[i]);
              document.getElementById("answer").innerHTML = answerArray.join(" ");
            }
    }  
  //console.log("Hi");
  console.log(answerArray);
  //keeps of a count of the attempts for guessing the word
  count++; 
      
  //This block of if statement PREVENTS the same letter when typed/pressed to decrement the remaining clicks counter 
  //& also prevents being populated in the Guessed Letters array
  //this is per requirement as shown in example video
  if (letterGuess.indexOf(userGuess) == -1 ){
      clicks_rmg--;
      letterGuess.push(userGuess);
  }
    
  //below 2 lines write the values of the "unique" letters already guessed/pressed for that word & remaining clicks
  document.getElementById("guess_alrdy").innerHTML = "Letters Already Guessed: " +letterGuess;
  document.getElementById("clk_rmg").innerHTML = clicks_rmg;
  
  //below if statement checks if the "formed" answer is equal to the randomWord for that iteration, 
  //if so then call the Start function to restart the game and also increment the win global variable by 1. 
  //Increase the win value everytime by 1 when a new game restarts. 
  //Invoking a "Bell" sound effect to indicate that the user has won!
  if (rd_wd === answerArray.join("")){
      game.Startup();
      win++;
      document.getElementById("wins").innerHTML = "Wins: "+win;
      document.getElementById('myAudio').play();
  } 
      
  //if user attempts unique key/letter values 12 times and still cannot complete the word, then loss counter goes up by 1 
  //and the game restarts by invoking the start function.
  //Invoking a "Sad" sound effect to indicate that the user has lost!
  if (clicks_rmg ===0) {
    game.Startup();
    losses++;
    document.getElementById("loss").innerHTML = "Losses: "+losses;
    document.getElementById('myAudioLoss').play();
  }        
}