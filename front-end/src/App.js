
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navv from './components/general/navv';
import Login from './components/general/login';

import Dashboard from './pages/dashboard';
import SingleTicket from './pages/singleTicket';

function App() {
  return (
    <>
      <Navv/>
      
        <BrowserRouter>

          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='/ticket/:ticketId' element={<SingleTicket/>} />
          </Routes>
        
        </BrowserRouter>
      
    </>
  );
}

export default App;
