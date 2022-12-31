import Navbar  from './component/Navbar';
import './App.css';
import { AddStudent } from './component/AddStudent';
import {Routes, Route} from 'react-router-dom';
import { Home } from './component/Home';
import { EditStudent } from './component/EditStudent';


//burada routerlerim var 
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/addStudent' element={<AddStudent />}></Route>
        <Route path= "/editStudent/:id" element={<EditStudent />}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
