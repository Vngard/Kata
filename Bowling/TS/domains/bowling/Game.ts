export default class Game {

    totalScore: number;

    constructor() {
        this.totalScore = 0;
    }

    computeScore(newScore: number) {
        this.totalScore += newScore;
    }

    getFinalScore() {
        return this.totalScore;
    }
}