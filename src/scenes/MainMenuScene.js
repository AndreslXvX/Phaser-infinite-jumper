
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../Prefabs/BackgroundPrefab.js";
import MiddleGroundPrefab from "../Prefabs/MiddleGroundPrefab.js";
import PrefabMuro from "../Prefabs/PrefabMuro.js";
import PrefabJugador from "../Prefabs/PrefabJugador.js";
import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import FadeEffectCameraActionScript from "../scriptnodes/camera/FadeEffectCameraActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenuScene extends Phaser.Scene {

	constructor() {
		super("MainMenuScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundPrefab
		const backgroundPrefab = new BackgroundPrefab(this, 0, 0);
		this.add.existing(backgroundPrefab);

		// middleGroundPrefab
		const middleGroundPrefab = new MiddleGroundPrefab(this, 0, 0);
		this.add.existing(middleGroundPrefab);

		// image_1
		/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
		const image_1 = this.add.image(400, 552, "ground");
		image_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 240, 32), Phaser.Geom.Rectangle.Contains);
		image_1.scaleX = 3;
		image_1.scaleY = 3;
		this.physics.add.existing(image_1, false);
		image_1.body.allowGravity = false;
		image_1.body.pushable = false;
		image_1.body.immovable = true;
		image_1.body.setOffset(0, 16);
		image_1.body.setSize(240, 16, false);

		// rightWall
		const rightWall = new PrefabMuro(this);
		this.add.existing(rightWall);

		// rightWall_1
		const rightWall_1 = new PrefabMuro(this, 720, 0);
		this.add.existing(rightWall_1);
		rightWall_1.flipX = true;
		rightWall_1.flipY = false;

		// prefabJugador
		const prefabJugador = new PrefabJugador(this, 400, 480);
		this.add.existing(prefabJugador);
		prefabJugador.body.allowGravity = false;

		// titleText
		const titleText = this.add.text(176, 84, "", {});
		titleText.preFX.padding = 5;
		titleText.text = "Infinite\nJumper";
		titleText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "PressStart2P-Regular", "fontSize": "64px" });

		// shadowFx
		titleText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// startGameText
		const startGameText = this.add.text(134, 278, "", {});
		startGameText.preFX.padding = 5;
		startGameText.setInteractive(new Phaser.Geom.Rectangle(0, 0, 532, 28), Phaser.Geom.Rectangle.Contains);
		startGameText.text = "Click Para comenzar";
		startGameText.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "28px" });

		// shadowFx_1
		startGameText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// fadeEffectCameraActionScript
		new FadeEffectCameraActionScript(onAwakeActionScript);

		this.prefabJugador = prefabJugador;
		this.startGameText = startGameText;

		this.events.emit("scene-awake");
	}

	/** @type {PrefabJugador} */
	prefabJugador;
	/** @type {Phaser.GameObjects.Text} */
	startGameText;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.startGameText.on("pointerup", () => {this.scene.start('Level')})
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
