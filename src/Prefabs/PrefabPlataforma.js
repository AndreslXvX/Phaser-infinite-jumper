
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabPlataforma extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "platform", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 80, 16), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 1.5;
		this.scaleY = 1.5;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.checkCollision.down = false;
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(80, 16, false);

		/* START-USER-CTR-CODE */
		this.randomVelo = Phaser.Math.RND.between(0, 1);
		switch(this.randomVelo) {
				case(0): this.horizontalVelocity = 400;
			break
				case(1): this.horizontalVelocity = -400;
			break
		}
		this.body.velocity.x = this.horizontalVelocity;
		this.minXPosition = 130;
		this.maxXPosition = 680;
		this.enableMovingPlatform = true

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	horizontalVelocity;
	minXPosition;
	maxXPosition;
	enableMovingPlatform;
	randomVelo;


	update(){
		if(!this.enableMovingPlatform){
			return
		}
		this.MovingPlatform()

	}
	// startMovingPlatform(){
	// 	this.enableMovingPlatform = true
	// }
	MovingPlatform(){
		const velocity = this.body.velocity;
		switch(this.randomVelo) {
				case(0): 
				if(this.x >= this.maxXPosition) {
					velocity.x = this.horizontalVelocity * -1;
				} else if(this.x <= this.minXPosition) {
					velocity.x = this.horizontalVelocity;
				}
			break
				case(1): 
				if(this.x >= this.maxXPosition) {
					velocity.x = this.horizontalVelocity;
				} else if(this.x <= this.minXPosition) {
					velocity.x = this.horizontalVelocity * -1;
				}
			break
		}
	}
	// stopMovingPlatform(){
	// 	this.enableMovingPlatform = false
	// 	this.body.velocity.x = 0
	// }

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

