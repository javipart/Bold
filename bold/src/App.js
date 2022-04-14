import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import PanelMenu from './components/PanelMenu/PanelMenu';
import PanelTable from './components/PanelTable/PanelTable';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PanelMenu />
          </Grid>
          <Grid item xs={12}>
            <PanelTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
