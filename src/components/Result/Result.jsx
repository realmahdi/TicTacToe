import React from 'react';

function Result({winner}) {
    const CIRCLE = "O";
    const CROSS = "X";
    const EQUAL = "EQUAL";
    return (
        <div className="
          w-[100vw] h-[100vh] absolute
          flex items-center justify-center
          flex-col space-y-3
          text-white
          bg-gray-400 bg-opacity-90
          text-9xl text-red-black
          text-center font-extrabold
          ">
            {winner === CIRCLE && "O won the game!"}
            {winner === CROSS && "X won the game!"}
            {winner === EQUAL && "XO, Draw!"}
        </div>
    );
}

export default Result;