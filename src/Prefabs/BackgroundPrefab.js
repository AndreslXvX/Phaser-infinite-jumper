
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BackgroundPrefab extends Phaser.GameObjects.TileSprite {

	constructor(scene, x, y, width, height, texture, frame) {
		super(scene, x ?? 0, y ?? 0, width ?? 800, height ?? 600, texture || "background", frame);

		this.setOrigin(0, 0);
		this.tileScaleX = 3;
		this.tileScaleY = 3.5;

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
