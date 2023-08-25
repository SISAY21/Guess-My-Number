# Guess My Number

A simple game built using Javascript. The game idea is based on the Udemy course of Jonas's Complete JS course and I tried to modify the interface.

## How to play?

It is simple. You just have to put numbers between 1 - 20 in the input field. Then according to the number you entered the following messages will be displayed for helping you to improve your guess:

  <ol>
    <li>If your number matches the secret number: You win so (✅ Correct) message will be displayed</li>
    <li>If your number doesn't match the secret number (i.e. whether it is above or below). 
      <ul>
        <li>If it is above: (📈 Too high) message will be displayed</li>
        <li>If it is below: (📉 Too low) message will be displayed</li>
      </ul>
    </li>
  </ol>

But There is one condition where you will lose the game. You will have 20 chances for guessing. If you take all your chances without guessing the number right then (💥 You have lost the game) message will be displayed and the game will be over.

### Addtional:

In the game there will be a highscore label which records your greatest score (the remaining guesses). You can improve this highscore by hit the restart button and make your guess right by not wasting much more remaining guesses. Each time you restart the game you will have 20 chances to guess.
