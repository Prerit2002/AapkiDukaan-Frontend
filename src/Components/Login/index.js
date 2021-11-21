import React from 'react'
import LoginForm from '../../Public/Components/LoginForm'

function Login() {
    return (
        <div className=" h-screen flex md:flex-row flex-col m-auto">
            <form className="mt-8 space-y-6" action="#" method="POST">
            <LoginForm />
            </form>
        </div>
    )
}

export default Login
