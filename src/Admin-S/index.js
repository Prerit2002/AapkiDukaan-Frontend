import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import Sales from "./Components/Sales";
import Customers from "../Components/Customers";
import Bills from '../Components/Bills'
import Inventory from "../Components/Inventory";
import Login from '../Components/Login';
import TabsTable from '../Components/TabsTable';
import WebsiteSettings from './Components/Website';
import AddProduct from '../Components/AddProduct';
import SellerDataProvider, { useSellerData, useSellerId } from '../Theme1/Contexts/SellerContext';
import PromoCode from './Components/PromoCode';
import AddPromoCode from './Components/AddPromo';
function AdminS() {
  const Menu = [
    {
      link: "website",
      text: "Website",
    },
    {
      link: "inventory",
      text: "Inventory",
    },
    {
      link: "sales",
      text: "Sales",
    },
    {
      link: "customers",
      text: "Customers",
    },
    {
      link: "bills",
      text: "Bills",
    },
    {
      link: "PromoCode",
      text: "PromoCode",
    },
    {
      link: "settings",
      text: "Settings",
    },
    {
      link: "Login",
      text: "Login",
    },
  ]
  return (
 
    <div className="App">
         <SellerDataProvider>
        <div className="p-0 m-0 flex">
          <Sidebar Menu={Menu}/>
          <div className="m-10 p-2">
          <Routes>
        <Route exact path="sales" element={<Sales />}  ></Route>
        <Route exact path="customers" element={<Customers />}  ></Route>
        <Route exact path="bills" element={<Bills />}  ></Route>
        <Route exact path="inventory" element={<Inventory />}  ></Route>
        <Route exact path="inventory/add" element={<AddProduct />}  ></Route>
        <Route exact path="test" element={<TabsTable />}  ></Route>
        <Route exact path="PromoCode/add" element={<AddPromoCode />}  ></Route>
        <Route exact path="promocode" element={<PromoCode />}  ></Route>
        <Route exact path="settings" element={<WebsiteSettings id={useSellerId()} data={useSellerData()}/>}  ></Route>
        {/* <Route exact path="Login" element={<Login />}  ></Route> */}
        </Routes>
        </div>
        </div>
        </SellerDataProvider>
    </div>


  );
}

export default AdminS;
