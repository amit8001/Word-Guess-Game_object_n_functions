# Word-Guess-Game_object_n_functions

This is a word guessing game implemented using Javascript objects and functions. (Please see game.js file within assets/javascript folder to see detailed inline comments on the object declarations and usage.)

The game starts with the computer having chosen a random word. You have 12 attempts to guess that word. 

Per instructions provided in the sample videos, the game RESTARTS if either of the below 2 conditions are met
 - If you are not able to guess the word the computer chose within 12 attempts
 - The game also restarts, when you correctly guess the random word chosen by the computer.

NOTE: 
1. Once you type in a letter, the game does not allow you to press that key again. The "unique" letters you have guessed so far are displayed in
   the screen.
2. If you correctly guess the word by typing the correct letters for that randomly chosen word, then the "Wins" variable value displayed on the    screen goes up by 1. You will also hear a bell sound effect! 
3. If you are not able to correctly guess the word in 12 attempts then the "Losses" value displayed on the screen goes up by 1. You will also      hear a "Sad" sound effect! 