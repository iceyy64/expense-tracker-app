import React, { useContext, useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input.jsx'
import { Link, useNavigate } from 'react-router-dom'
import SignUp from './SignUp.jsx'
import { validateEmail } from '../../utils/helper.js'
import axiosInstance from '../../utils/axiosinstance.js'
import { API_PATHS } from '../../utils/apiPaths.js'
import { UserContext } from '../../context/userContext.jsx'

const Login = () => {
  console.log("Requesting:", `/api/v1/auth/login`);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const { updateUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    if(!password){
      setError("Please Enter the password")
      return
    }

    setError("")

    //Login API Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password
      })
      const { token, user } = response.data
      if(token) {
        localStorage.setItem("token", token)
        updateUser(user)
        navigate("/dashboard")
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // Backend responded with an error
        const { status, data } = error.response;
        console.log("Error status:", status);
        console.log("Error response data:", data);

        if (data.message) {
          setError(data.message);
        } else {
          setError(`Login failed with status ${status}`);
        }
      } else if (error.request) {
        // Request made but no response
        setError("No response from server.");
      } else {
        // Something else went wrong
        setError("Unexpected error occurred.");
      }

    }
  }

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type='submit' className='btn-primary'>
            LOGIN
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">SignUp</Link>
          </p>
        </form>

      </div>
    </AuthLayout>
  )
}

export default Login
