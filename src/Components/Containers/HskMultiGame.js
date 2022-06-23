import { responsiveProperty } from '@mui/material/styles/cssUtils';
import MultiGrid from './MultiGrid';
const HskMultiGame = () => {
    function getGame() {
        
        var whichGame = window.location.href.substring(window.location.href.length - 4, window.location.href.length);
        fetch("https://hskapi20220623180039.azurewebsites.net/")
        .then(r => r.json())
        .then (data => localStorage.setItem(whichGame, JSON.stringify(data)));
        return whichGame;
    }

    function tst() {
        var data = JSON.parse(localStorage.getItem("Hsk1"));
        return JSON.stringify(data[0]);
    }
    return (
        <div>
            <h1>{getGame()}</h1>
            <div>{tst()}</div>
            <MultiGrid />
        </div>
    )
}
export default HskMultiGame;