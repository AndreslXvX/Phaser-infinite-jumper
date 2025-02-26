
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class UI extends Phaser.Scene {

	constructor() {
		super("UI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// scoreText
		const scoreText = this.add.text(235, 5, "", {});
		scoreText.setOrigin(1, 0);
		scoreText.text = "0";
		scoreText.setStyle({ "fontFamily": "PressStart2P-Regular" });

		this.scoreText = scoreText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	scoreText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	updateScoreText(text){
		this.scoreText.setText(text);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
