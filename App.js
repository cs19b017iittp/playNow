import './App.css';
import ButtonAppBar from './appBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';




function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
     
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  

                </Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="div">
                Available
              </Typography>
            </Paper>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <img src='https://th.bing.com/th/id/OIP.qY1LZSUeCA4bhn6QMu3HxgHaEo?rs=1&pid=ImgDetMain'/>
            </Paper>
            </Grid>

          </Grid>
          </Container>
    </div>
  );
}

export default App;
