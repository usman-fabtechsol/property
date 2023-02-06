
import { Route, Routes,BrowserRouter , Navigate} from 'react-router-dom';
import './index.css';

import Sidebar from './Component/Sidebar';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import UserMap from './Pages/User-map';

function App() {
  return (<div>
    <Routes>
    <Route path="/" element={<Sidebar/> }>
      <Route path="/dashboard" element={<Dashboard/> }/>
       <Route path='/user' element={<User/>} />
       <Route path='/user-map' element={<UserMap/>}/>
    </Route>
    </Routes>
  </div>  
  );
}

export default App;
