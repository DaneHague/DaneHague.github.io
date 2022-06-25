import { responsiveProperty } from '@mui/material/styles/cssUtils';
import MultiGrid from './MultiGrid';
import React, { useEffect, useState } from 'react';
const HskMultiGame = () => {
    function getGame() {
        var whichGame = window.location.href.substring(window.location.href.length - 4, window.location.href.length);
        return whichGame;
    }

    return (
        <div>
            <h1>{getGame()}</h1>
            <div>test</div>
            <MultiGrid />
        </div>
    )
}
export default HskMultiGame;