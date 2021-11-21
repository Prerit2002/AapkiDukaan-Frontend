import axios from 'axios'
import React from 'react'
import LoginForm from '../../Public/Components/LoginForm'
import { useSellerData } from '../../Theme1/Contexts/SellerContext'

function Login(props) {
    const {Domain} = useSellerData()
    console.log(Domain)
    return (
        <div className=" h-screen flex md:flex-row flex-col m-auto">
            <form className="mt-8 space-y-6" onSubmit={
                e=>{
                    e.preventDefault()
                    console.log(e.target[1].value)
                    let creds = {
                        Username : e.target[1].value,
                        Password : e.target[2].value,
                        Domain : Domain
                    }
                    axios.post("/api/loginUser/"+props.role,creds).then((data)=>{
                        const obj =  { 
                            token : data.data.token,
                            Email : data.data.Email,
                            Username : data.data.Username,
                        }
                        localStorage.setItem('User',JSON.stringify(obj))
                    })
                }
            }>
            <LoginForm />
            </form>
        </div>
    )
}

export default Login
