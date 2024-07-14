import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboardlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminlayout from './AdminLayout/Adminlayout';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { createContext,useState } from 'react';
import Invoicelist from './invoice/Invoicelist';
import Cardcomp from './dashboard/component/cards/Cardcomp';
import Patientlist from './patient/Patientlist';
import Loginpage from './login/Loginpage';
import Departmentlist from './department/Deparmentlist';
import Roomlist from './room/Room';

import Lablist from './labs/Lablist';
import Role_list from './role/Role_list';
import Emplist from './employee/Emplist';
import '@coreui/coreui/dist/css/coreui.min.css'
import Emp_profile from './emp_profile/Emp_profile';



export const userContext =createContext()
function App() {
  // const [data,setData] =useState('');
  return (    
    <>
    
    <div className="App" component="main" style={{display:"flex",marginTop:"7%",width:"100%"}}>
  
    <Adminlayout/>
     
   
    <Routes> 
      <Route path='/' element={<Cardcomp/>}/>
      <Route path='/patient' element={<Patientlist/>}/>
      <Route path='/invoice' element={<Invoicelist/>}/>
      <Route path='/department' element={<Departmentlist/>}/>
      <Route path='/rooms' element={<Roomlist/>}/>
      <Route path='/role' element={<Role_list/>}/>
      <Route path='/lab' element={<Lablist/>}/>
      <Route path='/employee' element={<Emplist/>}/>
      <Route path='/empProfile' element={<Emp_profile/>}/>
      </Routes>
    </div>
  
    </>
  );
}

export default App;
