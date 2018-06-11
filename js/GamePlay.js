var gamePlayState = new Phaser.Class({
    // Define scene
    Extends: Phaser.Scene,
    initialize:
    function MainMenu(){
        Phaser.Scene.call(this, {'key': 'GamePlay'});
    },

    preload: function() {
        // Preload images for this state
    },

    create: function() {
        console.log('GamePlay');
    },

    update: function() {
        // Update objects and variables
    },
});


// Add scene to list of scenes
myGame.scenes.push(gamePlayState);