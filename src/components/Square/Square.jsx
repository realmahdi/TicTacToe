import React from 'react';
import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";

function Square({pos, value, onClick}) {
    const EMPTY = "EMPTY";
    const CIRCLE = "O";
    const CROSS = "X";

    function clickHandler() {
        if (value === EMPTY) {
            onClick(pos);
        }
    }

    return (
        <div
            className="w-[100px] h-[100px] flex items-center justify-center bg-white"
            onClick={clickHandler}
        >
            {value === CIRCLE && <Circle/>}
            {value === CROSS && <Cross/>}
        </div>
    );
}

export default Square;