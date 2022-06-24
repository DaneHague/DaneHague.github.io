import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
const MultiGrid = () => {
    return (
        <div style={{marginLeft:20, marginRight:20}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>4</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default MultiGrid;