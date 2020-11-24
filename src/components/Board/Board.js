import { React, Fragment } from 'react';
import Square from './Square/Square';
import { connect } from 'react-redux';
import Summary from './Summary/summary';
function Board(props) {
    const { board } = props;

    return (
        <Fragment>
            <div id="board" className="mt-4 d-flex flex-wrap">
                {
                    board.map((symbol, i) => <Square key={i} index={i} symbol={symbol} />)
                }
            </div>
            <Summary />
        </Fragment>
    )
}


export default connect(({ board }) => ({ board }))(Board);