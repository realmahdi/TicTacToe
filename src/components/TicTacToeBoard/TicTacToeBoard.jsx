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

    return (
        <div className="inline-grid grid-cols-3 gap-2 bg-gray-200">
            <Square pos={0} value={board.positions[0]}/>
            <Square pos={1} value={board.positions[1]}/>
            <Square pos={2} value={board.positions[2]}/>
            <Square pos={3} value={board.positions[3]}/>
            <Square pos={4} value={board.positions[4]}/>
            <Square pos={5} value={board.positions[5]}/>
            <Square pos={6} value={board.positions[6]}/>
            <Square pos={7} value={board.positions[7]}/>
            <Square pos={8} value={board.positions[8]}/>
        </div>
    );
}

export default TicTacToeBoard;