import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
import { red } from '@mui/material/colors';
import { color } from '@mui/system';
const MultiGrid = ({Paper1, Paper2, Paper3, Paper4}) => {
    return (
        <div style={{marginLeft:20, marginRight:20}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    {Paper1}
                </Grid>
                <Grid item xs={6}>
                    {Paper2}
                </Grid>
                <Grid item xs={6}>
                    {Paper3}
                </Grid>
                <Grid item xs={6}>
                    {Paper4}
                </Grid>
            </Grid>
        </div>
    )
}
export default MultiGrid;