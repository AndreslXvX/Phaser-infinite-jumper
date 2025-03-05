
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabMuro extends Phaser.GameObjects.TileSprite {

	constructor(scene, x, y, width, height, texture, frame) {
		super(scene, x ?? 0, y ?? 0, width ?? 80, height ?? 1200, texture || "wall", frame);

		this.setOrigin(0, 0);
		this.tileScaleX = 3;
		this.tileScaleY = 3.5;

		/* START-USER-CTR-CODE */
		this.setScrollFactor(1,0)

		/** @type {Phaser.Scene} */
		const _scene = scene;
		_scene.physics.world.enable(this);
		this.body.setImmovable(true)
		this.body.setAllowGravity(false)
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	tileOffsetY = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
