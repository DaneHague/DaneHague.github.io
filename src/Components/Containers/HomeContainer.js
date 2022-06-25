import React, { useContext, useEffect, useState } from 'react';
import MultiGrid from './MultiGrid.js';
import HomeTile from '../HomeTile.js';
import { HskDataContext } from '../../App.js';

const HomeContainer = () => {
  useEffect(() => {
    function setData(data) {
      const storageCheck = localStorage.getItem("HskData");
      if(!storageCheck) {
        localStorage.setItem("HskData", JSON.stringify(data));
      }
      
    }
    async function fetchData() {
        fetch("https://hskapi20220623180039.azurewebsites.net/api/hskdetails")
        .then(r => r.json())
        .then(data => setData(data))
    }
    fetchData();
}, [])
    return (
        <div>
            <h1>Hsk Practice</h1>
            <MultiGrid 
              Tile1={<HomeTile TextValue='Word Game'></HomeTile>}
              Tile2={<HomeTile Game="dictionary" TextValue='Dictionary'></HomeTile>}
              Tile3={<HomeTile TextValue='Tile3'></HomeTile>}
              Tile4={<HomeTile TextValue='Tile4'></HomeTile>}
            Style1="backgroundColor: 'red'" />
        </div>
    )
}

export default HomeContainer;