import React from 'react';

function Result({winner, onClick}) {
    const CIRCLE = "O";
    const CROSS = "X";
    const EQUAL = "EQUAL";

    function handleResetBtn() {
        onClick();
    }

    return (
        <div className="
          w-[100vw] h-[100vh] absolute
          flex items-center justify-center
          flex-col space-y-4
          text-white
          bg-gray-300 bg-opacity-90
          text-7xl text-red-black
          text-center font-extrabold
          ">
            <div>
                {winner === CIRCLE && "O won the game!"}
                {winner === CROSS && "X won the game!"}
                {winner === EQUAL && "XO, Draw!"}
            </div>
            <button
                className="
                px-6 py-2 bg-blue-600
                text-white font-medium text-lg
                rounded hover:bg-blue-700
                tracking-wider
                "
                onClick={handleResetBtn}>
                Reset!
            </button>
        </div>
    );
}

export default Result;