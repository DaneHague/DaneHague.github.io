import MultiGrid from './MultiGrid';
const HskMultiGame = () => {
    function getGame() {
        var whichGame = window.location.href.substring(window.location.href.length - 4, window.location.href.length);
        return whichGame;
    }
    return (
        <div>
            <h1>{getGame()}</h1>
            <MultiGrid />
        </div>
    )
}
export default HskMultiGame;