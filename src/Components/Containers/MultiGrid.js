import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const MultiGrid = () => {
    return (
        <div>
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