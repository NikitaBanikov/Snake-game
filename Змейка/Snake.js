import Config from "./config.js";

class Snake {
    constructor () {
        //инициализация змейки(размер змейки, цвет, начальное позиционирование)
        this.Config = new Config();
        this.x = 160,
        this.y = 160,
        this.dx = Config.sizeCell,
        this.dy = 0,
        this.tails = [],
        this.maxTails = 3

        this.control();
    }

    death() {
        //логика смерти змейки
        this.Config = new Config();
        this.x = 160,
        this.y = 160,
        this.dx = Config.sizeCell,
        this.dy = 0,
        this.tails = [],
        this.maxTails = 3
    }

    update(apple, score, canvas) {
        //логика обновления змейки
        //при каких условиях необходимо меняться
        this.x += this.dx;
		this.y += this.dy;

        if (this.x < 0) {
			this.x = canvas.element.width - this.Config.sizeCell;
		} else if ( this.x >= canvas.element.width ) {
			this.x = 0;
		}
	
		if (this.y < 0) {
			this.y = canvas.element.height - this.Config.sizeCell;
		} else if ( this.y >= canvas.element.height ) {
			this.y = 0;
		}

        this.tails.unshift( { x: this.x, y: this.y } );

        if ( this.tails.length > this.maxTails ) {
			this.tails.pop();
		}

        this.tails.forEach( (el, index) => {
	
			if ( el.x === apple.x && el.y === apple.y ) {
				this.maxTails++;
				score.increase();
				apple.randomPosition();
			}
	
			for( let i = index + 1; i < this.tails.length; i++ ) {
	
				if ( el.x == this.tails[i].x && el.y == this.tails[i].y ) {
					this.death();
					score.setToZero();
					apple.randomPosition();
				}
	
			}
	
		});

    }

    draw(context) {
        //отрисовка змейки
        this.tails.forEach( (el, index) => {
			if (index == 0) {
				context.fillStyle = "#FA0556";
			} else {
				context.fillStyle = "#A00034";
			}
			context.fillRect( el.x, el.y, this.Config.sizeCell, this.Config.sizeCell );
		} );
    }

    control() {
        //логика управления змейкой (кнопки)
        document.addEventListener("keydown",  (e) => {
			if ( e.code == "KeyW" ) {
				this.dy = -this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyA" ) {
				this.dx = -this.config.sizeCell;
				this.dy = 0;
			} else if ( e.code == "KeyS" ) {
				this.dy = this.config.sizeCell;
				this.dx = 0;
			} else if ( e.code == "KeyD" ) {
				this.dx = this.config.sizeCell;
				this.dy = 0;
			}
		});
    }
}

export default Snake;