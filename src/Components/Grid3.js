import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
const Grid3 = ({Image1}) => {
return (
    <div>
        <Grid container spacing={5}>
            <Grid item xs ={4}>
                <Paper>
                <img width="80%" src={Image1} />
                </Paper>
            </Grid>
            <Grid item xs ={4}>
                <Paper>
                    Test Paper 2
                </Paper>
            </Grid>
            <Grid item xs ={4}>
                <Paper>
                    Test Paper 3
                </Paper>
            </Grid>
        </Grid>
    </div>
)
}
export default Grid3;