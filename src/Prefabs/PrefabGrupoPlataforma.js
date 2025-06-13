
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import PrefabPlataforma from './PrefabPlataforma.js'
/* END-USER-IMPORTS */

export default class PrefabGrupoPlataforma extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 0, 0), Phaser.Geom.Rectangle.Contains);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/**@type {Phaser.Scene} */
		const _scene = scene
		this.group = _scene.add.group ({
			classType: PrefabPlataforma,
			runChildUpdate: true
		});
		this.betweenY = 300
		this.UpperPlatformYPosition = 0
		this.velocidadPlataforma = 400
		this.minX = 180
		this.maxX = 620

		this.group.get(400, 80)
		

		for (let i = 1; i < 10; i += 1) {
			const x = Phaser.Math.RND.between(this.minX, this.maxX);
			const y = i * (this.betweenY * -1);
			this.group.get(x, y)
			if(y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = y;
			}
		}
		this.BottomPlatformYPosition = 0

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	/**@type {Phaser.GameObjects.Group} */
	group;
	/**@type {number} */
	maxPlatformDistance;
	/**@type {number} */
	UpperPlatformYPosition;
	/**@type {number} */
	BottomPlatformYPosition;
	/**@type {bool} */
	movingPlatform;
	/**@type {number} */
	playerPosition;
	/**@type {number} */
	betweenY;
	// Write your code here.

	update(){
		const children = this.group.getChildren();
		const childrenToMove = [];
		this.maxPlatformDistance = this.scene.cameras.main.worldView.centerY * 5 
		this.playerPosition = this.scene.cameras.main.worldView.centerY

		// detectar plataformas fuera de pantalla
		children.forEach((child) => {
			if(this.playerPosition <= child.y - 700 ){
				this.BottomPlatformYPosition = child.y;
				childrenToMove.push(child);
			}
			if(child.y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = child.y;
			}

			if(child.x >= this.maxX) {
					child.body.velocity.x = this.velocidadPlataforma * -1

				} else if(child.x <= this.minX) {
					child.body.velocity.x = this.velocidadPlataforma
				}
			
		})
		// detectar plataformas fuera de pantalla

			
		//crear nuevas plataformas
		childrenToMove.forEach((child) => {
			child.x = Phaser.Math.Between(this.minX, this.maxX)
			let childrenToMoveYOffset = this.UpperPlatformYPosition - this.betweenY
			child.y = childrenToMoveYOffset;
			child.colisionSuperior = false
			if((this.scene.currentScore) >= 10){	
				console.log("dificultad1")
				if(Phaser.Math.RND.between(0,1) == 1){
					if(Phaser.Math.RND.between(0,1) == 1){child.moverPlataforma(this.velocidadPlataforma)} 
					else {child.moverPlataforma(this.velocidadPlataforma * -1)}
				} else {
					child.moverPlataforma(0)
				}
			} 
			if((this.scene.currentScore) >= 20){
				console.log("dificultad2")

				if(Phaser.Math.RND.between(0,1) == 1){child.moverPlataforma(this.velocidadPlataforma)} 
				else {child.moverPlataforma(this.velocidadPlataforma * -1)}
			}
			if((this.scene.currentScore) >= 30){
				console.log("dificultad3")

				child.setTexture('Plataforma-2')
				if(Phaser.Math.RND.between(0,1) == 1){child.moverPlataforma(this.velocidadPlataforma)} 
				else {child.moverPlataforma(this.velocidadPlataforma * -1)}
			}
			
		})
		//crear nuevas plataformas
	

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
