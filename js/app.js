/**
*  This is FEND project 3 - Frogger Clone
*  by Eric Parsons
*  e.b.parsons@gmail.com
*  vowy @ GitHub
*
*  Use arrow keys to move the character to the water. Avoid the enemies (Bugs).
*
*/


let enemyCollision = false;

// Randm Integer Inclusive function, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random//
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


// Enemies our player must avoid
class Enemy {
  constructor() {
    this.height = 40;
    this.width = 80;
    this.x = 0
    this.y = getRandom(0,230);
    this.speed = getRandom(40,600);
    this.sprite = 'images/enemy-bug.png';

  }
  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
  };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
  update (dt) {
    if (this.x>-20) {
    this.x += this.speed*dt;
  }
    if (this.x>=460) {
      this.y=getRandom(0,230);
      this.x=-19;
    }

for (var i = 0; i < allEnemies.length; i++) {

    if (allEnemies[i].y < player.y + player.height &&
        allEnemies[i].y + allEnemies[i].height > player.y &&
        allEnemies[i].x < player.x + player.width &&
        allEnemies[i].width + allEnemies[i].x > player.x) {
    return enemyCollision = true;
  }
}
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
}

// Now write your own player class
class Hero {
  constructor() {
    this.height = 40;
    this.width = 45;
    this.x = 200;
    this.y = 400;
    this.life = 3;
    this.sprite = 'images/char-boy.png';
  }
  update () {
    this.speed = 30;
    if (enemyCollision === true) {
      alert('You Lose :(')
      location.reload();
      return enemyCollision = false;
    }
    //win condition
   if (this.y < 0) {
     alert('YOU WON!!!')
   }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(dt) {
    switch(dt) {
      case 'left':
      this.x -=this.speed;
      break;
      case 'right':
      this.x +=this.speed;
      break;
      case 'up':
      this.y -=this.speed;
      break;
      case 'down':
      this.y +=this.speed;
      break;

      default:
      break;
    }
  }
};


// Now instantiate your objects.
let allEnemies = [new Enemy];
setTimeout(function(){allEnemies.push(new Enemy)},1000);
setTimeout(function(){allEnemies.push(new Enemy)},2000);
const player = new Hero();

// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
