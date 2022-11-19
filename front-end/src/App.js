
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navv from './components/general/navv';
import Login from './components/general/login';
import { Container } from '@mui/material';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <Navv/>
      <Container maxWidth="sm">
        <BrowserRouter>
        
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='dashboard' element={<Dashboard/>}/>
          </Routes>
        
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
