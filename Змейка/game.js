import Snake from './Snake.js'
import Apple from './Apple.js'
import Score from './Score.js'
import Canvas from './canvas.js'
import GameLoop from './gameLoop.js'

class Game {

    constructor( container ) {

        this.canvas = new Canvas( container );
        this.snake = new Snake();
        this.apple = new Apple( this.canvas );
        this.score = new Score( ".game-score .score-count", 0 );
        new GameLoop( this.update.bind(this), this.draw.bind(this) );

    }

    update() {
        this.snake.update( this.apple, this.score, this.canvas );
    }

    draw() {

        this.canvas.context.clearRect( 0, 0, this.canvas.element.width, this.canvas.element.height );

        this.snake.draw( this.canvas.context );
        this.apple.draw( this.canvas.context );

    }

}

new Game( document.querySelector(".canvas-wrapper") );