/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;

const numberOfEnemies = 25;
const enemyArray = [];
let gameFrame = 0;

class Enemy {
   constructor() {
      this.image = new Image();
      this.image.src = 'image/enemy1.png';
      this.x = Math.random() * canvas.width,
         this.y = Math.random() * canvas.height,
         this.spriteWidth = 293;
      this.spriteHeight = 155;
      this.width = this.spriteWidth / 2.5;
      this.height = this.spriteHeight / 2.5;
      this.speed = Math.random() * 4 - 2;
      this.frame = 0;
      this.flapSpeed = Math.floor(Math.random() * 3+ 1);
   }

   update() {
      this.x += this.speed;
      this.y += this.speed;
      if(gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
   }
   };
   draw() {
      ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
   }
};
for (let i = 0; i < numberOfEnemies; i++) {
   enemyArray.push(new Enemy());
}

function animate() {
   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
   enemyArray.forEach(enemy => {
      enemy.update();
      enemy.draw();
   })
   gameFrame++;
   requestAnimationFrame(animate);  
}
animate();