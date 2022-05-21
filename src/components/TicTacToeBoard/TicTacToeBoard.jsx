import React from 'react';
import Square from "../Square/Square";

function TicTacToeBoard() {
    return (
        <div className="inline-grid grid-cols-3 gap-2 bg-gray-200">
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    );
}

export default TicTacToeBoard;