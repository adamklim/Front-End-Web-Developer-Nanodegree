// Game with a twist, you're a bug and play against humans!

// Enemies our player must avoid
// Start defined start position and speed
// Enemy sprite is selected based on it's speed
var Enemy = function() {
    var enemySprite = [
        'images/char-princess-girl.png',
        'images/char-pink-girl.png',
        'images/char-horn-girl.png',
        'images/char-cat-girl.png',
        'images/char-boy.png'
    ];
    this.x = -100;
    this.y = 72 + (83 * Math.floor(Math.random()* 3));
    this.speed = Math.random() * 500 + 100;
    this.sprite = enemySprite[(Math.floor(this.speed/100 - 1))];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // Delete Enemy that crossed screen and instatiate new Enemy
    if (this.x > 550) {
        delete this.x;
        allEnemies.push(new Enemy());
    }
    // detects collisions, resets player position, counts failures
    if (((this.x - player.x > - 70) && (this.x - player.x < 70)) && (this.y === player.y)) {
    player.x = player.initX;
    player.y = player.initY;
    failure++;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
    this.sprite = 'images/enemy-bug.png';
    this.initX = 200;
    this.initY = 404;
    this.x = this.initX;
    this.y = this.initY;
};

// If player reaches water, player position reset to start point, counts success
Player.prototype.update = function() {
    if (this.y < 0) {
        this.x = this.initX;
        this.y = this.initY;
        success++;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    if (key === "up" && this.y > 0) {
        this.y -= 83;
    }
    if (key === "right" && this.x < 400) {
        this.x += 101;
    }
    if (key === "down" && this.y < 350) {
        this.y += 83;
    }
    if (key === "left" && this.x > 0) {
        this.x -= 101;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for (var i = 0; i < 4; i++) {
    allEnemies[i] = new Enemy();
}


var player = new Player();

var failure = 0;
var success = 0;

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

