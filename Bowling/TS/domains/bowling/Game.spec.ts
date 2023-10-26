import { expect } from 'chai';
import Game from "./Game";

export default function() {

    describe('Start a simple game and return score', function() {
        it('should start a bowling game and fall one pinch on each throw', async function() {
            const game = new Game();
            playBowlingGame(game, 20, 1);
            checkExpectedScore(game, 20);
        });
    });

    describe('Test game with a spare', function() {
        it('can calculate game score when there is a spare', async function() {
            const game = new Game();
            game.computeScore(6);
            game.computeScore(4);
            game.computeScore(3);
            playBowlingGame(game, 17, 0);
            checkExpectedScore(game, 16);
        });
    });

    function playBowlingGame(gameInstance: Game, throwsNumber: number, pinch: number) {
        for(let i:number = 0; i < throwsNumber; i++) {
            gameInstance.computeScore(pinch);
        }
    }

    function checkExpectedScore(gameInstance: Game, expectedScore: number) {
        expect(gameInstance.getFinalScore()).to.eql(expectedScore);
    } 

}