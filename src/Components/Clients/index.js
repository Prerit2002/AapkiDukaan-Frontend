import React, { useEffect,useState } from 'react'
import Table, { UnivTable } from '../Table'
import { JsonToTable } from "react-json-to-table";
import axios from 'axios';
function Clients() {
    const [Clients, setClients] = useState({
    })
    useEffect(() => {
        
       axios.get("/api/showClient").then(data=>{
           setClients(data.data)
       })
       console.log(Clients)
       delete Clients.WebsiteData
    }, [])
    return (
        <div className="w-full  m-10">
        <h1 className="text-3xl m-4 text-left">Clients</h1>
        
        <JsonToTable json={Clients} />

        {/* <div >
            <div className="bg-darkGrey mb-2 w-full py-2 text-white grid grid-cols-7">
                <h1>CustId</h1>
                <h1 className="col-span-2">Customer Name</h1>
                <h1>OrderId</h1>
                <h1>Mobil No.</h1>
                <h1>Address</h1>
                <h1>Email</h1>

            </div>
            <div className="grid grid-cols-7 rounded-lg bg-gray-50 gap-5">
                { [0,1,2,3,4,5,6,7,8,9].map((idx) => {
                    return(
                        <>
                         <div className="col-span-6">
                <Table entry1={"abcd"} entry2={"abcd"} entry3={"abcd"} entry4={"abcd"} entry5={"abcd"}/>

                </div>
                <h1>abcd</h1>
                
            

                        </>

                    )
                   
                }) }
               

            </div>
           
        </div> */}
        
    </div>
    )
}

export default Clients
