//Enemy class controls the bugs
class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Parameter: dt, a time delta between ticks - provided by Udacity
  update(dt) {
  //this updates x's location based on speed, randomly generated
    this.x = this.x + this.speed*dt;
    //resets the x coordinate to 0 after the bug goes off screen
    if (this.x > 505) {
      this.x = -20;
      this.speed = Math.floor(Math.random() * 300 + 100);
    }
/*this checks for a player collision. Anytime player is within 50 of a bug's
location, AND a bug is within 50 of player's location, player gets put to start
position*/
    if (player.x < this.x + 50 && this.x < player.x + 50 && player.y < this.y + 50 && this.y < player.y + 50){
      player.x = 200;
      player.y = 400;
    }
  }
// Provided by Udacity - renders bug image
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

//player class controls character that user plays
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
  }
/*checks to see if player has made it past the bugs and if so, updates location
to start*/
  update() {
    if (this.y < 10) {
      this.x = 200;
      this.y = 400;
      alert("You Won!")
    }
  }
/*takes a user input, arrowkey, to see if the key pressed matches with the key name
(defined in the event listener below)*/
  handleInput(arrowKey) {
/*each arrowkey press will only move the character if the character is not close
to the edge of the visable canvas.*/
    if (arrowKey == 'left' && this.x > 0 ){
      this.x = this.x - 100;
    }
    if (arrowKey == 'right' && this.x < 400){
      this.x = this.x + 100;
    }
    if (arrowKey == 'up' && this.y > 0){
      this.y = this.y - 90;
    }
    if (arrowKey == 'down' && this.y < 400){
      this.y = this.y + 90;
    }
  }
//Provided by Udacity - renders player image
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

// Creates empty array that will be called in engine.js
let allEnemies = [];
//creates an array to hold the y coordinates
let enemyRowLocation = [60,145,230];
/*pushes three new sprites with those y coordinates and randomized speeds to the
allEnemies array*/
enemyRowLocation.forEach(function(yCoordinate) {
  let enemy = new Enemy(0, yCoordinate, Math.floor(Math.random() * 300 + 100))
  allEnemies.push(enemy);
})

// Place the player object in a variable called player
let player = new Player (200, 400);


// Provided by Udacity - adds event listeners to the arrow keys
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
