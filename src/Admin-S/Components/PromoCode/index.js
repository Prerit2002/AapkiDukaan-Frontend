import React, { useEffect,useState } from 'react'
import Table,{UnivTable} from '../../../Components/Table'
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
import {
    useSellerData,
    useSellerId,
  } from "../../../Theme1/Contexts/SellerContext"
import { Link } from 'react-router-dom';
function PromoCode() {
    let Sid=useSellerId()
    const [isLoading, setisLoading] = useState(true)
    const [PromoCode, setPromoCode] = useState({
    })
    useEffect(() => {
       axios.get("/api/GetPromoCode/"+Sid).then(data=>{
           setPromoCode(data.data)
           setisLoading(false)

       })
    }, [])
    const Delete = (row) =>{
        console.log(row)
    }
    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }
    else {
    return (

        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">PromoCode</h1>
        <div className="flex flex-row justify-evenly">
            <div>
            <UnivTable Responses={PromoCode} Delete={Delete}/>  
            </div>
        <Link to="add" className=" max-h-10 p-2 rounded-lg bg-lightgreen" >Add +</Link> 
        </div>
    </div>
    )
}
}

export default PromoCode
