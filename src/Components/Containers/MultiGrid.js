import Grid from '@mui/material/Grid';
import React from 'react';
const MultiGrid = ({Tile1, Tile2, Tile3, Tile4}) => {
    return (
        <div style={{marginLeft:20, marginRight:20, marginTop: 50}}>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    {Tile1}
                </Grid>
                <Grid item xs={6}>
                    {Tile2}
                </Grid>
                <Grid item xs={6}>
                    {Tile3}
                </Grid>
                <Grid item xs={6}>
                    {Tile4}
                </Grid>
            </Grid>
        </div>
    )
}
export default MultiGrid;