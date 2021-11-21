import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import AddProduct from '../Components/AddProduct';
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';
import Clients from '../Components/Clients';
import ProductPool from '../Components/AdminProductPool/index copy';
function AdminAD() {
  const Menu = [
  
    {
      link: "productpool",
      text: "Inventory",
    },
    {
      link: "sales",
      text: "Sales",
    },
    {
        link: "Clients",
        text: "Clients",
      },
    {
      link: "Customers",
      text: "Customers",
    },
    {
      link: "bills",
      text: "Bills",
    },
    {
      link: "promocodes",
      text: "Promo Codes",
    },
    {
      link: "settings",
      text: "Settings",
    },
    {
      link: "Logout",
      text: "Logout",
    },
  ]
  return (
 
    <div className="App">
        <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          <div className="m-10 p-2">
          <Routes>
        <Route exact path="Customers" element={<Customers />}  ></Route>
        <Route exact path="Clients" element={<Clients />}  ></Route>
        <Route exact path="bills" element={<Bills />}  ></Route>
        <Route exact path="inventory" element={<Inventory />}  ></Route>
        <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
        <Route exact path="test" element={<TabsTable />}  ></Route>
        <Route exact path="productpool" element={<ProductPool />}  ></Route>
        {/* <Route exact path="Login" element={<Login />}  ></Route> */}
        </Routes>
        </div>
        </div>
    </div>


  );
}

export default AdminAD;
