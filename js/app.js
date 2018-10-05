// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed*dt;
  if (this.x = 505) {
    this.x = 0;
    this.speed = speed;
  }

  if (player.x === this.x && player.y === this.y) {
    player.x = 252;
    player.y = 550;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-horn-girl' ;
};

Player.prototype.update = function() {
//updates based on handleInput
};

Player.prototype.handleInput = function() {
  if (this.x > 0 && this.x < 505 && this.y > 0 && this.y < 606) {
    if (onkeydown == 'left'){
      this.x = this.x - 100;
    }
    if (onkeydown == 'right'){
      this.x = this.x + 100;
    }
    if (onkeydown == 'up'){
      this.y = this.y - 100;
    }
    if (onkeydown == 'down'){
      this.y = this.y + 100;
    }
  }
  else if (this.y == 0){
    this.x = 252;
    this.y = 600;
  }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];
let enemyRowLocation = [50,100,150];
enemyRowLocation.forEach(function(yCoordinate) {
  let enemy = new Enemy(0, yCoordinate, Math.random() * 300 +100)
  allEnemies.push(enemy);
})

// Place the player object in a variable called player
let player = new Player (252, 600);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
