

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navv from './components/general/navv';
import Login from './pages/login';

import Dashboard from './pages/dashboard';
import SingleTicket from './pages/singleTicket';
import SignUp from './pages/signup';

function App() {
  return (
    <>
      <Navv/>
      
        <BrowserRouter>

          <Routes>
              <Route path='/' element={<SignUp/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='/ticket/:ticketId' element={<SingleTicket/>} />
          </Routes>
        
        </BrowserRouter>
      
    </>
  );
}

export default App;
