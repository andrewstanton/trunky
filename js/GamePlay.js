var gamePlayState = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GamePlay(){
        Phaser.Scene.call(this, {'key': 'GamePlay'});
    },

    preload: function() {
        this.load.tilemapTiledJSON('level1', 'maps/level1.json');
        this.load.image('tiles', '/imgs/tiles.png');
        //this.load.image('beta-player', '/imgs/beta.png');
    },

    create: function() {
        console.log('GamePlay');
        this.cameras.main.setBounds(0, 0, myGame.tilesize * myGame.levels[0].twidth, myGame.tilesize * myGame.levels[0].theight);
        this.physics.world.setBounds(0, 0, myGame.tilesize * myGame.levels[0].twidth, myGame.tilesize * myGame.levels[0].theight);

        //this.player = this.physics.add.image(50, 50, 'beta-player');
        //this.player.setCollideWorldBounds(true);

        // Input
        cursors = this.input.keyboard.createCursorKeys();
        
        // Cameras
        //this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
        this.cameras.main.setBackgroundColor('#ccccff');

        // Map
        this.map = this.make.tilemap({key: 'level1'});
        this.tileset = this.map.addTilesetImage('tiles', 'tiles');
        this.backgroundLayer = this.map.createStaticLayer('Background', this.tileset);
        this.groundLayer = this.map.createStaticLayer('Ground', this.tileset);
        this.groundLayer.setCollisionByExclusion([-1]);

        // Physics
        //this.physics.add.collider(this.player, this.groundLayer);
    },

    update: function() {
        // Update objects and variables
        /*this.player.setVelocity(0);
        if (cursors.left.isDown){
            this.player.setVelocityX(-500);
        } else if (cursors.right.isDown){
            this.player.setVelocityX(500);
        }
        if (cursors.up.isDown){
            this.player.setVelocityY(-500);
        }
        else if (cursors.down.isDown){
            this.player.setVelocityY(500);
        }*/
    },
});


// Add scene to list of scenes
myGame.scenes.push(gamePlayState);