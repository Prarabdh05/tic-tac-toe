import { X_WINS, TIE, O_WINS } from '../helpers/actionTypes';
import { checkVictory } from '../helpers/resultHelper';

export function checkResult(board) {
    if (checkVictory(board, 'X')) {
        return {
            type: X_WINS
        }
    }
    else if (checkVictory(board, 'O')) {
        return {
            type: O_WINS
        }
    }
    else {
        const check = board.filter(Symbol => Symbol === null)
        if (check.length === 0) {
            return {
                type: TIE
            }
        }
        else {
            return {
                type: 'RANDOM'
            }
        }

    }

}