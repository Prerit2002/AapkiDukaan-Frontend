import React , {useContext, useState, useEffect} from 'react'
import axios from 'axios'
const CustomerContext = React.createContext()



export function useCustomer() {
    return useContext(CustomerContext)
}
function CustomerProvider({children}) {
    const [Customer, setCustomer] = useState({})
    var Usr = localStorage.getItem('User')
    let headers;
    if(Usr) {
        Usr = JSON.parse(Usr)
         headers = {
            'Authorization': Usr.token
          }
    }
    console.log(headers)
    useEffect(() => {
        axios.get('/api/getCustomerbyToken/',{headers:headers}).then((data)=>{
            setCustomer(data.data)
        }).catch(e=>{
            console.log(e)
        })
    }, [])
    return (
        <CustomerContext.Provider value={Customer}>
                        {children}
        </CustomerContext.Provider>
    )
}

export default CustomerProvider
