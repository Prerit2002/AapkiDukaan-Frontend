import {useState} from 'react'
import { UnivTable } from '../../../Components/Table'
function Sales() {
    const [selected , setSelected] = useState("AllOrders")
    return (
        <div className="w-full  m-10">
            <h1 className="text-3xl m-4 ">Sales</h1>
            <UnivTable />
        </div>
    )
}

export default Sales
