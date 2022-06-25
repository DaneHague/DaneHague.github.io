import React from 'react';
import MultiGrid from './MultiGrid.js';
import HomeTile from '../HomeTile.js';
const HomeContainer = () => {
    return (
        <div>
            <h1>Hsk Practice</h1>
            <MultiGrid Tile1={<HomeTile TextValue='Word Game'></HomeTile>}
            Paper2={<HomeTile TextValue='Tile2'></HomeTile>}
            Paper3={<HomeTile TextValue='Tile3'></HomeTile>}
            Paper4={<HomeTile TextValue='Tile4'></HomeTile>}
            Style1="backgroundColor: 'red'" />
        </div>
    )
}

export default HomeContainer;