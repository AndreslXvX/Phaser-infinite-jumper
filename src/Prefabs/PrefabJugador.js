
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabJugador extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame ?? "player-idle-1.png");

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 80, 80), Phaser.Geom.Rectangle.Contains);
		scene.physics.add.existing(this, false);
		this.body.checkCollision.up = false;
		this.body.setOffset(31, 26);
		this.body.setSize(15, 39, false);
		this.play("AnimacionQuieto");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
