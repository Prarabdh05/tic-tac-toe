import React from 'react';
import Board from './components/Board/Board';


const App = () =>

    <div className="container">
        <div className="row">
            <div className="col col-md-6 offset-md-3">
                <h1 className="marginLeft" >Tic-Tac-Toe</h1>
                <Board />
            </div>
        </div>

    </div>


export default App;