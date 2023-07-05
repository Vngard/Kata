export default class Game {

    totalScore: number;
    throwScore: number;

    constructor() {
        this.totalScore = 0;
        this.throwScore = 0;
    }

    setThrow(throwNumber: number) {
        this.throwScore = throwNumber;
    }

    setScore(newScore: number) {
        this.totalScore += newScore;
    }

    getFinalScore() {
        return this.totalScore;
    }
    
}