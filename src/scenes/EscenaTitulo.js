
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EscenaTitulo extends Phaser.Scene {

	constructor() {
		super("EscenaTitulo");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// titleText
		const titleText = this.add.text(400, 100, "", {});
		titleText.preFX.padding = 5;
		titleText.setOrigin(0.5, 0);
		titleText.text = "Infinite\nJumper";
		titleText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "PressStart2P-Regular", "fontSize": "64px" });

		// shadowFx
		titleText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// startGameText
		const startGameText = this.add.text(134, 300, "", {});
		startGameText.preFX.padding = 5;
		startGameText.setInteractive(new Phaser.Geom.Rectangle(0, 0, 532, 28), Phaser.Geom.Rectangle.Contains);
		startGameText.text = "Click Para comenzar";
		startGameText.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "28px" });

		// shadowFx_1
		startGameText.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// BotonInstrucciones
		const botonInstrucciones = this.add.text(400, 376, "", {});
		botonInstrucciones.preFX.padding = 5;
		botonInstrucciones.setInteractive(new Phaser.Geom.Rectangle(0, 0, 336, 28), Phaser.Geom.Rectangle.Contains);
		botonInstrucciones.setOrigin(0.5, 0);
		botonInstrucciones.text = "Intrucciones";
		botonInstrucciones.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "28px" });

		// shadowFx_2
		botonInstrucciones.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		this.titleText = titleText;
		this.startGameText = startGameText;
		this.botonInstrucciones = botonInstrucciones;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	titleText;
	/** @type {Phaser.GameObjects.Text} */
	startGameText;
	/** @type {Phaser.GameObjects.Text} */
	botonInstrucciones;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.startGameText.on('pointerup', () => {this.scene.start('Level')})
		this.botonInstrucciones.on('pointerup', () => {
			this.scene.start('InstruccionesUI')
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
