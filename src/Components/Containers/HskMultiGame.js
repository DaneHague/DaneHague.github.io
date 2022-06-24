import { responsiveProperty } from '@mui/material/styles/cssUtils';
import MultiGrid from './MultiGrid';
import React from 'react';
const HskMultiGame = () => {
    function getGame() {
        
        var whichGame = window.location.href.substring(window.location.href.length - 4, window.location.href.length);
        return whichGame;
    }

    function tst() {
        var data = JSON.parse(localStorage.getItem("Hsk1"));
        return JSON.stringify(data[0]);
    }
    return (
        <div>
            <h1>{getGame()}</h1>
            <div>Test</div>
            <MultiGrid />
        </div>
    )
}
export default HskMultiGame;