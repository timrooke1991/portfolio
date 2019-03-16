---
slug: refactoring-namespacing-and-gulp
date: 2018-07-19T15:43:58.772Z
title: "Refactoring, Namespacing and Gulp"
template: "post"
draft: false
description: "We’ve been learning more JavaScript this week. Our homework has been pretty cool lately, we had to build a Daft Punk soundboard, a game of rock, paper, scissors and program a 10-second timer. The…"
category: ""
tags: [JavaScript,Refactoring,Coding]
---

### Refactoring, Namespacing and Gulp

We’ve been learning more JavaScript this week. Our homework has been pretty cool lately, we had to build a Daft Punk soundboard, a game of rock, paper, scissors and program a 10-second timer. The workload is beginning to ramp up and the problems are becoming more complex too.

### Refactoring: Rock, Paper, Scissors

We had to build a rock, paper, scissors game, which was a good challenge. As part of this, we also looked at refactoring and ways we can make our code less repetitive. This was my solution. A long gnarly IF statement, which is extremely repetitive. It’s incredibly frustrating as you know when developing the game that there must be a better way to validate which player had won, you just can’t figure how to go about doing it.

This was my initial attempt at rock, paper, scissors. It worked fine but was a long-winded solution.

```
if (playerOne === 'rock' && playerTwo.toString() === 'paper') {  
  playerWins('Player Two');  
}   
else if (playerOne === 'scissors' && playerTwo.toString() === 'rock') {  
  playerWins('Player Two');  
}   
else if (playerOne === 'paper' && playerTwo.toString() === 'scissors') {  
  playerWins('Player Two');  
}   
else if (playerOne === 'paper' && playerTwo.toString() === 'rock') {  
  playerWins('Player One');  
}   
else if (playerOne === 'scissors' && playerTwo.toString() === 'paper') {  
  playerWins('Player One');  
}   
else if (playerOne === 'rock' && playerTwo.toString() === 'scissors') {  
  playerWins('Player One');  
  }   
else if (playerOne === playerTwo.toString()) {  
  $winnerMessage.html('Tie!');  
}
```

As anticipated there were better ways to go about do this, it seems I had over engineered my IF statement. The IF statement itself could have been refactored to be much shorter like the example below. This is much cleaner and saved a few lines of code. More importantly, it is much more readable. In my first example, I have checked all the player one win conditions and then all the player two win conditions, then if none of those is met, I return the message “Tie!”. In the below example, this is tidied up. The game checks for a Tie first. Then, the player one win conditions and then if neither the player one conditions or the tie conditions are met, the game returns player two wins. This saves the need for all the player two IF statements.

```
$pOneChoice.html(playerOne);  
$pTwoChoice.html(playerTwo);  
  
if(playerOne === playerTwo) {  
 $winnerMessage.text('Tie');  
} else if (  
  playerOne === 'rock' && playerTwo === 'scissors' ||  
  playerOne === 'paper' && playerTwo === 'rock' ||  
  playerOne === 'scissors' && playerTwo === 'paper'  
) {  
  $winnerMessage.text('You win');  
} else {  
  $winnerMessage.text('You lose');  
}
```

A third and final example shows how you could approach this problem differently. You can cleverly use an object, which acts as a dictionary for the win conditions for all the various options. The key, value pair provides an easily accessible reference to the choice and the relevant win condition. As a result, when validating the win condition, you just need to simple IF statements that take the player one’s choice as a string. This is passed to the object, which returns the required winning condition. For example, winConditions\[‘rock’\], would return the value ‘scissors’ (the thing that rock beats). Therefore, `if (player2Choice === 'scissors' && winConditions[player1Choice] === 'scissors')` – Player 1 wins. This is because `player2Choice` equals the option that player two selected. `winConditions[player1Choice]` returns what player 1 would need player two’s value to be if they were to win. Therefore, when they match, player 1 would win. If this is not the case, the function moves to the next line with `player2Choice` and `player1Choice` switching roles. Then finally, if nothing has been returned, the function returns ‘Tie’.

This is a much tidier way of solving the rock, paper, scissors problem. It’s shorter and much more readable. However, it’s a lot more scalable also. In class, we built extended the game to be rock, paper, scissors, lizard, Spock — which was very easy to do using the below solution and only a couple more lines of code. However, to achieve a function rock, paper, scissors, lizard, Spock with a reliance on IF statements would be a long more work and a lot more code. All we had to do to extend the functionality of the below game was to for our `winConditions` object to contain an array of winning conditions as every option could be beaten by two items under the extended game, rather than one. Also, we changed then IF statement logic to use the array method .includes. For example, `winConditions[player1Choice].includes(player2Choice)`. That’s all that was required! A lot of functionality added in no time at all. This was really cool. I get a lot from neat, elegant and scalable solutions. Even though the scale of this game will probably never be tested, the knowledge that the game will scale so well and easily is very rewarding.

```
const winConditions = {  
  rock: 'scissors',  
  paper: 'rock',  
  scissors: 'paper'  
};  
  
function findWinner(player1Choice,player2Choice) {  
  if (winConditions[player1Choice] === player2Choice)   
    return 'Player 1 wins';  
  if (winConditions[player2Choice] === player1Choice)   
    return 'Player 2 wins';  
    
  return 'Tie';  
}
```

Overall, this exercise really demonstrates the importance of refactoring code. For this game, it is perhaps less important. However, for larger applications that will become bigger and grow, refactoring is an important process. Hypothetically, if I did want to add lots of features to my rock, paper, scissors game and used the first solution, adding the functionality would be painful and time-consuming. On the other hand, if I had refactored my code properly and built new features on top of the third solution this would be quicker and easier.

### New Set

A useful thing that I learnt this week was the new Set feature that is now available in JavaScript by virtue of ECMAScript 6. You can do stuff like:

```
Array.from(newSet([4,5,4,6,3,4,5,2,23,1,4,4,4])); 
```
```
// returns [4, 5, 6, 3, 2, 23, 1]
```

This is very cool. It’s a feature that I have often required on Code Wars challenges and in general programming, but I was not aware that this was possible in such a simple line of code. The Ruby programming language has a .unique method, which handily does this. Therefore, the fact that this job was previously a lot more onerous in vanilla JavaScript was a little frustrating. However, it is now available courtesy of ES6.

### Debugger;

Elsewhere, I learnt about a new key word in JavaScript: debugger. As you probably guessed, it is useful for debugging code. If you put the debugger line in your code, it will stop the execution of JavaScript. This will also call the debugging function, which will help diagnose issues in your code. It’s a useful feature, which will probably save a lot of time in future.

### Namespacing

We also looked namespacing, which I am yet to get my head around. I understanding it conceptually, but I am a little fuzzy on how to do this myself. I will have to do a little more reading and experiment with it to fully understand it. While it may not be necessary for personal projects, it’s an important concept because it is commonly used in the industry and relied on for larger scale applications. Also, I imagine perhaps it is the sort of thing they might ask about in interviews and job applications, so I feel like it is an important thing to grasp.

### Gulp

Towards the end of the week, we have looked at Gulp. Gulp is a task runner, which helps you automate development processes. For example, we have set it up to use BrowserSync, so that when you edit your code, you don’t have refresh the page. It saves a lot of time. Also, it saves the need for continuously pressing cmd + S and cmd + R. We’ve set it up to do a few other things as well such as automatically minify our script and stylesheets. Also, we’re using Babel.js to compile our JavaScript ES6 code into ES5 for the benefit of older browsers. There are so many .js libraries and frameworks that it is a little daunting to know where to begin. However, in the course we’ve tackled Gulp.js and Babel.js now. I think we come on to angularJS and express and a few other later in the course. And I’ve been reading up on React.js over the last couple of days, so I gradually beginning to lift the lid slightly on the plethora of JavaScript libraries and frameworks.
