import { expect } from 'chai';
import Game from "./Game";

export default function() {

    describe('Start a simple game and return score', function() {
        it('should start a bowling game and fall one pinch on each throw', async function() {
            const game = new Game();
            playBowlingGame(game, 20);
            checkExpectedScore(game, 20);
        });
    });

    function playBowlingGame(gameInstance: Game, throwsNumber: number) {
        for(let i:number = 0; i < throwsNumber; i++) {
            gameInstance.setScore(1);
        }
    }

    function checkExpectedScore(gameInstance: Game, expectedScore: number) {
        expect(gameInstance.getFinalScore()).to.eql(expectedScore);
    } 
}