
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
			runChildUpdate: true,
		});
		this.UpperPlatformYPosition = 0
		for (let i = 1; i < 5; i += 1) {
			const x = Phaser.Math.Between(80, 700);
			const y = i * (-150);
			this.group.get(x, y)
			if(y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = y;
			}
			
		}
		
		this.movingPlatform = false
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
	// Write your code here.

	update(){

		// if(this.numPlataformas === 0){
		// 		for(this.numPlataformas = 1; this.numPlataformas < 5; this.numPlataformas += 1){
		// 			const x = Phaser.Math.Between(80, 700);
		// 			const y =  this.numPlataformas * (-150);
		// 			this.group.get(x, y)
		// 			this.maxPlatformDistance = y
		// 			console.log(this.maxPlatformDistance)

		// 		}
				
		// } 

		const children = this.group.getChildren();
		const childrenToMove = [];
		//this.UpperPlatformYPosition = children[0].y
		this.maxPlatformDistance = this.scene.cameras.main.worldView.centerY * 5
		this.playerPosition = this.scene.cameras.main.worldView.centerY
		// console.log("distancia ultima plataforma y: " + this.UpperPlatformYPosition)
		//  console.log(" plataforma y: " + children[0].y)
		// console.log("camara y posicion: " + this.scene.cameras.main.worldView.centerY)
		
		children.forEach((child) => {
			if(this.playerPosition <= child.y - 300 ){
				console.log("plataforma y: " + child.y)
				this.BottomPlatformYPosition = child.y;
				childrenToMove.push(child);
			}
			if(child.y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = child.y;
				console.log("UpperPlatform y: " + child.y)
			}
			
		})

		childrenToMove.forEach((child) => {
			child.x = Phaser.Math.Between(80, 700)
			let childrenToMoveYOffset = this.UpperPlatformYPosition - 150
			child.y = childrenToMoveYOffset;
			// if(Phaser.Math.RND.between(0,1) === 1 ){
			// 	child.startMovingPlatform()
			// } else {
			// 	child.stopMovingPlatform()
			// }
			
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
