import {useState} from 'react'
import Table from '../../../Components/Table'
function Sales() {
    const [selected , setSelected] = useState("AllOrders")
    return (
        <div className="w-full  m-10">
            <h1 className="text-3xl m-4 ">Sales</h1>
            <div className="flex text-left gap-3 my-6 font-bold"> 
                <h1 onClick={() => setSelected("AllOrders")} className={ `cursor-pointer + ${selected === "AllOrders" ? "text-blue-500": ""}`}>All Orders</h1>
                <h1 onClick={() => setSelected("pending")} className={ `cursor-pointer + ${selected === "pending" ? "text-blue-500": ""}`}>Pending</h1>
                <h1 onClick={() => setSelected("completed")} className={ `cursor-pointer + ${selected === "completed" ? "text-blue-500": ""}`}>Completed</h1>
                <h1 onClick={() => setSelected("cancelled")} className={ `cursor-pointer + ${selected === "cancelled" ? "text-blue-500": ""}`}>Cancelled</h1>
            </div>
            <div>
                <div className="bg-black w-full py-2 text-white grid grid-cols-9">
                    <h1>OrderId</h1>
                    <h1 className="col-span-2">Product Name</h1>
                    <h1>Cust Id</h1>
                    <h1>Price</h1>
                    <h1>Commision</h1>
                    <h1>Promo Code</h1>
                    <h1>Status</h1>
                    <h1>Cust Id</h1>

                </div>
                <div className="grid grid-cols-9 bg-gray-50 gap-3">
                    { [0,1,2,3,4,5,6,7,8,9].map((idx) => {
                        return(
                            <>
                             <div className="col-span-6">
                    <Table entry1={"abcd"} entry2={"abcd"} entry3={"abcd"} entry4={"abcd"} entry5={"abcd"}/>

                    </div>
                    <h1>abcd</h1>
                    <h1>abcd</h1>
                    <h1>Completed</h1>
                

                            </>

                        )
                       
                    }) }
                   

                </div>
               
            </div>
            
        </div>
    )
}

export default Sales
