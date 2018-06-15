var gamePlayState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay(){
        Phaser.Scene.call(this, {'key': 'GamePlay'});
    },

    preload: function() {
        this.load.tilemapTiledJSON('level1', 'maps/level1.json');
        this.load.image('tiles', '/imgs/jungle_terrain.png');
    },

    create: function() {
        console.log('GamePlay');
        this.map = this.make.tilemap({key: 'level1'});
        this.tileset = this.map.addTilesetImage('Jungle Terrian', 'tiles');
        this.map.createStaticLayer(0, this.tileset, 0, 0);
        this.cameras.main.setBounds(0, 0, myGame.width, myGame.height);
    },

    update: function() {
        // Update objects and variables
    },
});


// Add scene to list of scenes
myGame.scenes.push(gamePlayState);