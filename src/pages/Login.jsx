import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}

const Login = () => {
    // login form initial state
    const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
    
    // get loader data
    const message = useLoaderData()

    // 
    function handleSubmit(e){
        e.preventDefault()
        console.log(loginFormData)
    }

    // 
    function handleChange(e){
        const {name, value} = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


  return (
    <div className='login-container'>
        <h1>Sign In to your account!</h1>

        { message && <h2>{message}</h2>}

        <form onSubmit={handleSubmit} className=''>
            <input 
                name="email" 
                onChange={handleChange}
                type="email"
                placeholder='Email Address'
                value={loginFormData.email}
            />

            <input 
                name="password"
                onChange={handleChange}
                type="password" 
                placeholder='Password'
                value={loginFormData.password}
            />

            <button>Log In</button>
        </form>
    </div>
  )
}

export default Login