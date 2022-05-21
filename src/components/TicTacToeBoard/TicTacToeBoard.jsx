import React, {useState} from 'react';
import Square from "../Square/Square";

function TicTacToeBoard() {
    const EMPTY = "EMPTY";
    const CIRCLE = "O";
    const CROSS = "X";

    return (
        <div className="inline-grid grid-cols-3 gap-2 bg-gray-200">
            <Square pos={0}/>
            <Square pos={1}/>
            <Square pos={2}/>
            <Square pos={3}/>
            <Square pos={4}/>
            <Square pos={5}/>
            <Square pos={6}/>
            <Square pos={7}/>
            <Square pos={8}/>
        </div>
    );
}

export default TicTacToeBoard;