
// You can write more code here

/* START OF COMPILED CODE */

import MiddleGroundPrefab from "../Prefabs/MiddleGroundPrefab.js";
import PrefabJugador from "../Prefabs/PrefabJugador.js";
import PrefabGrupoPlataforma from "../Prefabs/PrefabGrupoPlataforma.js";
import PrefabMuro from "../Prefabs/PrefabMuro.js";
import StopSceneActionScript from "../scriptnodes/scene/StopSceneActionScript.js";
import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import LaunchSceneActionScript from "../scriptnodes/scene/LaunchSceneActionScript.js";
import FadeEffectCameraActionScript from "../scriptnodes/camera/FadeEffectCameraActionScript.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// Teclado_A
		const teclado_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// Teclado_D
		const teclado_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// rightButton
		const rightButton = this.add.image(800, 0, "_MISSING");
		rightButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		rightButton.scaleX = 12.5;
		rightButton.scaleY = 18.9;
		rightButton.setOrigin(1, 0);
		rightButton.alpha = 0;
		rightButton.alphaTopLeft = 0;
		rightButton.alphaTopRight = 0;
		rightButton.alphaBottomLeft = 0;
		rightButton.alphaBottomRight = 0;

		// leftButton
		const leftButton = this.add.image(0, 0, "_MISSING");
		leftButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 32, 32), Phaser.Geom.Rectangle.Contains);
		leftButton.scaleX = 12.5;
		leftButton.scaleY = 18.9;
		leftButton.setOrigin(0, 0);
		leftButton.alpha = 0;
		leftButton.alphaTopLeft = 0;
		leftButton.alphaTopRight = 0;
		leftButton.alphaBottomLeft = 0;
		leftButton.alphaBottomRight = 0;

		// LayerPlayer
		const layerPlayer = this.add.layer();
		layerPlayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// middleGroundPrefab
		const middleGroundPrefab = new MiddleGroundPrefab(this, 0, 0);
		layerPlayer.add(middleGroundPrefab);

		// prefabJugador
		const prefabJugador = new PrefabJugador(this, 400, -80);
		layerPlayer.add(prefabJugador);

		// prefabGrupoPlataforma
		const prefabGrupoPlataforma = new PrefabGrupoPlataforma(this);
		this.add.existing(prefabGrupoPlataforma);

		// LayerLevel
		const layerLevel = this.add.layer();
		layerLevel.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// floorImage
		/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
		const floorImage = this.add.image(400, 48, "platform");
		floorImage.setInteractive(new Phaser.Geom.Rectangle(0, 0, 240, 32), Phaser.Geom.Rectangle.Contains);
		floorImage.scaleX = 3;
		floorImage.scaleY = 3;
		this.physics.add.existing(floorImage, false);
		floorImage.body.allowGravity = false;
		floorImage.body.pushable = false;
		floorImage.body.immovable = true;
		floorImage.body.setSize(80, 16, false);

		// rightWall
		const rightWall = new PrefabMuro(this);
		this.add.existing(rightWall);

		// prefabMuro_1
		const prefabMuro_1 = new PrefabMuro(this, 720, 0);
		this.add.existing(prefabMuro_1);
		prefabMuro_1.flipX = true;
		prefabMuro_1.flipY = false;

		// stopUiScene
		const stopUiScene = new StopSceneActionScript(this);

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// launchSceneActionScript
		const launchSceneActionScript = new LaunchSceneActionScript(onAwakeActionScript);

		// fadeEffectCameraActionScript_1
		new FadeEffectCameraActionScript(onAwakeActionScript);

		// launchGameOverScene
		const launchGameOverScene = new LaunchSceneActionScript(this);

		// lists
		const walls = [prefabMuro_1, rightWall];
		const movingWallsTileSprites = [prefabMuro_1, rightWall];
		const wallsBody = [prefabMuro_1, rightWall];
		const platforms = [];
		const movingMiddleGround = [middleGroundPrefab];

		// colliderPlayerPlatform
		const colliderPlayerPlatform = this.physics.add.collider(prefabJugador, prefabGrupoPlataforma.group);

		// colliderPlayerWalls
		const colliderPlayerWalls = this.physics.add.collider(prefabJugador, wallsBody);

		// collider
		this.physics.add.collider(prefabJugador, floorImage);

		// WallPlatformCollide
		this.physics.add.collider(walls, prefabGrupoPlataforma);

		// prefabMuro_1 (prefab fields)
		prefabMuro_1.tileOffsetY = -120;

		// stopUiScene (prefab fields)
		stopUiScene.sceneKey = "UI";

		// launchSceneActionScript (prefab fields)
		launchSceneActionScript.sceneKey = "UI";

		// launchGameOverScene (prefab fields)
		launchGameOverScene.sceneKey = "GameOverScene";

		this.rightButton = rightButton;
		this.leftButton = leftButton;
		this.prefabJugador = prefabJugador;
		this.prefabGrupoPlataforma = prefabGrupoPlataforma;
		this.floorImage = floorImage;
		this.stopUiScene = stopUiScene;
		this.launchGameOverScene = launchGameOverScene;
		this.teclado_A = teclado_A;
		this.teclado_D = teclado_D;
		this.colliderPlayerPlatform = colliderPlayerPlatform;
		this.colliderPlayerWalls = colliderPlayerWalls;
		this.walls = walls;
		this.movingWallsTileSprites = movingWallsTileSprites;
		this.wallsBody = wallsBody;
		this.platforms = platforms;
		this.movingMiddleGround = movingMiddleGround;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	rightButton;
	/** @type {Phaser.GameObjects.Image} */
	leftButton;
	/** @type {PrefabJugador} */
	prefabJugador;
	/** @type {PrefabGrupoPlataforma} */
	prefabGrupoPlataforma;
	/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
	floorImage;
	/** @type {StopSceneActionScript} */
	stopUiScene;
	/** @type {LaunchSceneActionScript} */
	launchGameOverScene;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclado_A;
	/** @type {Phaser.Input.Keyboard.Key} */
	teclado_D;
	/** @type {Phaser.Physics.Arcade.Collider} */
	colliderPlayerPlatform;
	/** @type {Phaser.Physics.Arcade.Collider} */
	colliderPlayerWalls;
	/** @type {PrefabMuro[]} */
	walls;
	/** @type {PrefabMuro[]} */
	movingWallsTileSprites;
	/** @type {PrefabMuro[]} */
	wallsBody;
	/** @type {Array<any>} */
	platforms;
	/** @type {MiddleGroundPrefab[]} */
	movingMiddleGround;

	/* START-USER-CODE */
	isGameOver = false
	currentScore = 0
	maxHeight = 0
	startingMaxHeight = 0
	cameraYposition;
	setoffsetY;
	jumpsNum;


	// Write more your code here

	create() {
		this.editorCreate();
		this.cameras.main.startFollow(this.prefabJugador, true);
		this.cameras.main.setDeadzone(this.scale.width)
		this.isGameOver = false
		this.currentScore = 0
		this.maxHeight = 0
		this.startingMaxHeight = 0
		this.firstJumpMade = false
		this.setoffsetY = 0
		this.jumpsNum = 0


	}

	update(){


		const pointer = this.input.activePointer;



		const distance = Math.floor(Math.abs(this.prefabJugador.body.bottom))
		const tocarFondo = this.prefabJugador.body.touching.down
		if(tocarFondo){
			this.prefabJugador.play('animacionSaltar')
			this.prefabJugador.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'animacionSaltar', () => {
				this.prefabJugador.play('animacionGirar')
			})
			this.prefabJugador.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'animacionGirar', () => {
				this.prefabJugador.play('animacionCaer')
			})
			this.prefabJugador.setVelocityY(-800)
			this.jumpsNum += 1

			if(!this.firstJumpMade){
				this.firstJumpMade = true;
				this.startingMaxHeight = distance
			}
		}




		this.setoffsetY = Math.floor(this.cameras.main.worldView.y)
		this.wallsBody.forEach((tileSprite) => {
			if(tileSprite.flipX){
			tileSprite.body.setOffset(15, this.setoffsetY)
			} else {
			tileSprite.body.setOffset(0, this.setoffsetY)
			}
		})


	if(!this.isGameOver){
		if(this.teclado_A.isDown){
			this.prefabJugador.setFlipX(true)
			this.prefabJugador.setVelocityX(-400)
		} else if(this.teclado_D.isDown){
			this.prefabJugador.setFlipX(false)
			this.prefabJugador.setVelocityX(400)
		} else {
			this.prefabJugador.setVelocityX(0)
		}
		if(pointer.isDown){
		if(pointer.x < this.cameras.main.centerX){
			this.prefabJugador.setFlipX(true)
			this.prefabJugador.setVelocityX(-400)
		} else if (pointer.x > this.cameras.main.centerX){
			this.prefabJugador.setFlipX(false)
			this.prefabJugador.setVelocityX(400)
		}
		}
	}


	// this.input.keyboard.on('keyup', () => {this.prefabJugador.setVelocityX(0)} );
	// this.leftButton.on('pointerdown', () => 
	// {this.prefabJugador.setFlipX(true)
	// this.prefabJugador.setVelocityX(-400)});
	// this.rightButton.on('pointerdown', () => 
	// {this.prefabJugador.setFlipX(false)
	// this.prefabJugador.setVelocityX(400)})
	// this.leftButton.on('pointerout', () => {this.prefabJugador.setVelocityX(0)});
	// this.rightButton.on('pointerout', () => {this.prefabJugador.setVelocityX(0)})


		this.movingWallsTileSprites.forEach((tileSprite) => {
			tileSprite.tilePositionY = this.prefabJugador.y  + (tileSprite.tileOffsetY || 0)
		});
		this.movingMiddleGround.forEach((tileSprite) => {
			tileSprite.tilePositionY = this.prefabJugador.y * 0.2
		});

		if(distance > this.maxHeight && this.firstJumpMade){
			this.maxHeight = distance;
			this.currentScore = this.maxHeight - this.startingMaxHeight;
			this.scene.get("UI").updateScoreText(Math.floor(this.currentScore / 10))
		}

		if(this.isGameOver){
			this.prefabJugador.setVelocityY(15)
			this.floorImage.destroy(true)
			return
		}

		if(this.prefabJugador.y > this.prefabGrupoPlataforma.BottomPlatformYPosition){
			this.isGameOver = true;
			this.prefabJugador.play('animacionPerder');
			this.prefabJugador.setVelocityX(0)
			const fx = this.prefabJugador.preFX.addWipe(0.1, 1, 0);
			this.tweens.add({
				targets: fx,
				progress: 1,
				duration: 3000,
				onComplete: () => {
					console.log('leprechaun')
					this.registry.set('score', Math.floor(this.currentScore / 10));
					this.stopUiScene.execute()
					this.launchGameOverScene.execute()
				},
        });
		}
		this.prefabGrupoPlataforma.update(); 
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
