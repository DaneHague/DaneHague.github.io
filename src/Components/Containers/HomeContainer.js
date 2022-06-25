import List from '../List.js';
import React from 'react';
import MultiGrid from './MultiGrid.js';
import Paper from '@mui/material/Paper';
const HomeContainer = () => {
    return (
        <div>
            <h1>Hello Hsk</h1>
            <MultiGrid Paper1={<Paper style={{background: '#212121', height: 200, color: 'white'}}>
              Word Game
            </Paper>}
            Paper2={<Paper style={{background: '#212121', height: 200, color: 'white'}}>
              Paper2
            </Paper>}
            Paper3={<Paper style={{background: '#212121', height: 200, color: 'white'}}>
              Paper3
            </Paper>}
            Paper4={<Paper style={{background: '#212121', height: 200, color: 'white'}}>
              Paper4
            </Paper>}
            Style1="backgroundColor: 'red'" />
        </div>
    )
}

export default HomeContainer;