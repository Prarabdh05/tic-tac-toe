import React from 'react';
import { connect } from 'react-redux';
import { checkResult } from '../../../actions/resultActions';


function Summary(props) {
    const { players, result, board, checkResult } = props;

    if (!(result.tie || result.win)) {
        checkResult(board)
    }


    if (result.tie) {
        return <div className="alert alert-info mt-4">It's a Draw :(</div>
    }
    else if (result.win === 'X') {
        const player = players.p1 === 'X' ? 'PLAYER 1' : 'Player 2'
        return <div className="alert alert-success mt-2">{player} Wins!</div>
    }
    else if (result.win === 'O') {
        const player = players.p1 === 'O' ? 'PLAYER 1' : 'Player 2'
        return <div className="alert alert-success mt-2">{player} Wins!</div>
    }


    return (
        <div className="mt-4">
            <div className="col" style={{ marginLeft: "55px" }}>
                <p><strong>Current Turn</strong>: {players.turn === 'p1' ? <span className="badge badge-pill badge-danger">Player 1</span> : <span className="badge badge-pill badge-success">Player 2</span>}</p>
                <p><strong>Player 1</strong>: {players.p1}</p>
                <p><strong>Player 2</strong>: {players.p2}</p>
            </div>
        </div>
    )
}

export default connect(({ players, result, board }) => ({ players, result, board }),
    dispatch => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Summary);