import React, {useState} from 'react';
import Square from "../Square/Square";
import Result from "../Result/Result";

function TicTacToeBoard() {
    const EMPTY = "EMPTY";
    const CIRCLE = "O";
    const CROSS = "X";

    const [board, setBoard] = useState({
        player: CIRCLE,
        positions: [
            EMPTY, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY,
            EMPTY, EMPTY, EMPTY,
        ]
    });

    function takeTurn(pos) {
        const newBoard = [...board.positions];
        newBoard[pos] = board.player;
        setBoard({
            player: board.player === CIRCLE ? CROSS : CIRCLE,
            positions: newBoard
        });
    }

    const gameBoard = board.positions.map((item, index) => {
        return <Square
            pos={index}
            key={index}
            value={item}
            onClick={takeTurn}
        />
    })

    return (
        <>
            <div className="inline-grid grid-cols-3 gap-2 bg-gray-200">
                {gameBoard}
            </div>
            <Result/>
        </>
    );
}

export default TicTacToeBoard;