// ## Enemy Sprite
// Create the Enemy class to add in some baddies
Q.Sprite.extend("Enemy", {
    init: function (p) {
        this._super(p, {sheet: 'enemy', vx: 100, visibleOnly: true});

        this.add('2d, aiBounce');

        this.on("bump.left,bump.right,bump.bottom", function (collision) {
            if (collision.obj.isA("Player")) {
                Q.stageScene("endGame", 1, {label: "You Died"});
                collision.obj.destroy();
            }
        });

        this.on("bump.top", function (collision) {
            if (collision.obj.isA("Player")) {
                this.destroy();
                collision.obj.p.vy = -300;
            }
        });
    }
});