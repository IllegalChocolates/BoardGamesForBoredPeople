var ball;
var paddle;

var game = new Phaser.Game(screen.availWidth, screen.availHeight * 0.85, Phaser.AUTO, null, {
    preload: preload, create: create, update: update
});
function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = '#eee';

    game.load.image('ball',   '../images/breakout/ball.png');
    game.load.image('paddle', '../images/breakout/paddle.png');


}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
    ball.anchor.set(0.5);
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.velocity.set(150, -150);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);

    paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
    paddle.anchor.set(0.5,1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;


}
function update() {
    game.physics.arcade.collide(ball, paddle);
    paddle.x = game.input.x || game.world.width*0.5;

}