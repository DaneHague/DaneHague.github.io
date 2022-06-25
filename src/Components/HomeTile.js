import React from 'react';
import Paper from '@mui/material/Paper'
import {Grid, Box, Button} from '@mui/material/';


const HomeTile = ({TextValue}) => {
    return (
    <Paper style={{background: '#212121', height: 200, color: 'white'}}>
              {TextValue}
              <br/>
              <br/>
              <br/>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Button>Hsk1</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Hsk2</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Hsk3</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Hsk4</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Hsk5</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Hsk6</Button>
                    </Grid>
                </Grid>
            </Box>
    </Paper>
    )
}
export default HomeTile;