import React from 'react';

function Square({pos}) {
    return (
        <div className="w-[100px] h-[100px] flex items-center justify-center bg-white">
            {pos}
        </div>
    );
}

export default Square;