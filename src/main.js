import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";
import UI from "./scenes/UI.js";
import GameOverScene from "./scenes/GameOverScene.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		pixelArt: true,
		physics: {
			default: 'arcade',
			arcade: {
				gravity: {x: 0, y: 800},
				}
				
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("UI", UI);
	game.scene.add("GameOverScene", GameOverScene);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}