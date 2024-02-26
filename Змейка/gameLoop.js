import Config from "./config.js";

class GameLoop {
    constructor(update, draw) {

        this.update = update;
        this.draw = draw;

        this.Config = new Config();

        this.animate = this.animate.bind(this);
        this.animate();

    }

    animate() {
        requestAnimationFrame(this.animate);
        if(++this.Config.step < this.Config.maxStep) {
            return;
        }
        this.Config.step = 0;

        this.update();
        this.draw();
    }
}
export default GameLoop;