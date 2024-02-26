import Config from "./config.js";
import {getRandomInt} from "./supportFunction.js";
class Apple {
    constructor(canvas) {
        //инициализация цвета, размера, и тп
        this.x = 0;
        this.y = 0;
        this.canvas = canvas;

        this.Config = new Config();
        this.randomPosition();

    }

    draw(context) {
        //отрисовка яблока
        context.beginPath();
        context.fillStyle = "#A00034";
        context.arc(this.x + (this.Config.sizeCell / 2), this.y + (this.Config.sizeCell / 2), this.Config.sizeApple, 0, 2 * Math.PI);
        context.fill();
    }

    getPosition() {
        //получение новой позиции яблока на игровом поле
        this.x = getRandomInt(0, this.canvas.element.width / this.Config.sizeCell) * this.Config.sizeCell;
        this.y = getRandomInt(0, this.canvas.element.width / this.Config.sizeCell) * this.Config.sizeCell;
    }
}

export default Apple;