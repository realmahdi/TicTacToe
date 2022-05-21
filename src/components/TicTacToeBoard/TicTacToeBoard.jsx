import React, {useState} from 'react';
import Square from "../Square/Square";

function TicTacToeBoard() {
    const EMPTY = "EMPTY";
    const CIRCLE = "O";
    const CROSS = "X";

    const [board, setBoard] = useState({
        player: CIRCLE,
        positions: [
            EMPTY, EMPTY, CROSS,
            EMPTY, EMPTY, EMPTY,
            CIRCLE, EMPTY, EMPTY,
        ]
    });

    const gameBoard = board.positions.map((item, index) => {
        return <Square
            pos={index}
            key={index}
            value={item}
            onClick={takeTurn}
        />
    })

    function takeTurn(pos) {
        console.log(pos, 'clicked');
    }

    return (
        <div className="inline-grid grid-cols-3 gap-2 bg-gray-200">
            {gameBoard}
        </div>
    );
}

export default TicTacToeBoard;