import React from 'react';
import Circle from "../Circle/Circle";
import Cross from "../Cross/Cross";

function Square({pos, value}) {
    const CIRCLE = "O";
    const CROSS = "X";
    return (
        <div className="w-[100px] h-[100px] flex items-center justify-center bg-white">
            {value === CIRCLE && <Circle/>}
            {value === CROSS && <Cross />}
        </div>
    );
}

export default Square;