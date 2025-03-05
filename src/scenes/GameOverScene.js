
// You can write more code here

/* START OF COMPILED CODE */

import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import TimeEventActionScript from "../scriptnodes/timer/TimeEventActionScript.js";
import FadeEffectCameraActionScript from "../scriptnodes/camera/FadeEffectCameraActionScript.js";
import StartSceneActionScript from "../scriptnodes/scene/StartSceneActionScript.js";
import StopSceneActionScript from "../scriptnodes/scene/StopSceneActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameOverScene extends Phaser.Scene {

	constructor() {
		super("GameOverScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// GameOverText
		const gameOverText = this.add.text(112, 130, "", {});
		gameOverText.preFX.padding = 5;
		gameOverText.text = "Game Over";
		gameOverText.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "64px" });

		// shadowFx
		gameOverText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// ScoreText
		const scoreText = this.add.text(290, 268, "", {});
		scoreText.preFX.padding = 5;
		scoreText.text = "Score";
		scoreText.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "44px" });

		// shadowFx_1
		scoreText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// ScoreValueText
		const scoreValueText = this.add.text(400, 358, "", {});
		scoreValueText.preFX.padding = 5;
		scoreValueText.setOrigin(0.5, 0.5);
		scoreValueText.text = "0";
		scoreValueText.setStyle({ "align": "center", "fontFamily": "PressStart2P-Regular", "fontSize": "34px" });

		// shadowFx_2
		scoreValueText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// timeEventActionScript
		const timeEventActionScript = new TimeEventActionScript(onAwakeActionScript);

		// fadeEffectCameraActionScript_1
		const fadeEffectCameraActionScript_1 = new FadeEffectCameraActionScript(timeEventActionScript);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(fadeEffectCameraActionScript_1);

		// stopSceneActionScript
		const stopSceneActionScript = new StopSceneActionScript(fadeEffectCameraActionScript_1);

		// timeEventActionScript (prefab fields)
		timeEventActionScript.delay = 3000;

		// fadeEffectCameraActionScript_1 (prefab fields)
		fadeEffectCameraActionScript_1.duration = 1000;
		fadeEffectCameraActionScript_1.fadeEvent = "camerafadeoutcomplete";

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "MainMenuScene";

		// stopSceneActionScript (prefab fields)
		stopSceneActionScript.sceneKey = "Level";

		this.scoreValueText = scoreValueText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	scoreValueText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		const score = this.registry.get('score')
		this.scoreValueText.setText(score)

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
