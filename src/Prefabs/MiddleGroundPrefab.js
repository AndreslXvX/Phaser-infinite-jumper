
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MiddleGroundPrefab extends Phaser.GameObjects.TileSprite {

	constructor(scene, x, y, width, height, texture, frame) {
		super(scene, x ?? 0, y ?? 0, width ?? 800, height ?? 1200, texture || "Escenario", frame);

		this.setOrigin(0, 0);
		this.tileScaleY = 0.95;

		/* START-USER-CTR-CODE */
		this.setScrollFactor(1,0)
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
