
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InstruccionesUI extends Phaser.Scene {

	constructor() {
		super("InstruccionesUI");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(400, 112, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "¿Como Jugar?";
		text_1.setStyle({ "align": "center", "fontFamily": "PressStart2P-Regular", "fontSize": "48px", "shadow.stroke": true });

		// shadowFx
		text_1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// text_2
		const text_2 = this.add.text(400, 182, "", {});
		text_2.setOrigin(0.5, 0);
		text_2.text = "Solo puedes moverte a la izquierda o a la derecha, puedes hacerlo utilizando:\n(En Telefono)\n* Tocando la parte izquierda  y derecha de la pantalla\n(En PC)\n* Presionando A y D\n* Dando click en ambos lados izquierdo y derecho de la pantalla ";
		text_2.setStyle({ "align": "center", "fixedWidth": 626, "fixedHeight": 487, "fontFamily": "PressStart2P-Regular", "fontSize": "21px" });
		text_2.setLineSpacing(17.5);
		text_2.setWordWrapWidth(600);

		// shadowFx_1
		text_2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// BotonRegresar
		const botonRegresar = this.add.text(400, 700, "", {});
		botonRegresar.setInteractive(new Phaser.Geom.Rectangle(0, 0, 288, 36), Phaser.Geom.Rectangle.Contains);
		botonRegresar.setOrigin(0.5, 0);
		botonRegresar.text = "Regresar";
		botonRegresar.setStyle({ "fontFamily": "PressStart2P-Regular", "fontSize": "36px" });

		// shadowFx_2
		botonRegresar.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		this.botonRegresar = botonRegresar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	botonRegresar;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.botonRegresar.on('pointerup', () => {this.scene.start('EscenaTitulo')})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
