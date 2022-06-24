import { responsiveProperty } from '@mui/material/styles/cssUtils';
import MultiGrid from './MultiGrid';
import React, { useEffect, useState } from 'react';
const HskMultiGame = () => {
    const [hskData, setHskData] = useState({hsk: []});
    const [gameData, setGameData] = useState({game: []})
    function getGame() {
        var whichGame = window.location.href.substring(window.location.href.length - 4, window.location.href.length);
        return whichGame;
    }

    useEffect(() => {
        function test (data) {
            setHskData({hsk: data});
            setGameData({game: data});
        }
        async function fetchData() {
            fetch("https://hskapi20220623180039.azurewebsites.net/api/hskdetails")
            .then(r => r.json())
            .then(data => test(data))
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>{getGame()}</h1>
            <div>{JSON.stringify(gameData.game[0])}</div>
            <MultiGrid />
        </div>
    )
}
export default HskMultiGame;