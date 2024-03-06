import React from 'react';
import Stopwatch from './Stopwatch';
import { Grid, Typography ,CssBaseline,Container} from '@mui/material';

const App = () => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="sm">
      <Grid container sx={{color:'black',alignContent:'center',justifyContent:"center"}}><Typography variant='h3'>StopWatch</Typography></Grid>
      <Grid container sx={{ bgcolor: 'skyblue', height: '50vh' , justifyContent:'center',alignContent:"center",color:'red',border:"5px solid black",borderRadius:"15px"}} >
        <Stopwatch/>
        </Grid>
    </Container>
    </>
  );
};

export default App;
