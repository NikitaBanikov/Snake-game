class Score {
    constructor(scoreBlock, score = 0) {
        //инициализировать начальное кол-во очков
        this.scoreBlock = document.querySelector(scoreBlock);
        this.score = score;

        this.draw();
    }

    draw() {
        //логика отрисовки блока с очками
        this.scoreBlock.innerHTML = this.score;
    }

    increase() {
        //увеличение очков и перерисовка табло
        this.score++
        this.draw();
    }

    reset() {
        //сброс очков при смерти
        this.score = 0;
        this.draw();
    }
}

export default Score;