import React, { useEffect,useState } from 'react'
import Table,{UnivTable} from '../Table';
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import { useSellerData, useSellerId } from '../../Theme1/Contexts/SellerContext';
import { Link } from 'react-router-dom';
function Customer() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [Customer, setCustomer] = useState({
    })
    useEffect(() => {
       axios.get("/api/showCustomer/").then(data=>{
           console.log(data.data)
           let customers = data.data.map((el)=>{
               return (
                   {
                       ...el,
                       Address : JSON.stringify(el.Address)
                   }
               )
           })
           setCustomer(customers)
           setisLoading(false)
       })
    }, [])
  
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Customers</h1>
            <div className=" overflow-x-scroll max-w-screen-lg">
            <UnivTable Responses={Customer} />  
            </div>
        
    </div>
    )
}
}

export default Customer
