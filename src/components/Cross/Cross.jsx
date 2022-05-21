import React from 'react';

function Cross() {
    return (
        <svg width="90" height="90" viewBox="-50 -50 100 100"
             className="stroke-[16px] stroke-[#B9D0E9]">
            <line x1="-40" y1="-40" x2="40" y2="40"/>
            <line x1="-40" y1="40" x2="40" y2="-40"/>
        </svg>
    );
}

export default Cross;