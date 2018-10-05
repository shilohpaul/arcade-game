#frontend-nanodegree-arcade-game
===============================
## Table of Contents

* [Contributing](#contributing)
* [About](#about)
* [Functions](#functions)

##Contributing
The engine.js, resources, js, css, html, and images were provided by Udacity as
was some code in the app.js file.

For the remainder of the app.js file:
Author: Shiloh Paul
Date: 10/5/18

##About
The arcade game project allows a player to play a character and attempt to get
past several bugs to reach the other side of the canvas. Player can use left,
right, up, and down arrow keys to navigate. Once the player reaches the other
side, they are sent back to start to play again. If the player collides with a
bug, they are also sent back to start.

##Load Game
To load the game, navigate to https://github.com/shilohpaul/arcade-game and
either clone or download from the files from the repository. Then, simply open
the index.html file in your preferred browser.

##Functions
Enemy Class:
update: allows the x coordinate of the bug to change based on their speed which
is randomly generated. When the bug goes off of the screen, x is reset as is the
speed of the bug. This method also checks for a collision with the player object,
and if there is one, resets the player to start position.

Player Class:
update: resets player to start position when they reach the edge of the game
handleInput: checks for user pressing one of the arrow keys. If an arrow key is
pressed, and the player is not going to go out of bounds, the arrow key will
move the character
