
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabPlataforma extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "platform", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 80, 16), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.3;
		this.scaleY = 0.3;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.pushable = false;
		this.body.setSize(80, 16, false);

		/* START-USER-CTR-CODE */
		this.horizontalVelocity = 40;
		this.minXPosition = 30;
		this.maxXPosition = 218;
		this.enableMovingPlatform = false

		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	/* START-USER-CODE */
	horizontalVelocity;
	minXPosition;
	maxXPosition;
	enableMovingPlatform;

	update(){
		if(!this.enableMovingPlatform){
			return
		} 
		const velocity = this.body.velocity;
		if(this.x >= this.maxXPosition) {
			velocity.x = this.horizontalVelocity * -1;
		} else if(this.x <= this.minXPosition) {
			velocity.x = this.horizontalVelocity;
		}
	}
	startMovingPlatform(){
		this.enableMovingPlatform = true
		if(Phaser.Math.RND.between(0,1) === 1){
		this.body.velocity.x = this.horizontalVelocity
		} else {
			this.body.velocity.x = this.horizontalVelocity * -1
		}
	}
	stopMovingPlatform(){
		this.enableMovingPlatform = false
		this.body.velocity.x = 0
	}

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

