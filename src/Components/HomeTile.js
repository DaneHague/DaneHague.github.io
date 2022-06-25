import React from 'react';
import Paper from '@mui/material/Paper'
import {Grid, Box, Button} from '@mui/material/';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";


const HomeTile = ({TextValue, Game}) => {
    return (
    <Paper style={{background: '#212121', height: 200, color: 'white'}}>
              {TextValue}
              <br/>
              <br/>
              <br/>
              <Box style={{marginRight:15}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk1">Hsk 1</Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk2">Hsk 2</Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk3">Hsk 3</Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk4">Hsk 4</Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk5">Hsk 5</Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link style={{color: 'white'}} to="/multiHsk6">Hsk 6</Link>
                    </Grid>
                </Grid>
            </Box>
    </Paper>
    )
}
export default HomeTile;