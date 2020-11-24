import { combineReducers } from 'redux';
import { boardReducer } from './boardReducers';
import { playerReducer } from './playerReducer';
import { resultReducer } from './resultReducer';
const rootReducers = combineReducers({
    board: boardReducer,
    players: playerReducer,
    result: resultReducer
})
export default rootReducers;