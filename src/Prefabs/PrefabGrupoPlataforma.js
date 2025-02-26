
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
		this.group.get(120,176)

		for(let i = 0; i < 5; i += 1){
			const x = Phaser.Math.Between(45, 200);
			const y =  i * (-150) + 10;
			this.group.get(x, y)

		}
		this.maxPlatformDistance = this.scene.scale.height * 3
		this.bottomMostPlatformYPosition = 0
		this.movingPlatform = false
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	/**@type {Phaser.GameObjects.Group} */
	group;
	/**@type {number} */
	maxPlatformDistance;
	/**@type {number} */
	bottomMostPlatformYPosition;
	/**@type {bool} */
	movingPlatform;
	// Write your code here.

	update(){
		const scrollY = this.scene.cameras.main.scrollY;
		const children = this.group.getChildren();
		const childrenToMove = [];
		this.bottomMostPlatformYPosition = children[0].y

		children.forEach((child) => {
			if(child.y >= scrollY + this.maxPlatformDistance){
				childrenToMove.push(child);
			}
			if(child.y > this.bottomMostPlatformYPosition){
				this.bottomMostPlatformYPosition = child.y;
			}
			
		})

		childrenToMove.forEach((child) => {
			child.x = Phaser.Math.Between(45, 200)
			let childrenToMoveYOffset = Phaser.Math.Between(30, 30)
			child.y = scrollY - childrenToMoveYOffset;
			if(Phaser.Math.RND.between(0,1) === 1 ){
				child.startMovingPlatform()
			} else {
				child.stopMovingPlatform()
			}
			console.log(this.movingPlatform)
			
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
