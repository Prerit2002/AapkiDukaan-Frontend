import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";

import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import Inventory from '../Components/Inventory';
import Client from '../Components/Clients';
import AddProduct from '../Components/AddProduct';
import TokenProvider from '../Admin-S/Contexts/token';
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';

import axios from 'axios';
import Logout from '../Components/Logout';
function AdminE() {
  const Menu = [
   
    {
      link: "inventory",
      text: "Inventory",
    },
 
 
    {
        link: "Client",
        text: "Client",
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
          {
              User ? 
             
              <Routes>
              <Route exact path="inventory" element={<Inventory />}  ></Route>
              <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
              <Route exact path="test" element={<TabsTable />}  ></Route>
              <Route exact path="logout" element={<Logout />}  ></Route>
              
              <Route exact path="Clients" element={<Client />}  ></Route>
              </Routes> 
              : <Routes>
              <Route path="/*" element={<Login role="Executive"/>}  ></Route>  
                </Routes>
            }
        
       
  
        </div>
 


  );
}

export default AdminE;
