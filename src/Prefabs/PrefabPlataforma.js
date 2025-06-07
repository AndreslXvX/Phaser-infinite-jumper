
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabPlataforma extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Plataforma-1", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 80, 16), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.2;
		this.scaleY = 0.2;
		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.checkCollision.down = false;
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setOffset(0, 50);
		this.body.setSize(807, 151, false);

		/* START-USER-CTR-CODE */

		this.platformTexture = Phaser.Math.Between(1, 5);

		if(this.platformTexture == 1){
			this.body.setOffset(0,50)
		} else if(this.platformTexture == 2){
			this.body.setOffset(0,50)
		} else if(this.platformTexture == 3){
			this.body.setOffset(0,50)
		} else if(this.platformTexture == 4){
			this.body.setOffset(0,200)
		} else if(this.platformTexture == 5){
			this.body.setOffset(0,200)
		}
		switch(this.platformTexture){
					case(1): this.platformTexture = "Plataforma-1"
				break
					case(2): this.platformTexture = "Plataforma-2"
				break
					case(3): this.platformTexture = "Plataforma-3"
				break
					case(4): this.platformTexture = "Plataforma-4"
				break
					case(5): this.platformTexture = "Plataforma-5"
				break
		}
		this.setTexture(this.platformTexture)
		// this.randomVelo = Phaser.Math.RND.between(0, 1);
		// switch(this.randomVelo) {
		// 		case(0): this.horizontalVelocity = 400;
		// 	break
		// 		case(1): this.horizontalVelocity = -400;
		// 	break
		// }
		// this.body.velocity.x = this.horizontalVelocity;

		

		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	/* START-USER-CODE */

	update(){
		
	};

	moverPlataforma(velocidad){
		this.body.velocity.x = velocidad
	};
	// Write your code here.
	/* END-USER-CODE */
};

/* END OF COMPILED CODE */

// You can write more code here

