// ## Player Sprite
// The very basic player sprite, this is just a normal sprite
// using the player sprite sheet with default controls added to it.
Q.Sprite.extend("Player", {

    // the init constructor is called on creation
    init: function (p) {

        // You can call the parent's constructor with this._super(..)
        this._super(p, {
            sheet: "player",  // Setting a sprite sheet sets sprite width and height
            jumpSpeed: -400,
            speed: 300
        });

        this.add('2d, platformerControls');

        this.on("hit.sprite", function (collision) {

            if (collision.obj.isA("Tower")) {
                Q.stageScene("endGame", 1, {label: "You Won!"});
                this.destroy();
            }
        });
    }
});