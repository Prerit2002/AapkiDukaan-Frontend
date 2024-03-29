import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";

import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import ProductPool from '../Components/AdminProductPool/indexcopy';
import Clients from '../Components/Clients';
import TokenProvider from '../Admin-S/Contexts/token';
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';

import axios from 'axios';
import Logout from '../Components/Logout';
function AdminE() {
  const Menu = [
   
    {
      link: "productpool",
      text: "Inventory",
    },
 
 
    {
      link: "Clients",
      text: "Leads",
   },
    {
      link: "Logout",
      text: "Logout",
    },
  ]
  let User = localStorage.getItem('User')
  let Sid = useSellerId()
  var full = window.location.host
  var parts = full.split('.')
  var sub = parts[0]
  return (
 
   
        <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          
          <TokenProvider>
          {
              User ? 
             
              <Routes>
              <Route exact path="productpool" element={<ProductPool/>}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="logout" element={<Logout />}  ></Route>
              <Route exact path="Clients" element={<Clients />}  ></Route>
              </Routes> 
              : <Routes>
              <Route path="/*" element={<Login role="Executive"/>}  ></Route>  
                </Routes>
            }
        
       </TokenProvider>
  
        </div>
 


  );
}

export default AdminE;
