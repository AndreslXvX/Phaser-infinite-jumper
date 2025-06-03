
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
		this.betweenY = 300
		this.UpperPlatformYPosition = 0
		for (let i = 1; i < 10; i += 1) {
			const x = Phaser.Math.Between(80, 700);
			const y = i * (this.betweenY * -1);
			this.group.get(x, y)
			if(y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = y;
			}
			
		}
		this.BottomPlatformYPosition = 0
		
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
	/**@type {number} */
	betweenY;
	// Write your code here.

	update(){
		const children = this.group.getChildren();
		const childrenToMove = [];
		this.maxPlatformDistance = this.scene.cameras.main.worldView.centerY * 5
		this.playerPosition = this.scene.cameras.main.worldView.centerY

		
		
		children.forEach((child) => {
			if(this.playerPosition <= child.y - 600 ){
				this.BottomPlatformYPosition = child.y;
				childrenToMove.push(child);
			}
			if(child.y < this.UpperPlatformYPosition){
				this.UpperPlatformYPosition = child.y;
			}

			if(child.x >= 680) {
					child.body.velocity.x = -400

				} else if(child.x <= 130) {
					child.body.velocity.x = 400
				}
			
		})

		childrenToMove.forEach((child) => {
			child.x = Phaser.Math.Between(80, 700)
			let childrenToMoveYOffset = this.UpperPlatformYPosition - this.betweenY
			child.y = childrenToMoveYOffset;
			child.moverPlataforma(4000)
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
