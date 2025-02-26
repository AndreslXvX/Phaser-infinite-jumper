
// You can write more code here

/* START OF COMPILED CODE */

import PrefabJugador from "../Prefabs/PrefabJugador.js";
import PrefabGrupoPlataforma from "../Prefabs/PrefabGrupoPlataforma.js";
import PrefabMuro from "../Prefabs/PrefabMuro.js";
import OnAwakeActionScript from "../scriptnodes/utils/OnAwakeActionScript.js";
import LaunchSceneActionScript from "../scriptnodes/scene/LaunchSceneActionScript.js";
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

		// LayerPlayer
		const layerPlayer = this.add.layer();
		layerPlayer.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// prefabJugador
		const prefabJugador = new PrefabJugador(this, 124, -80);
		prefabJugador.scaleX = 0.7;
		prefabJugador.scaleY = 0.7;
		layerPlayer.add(prefabJugador);

		// prefabGrupoPlataforma
		const prefabGrupoPlataforma = new PrefabGrupoPlataforma(this);
		this.add.existing(prefabGrupoPlataforma);

		// LayerLevel
		const layerLevel = this.add.layer();
		layerLevel.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// rightWall
		const rightWall = new PrefabMuro(this, 0, 0);
		this.add.existing(rightWall);

		// prefabMuro_1
		const prefabMuro_1 = new PrefabMuro(this, 216, 0);
		this.add.existing(prefabMuro_1);
		prefabMuro_1.flipX = true;
		prefabMuro_1.flipY = false;

		// image_1
		/** @type {Phaser.GameObjects.Image & { body: Phaser.Physics.Arcade.Body }} */
		const image_1 = this.add.image(124, 160, "ground");
		image_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 240, 32), Phaser.Geom.Rectangle.Contains);
		this.physics.add.existing(image_1, false);
		image_1.body.allowGravity = false;
		image_1.body.pushable = false;
		image_1.body.immovable = true;
		image_1.body.setOffset(0, 16);
		image_1.body.setSize(240, 16, false);

		// onAwakeActionScript
		const onAwakeActionScript = new OnAwakeActionScript(this);

		// launchSceneActionScript
		const launchSceneActionScript = new LaunchSceneActionScript(onAwakeActionScript);

		// lists
		const walls = [prefabMuro_1, rightWall];
		const movingWallsTileSprites = [prefabMuro_1, rightWall];
		const wallsBody = [prefabMuro_1, rightWall];

		// colliderPlayerPlatform
		const colliderPlayerPlatform = this.physics.add.collider(prefabJugador, prefabGrupoPlataforma.group);

		// colliderPlayerWalls
		const colliderPlayerWalls = this.physics.add.collider(prefabJugador, wallsBody);

		// collider
		this.physics.add.collider(prefabJugador, image_1);

		// prefabMuro_1 (prefab fields)
		prefabMuro_1.tileOffsetY = -120;

		// launchSceneActionScript (prefab fields)
		launchSceneActionScript.sceneKey = "UI";

		this.prefabJugador = prefabJugador;
		this.prefabGrupoPlataforma = prefabGrupoPlataforma;
		this.teclado_A = teclado_A;
		this.teclado_D = teclado_D;
		this.colliderPlayerPlatform = colliderPlayerPlatform;
		this.colliderPlayerWalls = colliderPlayerWalls;
		this.walls = walls;
		this.movingWallsTileSprites = movingWallsTileSprites;
		this.wallsBody = wallsBody;

		this.events.emit("scene-awake");
	}

	/** @type {PrefabJugador} */
	prefabJugador;
	/** @type {PrefabGrupoPlataforma} */
	prefabGrupoPlataforma;
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

	/* START-USER-CODE */
	isGameOver = false
	currentScore = 0
	maxHeight = 0
	startingMaxHeight = 0


	// Write more your code here

	create() {
		this.editorCreate();
		this.cameras.main.startFollow(this.prefabJugador, false, 0.1, 1, 0.1);
		this.cameras.main.setDeadzone(this.scale.width)
		this.isGameOver = false
		this.currentScore = 0
		this.maxHeight = 0
		this.startingMaxHeight = 0
		this.firstJumpMade = false
	}

	update(){

		const distance = Math.floor(Math.abs(this.prefabJugador.body.bottom))

		this.WallsYupdate()
		this.Rebotar(distance)


		if(this.teclado_A.isDown){
			this.prefabJugador.setFlipX(true)
			this.prefabJugador.setVelocityX(-100)
		} else if(this.teclado_D.isDown){
			this.prefabJugador.setFlipX(false)
			this.prefabJugador.setVelocityX(100)
		} else {
			this.prefabJugador.setVelocityX(0)
		}

		this.movingWallsTileSprites.forEach((tileSprite) => {
			tileSprite.tilePositionY = this.prefabJugador.y + tileSprite.tileOffsetY
		});

		if(this.isGameOver){
			this.prefabJugador.setVelocityY(15)
			this.prefabJugador.setVelocityX(0)
			const fx = this.prefabJugador.preFX.addWipe(0.1, 1, 0);

        this.tweens.add({
            targets: fx,
            progress: 1,
            repeatDelay: 1000,
            hold: 1000,
            duration: 2000,
			onComplete: () => {
				this.prefabJugador.body.enable = false
			}

        });
			return
		}

		if(distance > this.maxHeight && this.firstJumpMade){
			this.maxHeight = distance;
			this.currentScore = this.maxHeight - this.startingMaxHeight;
			this.scene.get("UI").updateScoreText(Math.floor(this.currentScore / 10))
		}


		if(this.prefabJugador.y > this.prefabGrupoPlataforma.bottomMostPlatformYPosition + 50){
			this.isGameOver = true;

			this.prefabJugador.play('animacionPerder')
			console.log('Game Over')
		}

		this.prefabGrupoPlataforma.update(); 

	}
	Rebotar(distance){
		const tocarFondo = this.prefabJugador.body.touching.down
		if(tocarFondo){
			this.prefabJugador.play('animacionSaltar')
			this.prefabJugador.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'animacionSaltar', () => {
				this.prefabJugador.play('animacionGirar')
			})
			this.prefabJugador.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + 'animacionGirar', () => {
				this.prefabJugador.play('animacionCaer')
			})
			this.prefabJugador.setVelocityY(-400)

			if(!this.firstJumpMade){
				this.firstJumpMade = true;
				this.startingMaxHeight = distance
			}

			}
	}
	WallsYupdate(){

		this.wallsBody.forEach((tileSprite) => {
			if(tileSprite.flipX){
			tileSprite.body.setOffset(15, this.cameras.main.worldView.y)
			} else {
				tileSprite.body.setOffset(0, this.cameras.main.worldView.y)
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
