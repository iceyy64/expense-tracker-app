import React, { useState, useContext} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import Input from '../../components/Inputs/Input.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper.js'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector.jsx'
import { UserContext } from '../../context/userContext.jsx'
import uploadImage from '../../utils/uploadImage.js'
import axiosInstance from '../../utils/axiosinstance.js'
import { API_PATHS } from '../../utils/apiPaths.js'


const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [error, setError] = useState(null)

  const {updateUser} = useContext(UserContext)

  const navigate = useNavigate()

  //handle sign up form submit
  const handleSignUp = async (e) => {
    e.preventDefault()
    // console.log("handle Signup triggered")

    let profileImageUrl = ""

    if(!fullName){
      setError("Please enter your name")
      return
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email address")
      return
    }

    if(!password){
      setError("Please enter the password")
      return
    }

    setError("")

    // Signup API Call
    try {
      // console.log("Sending Sign Up request")

      //Upload image if present
      if(profilePic) {
        const imgUploadRes = await uploadImage(profilePic)
        profileImageUrl = imgUploadRes.imageUrl || ""
      }
      // console.log("Upload result:", profileImageUrl)

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName, 
        email,
        password,
        profileImageUrl
      })

      // console.log("Signup API full response:", response);

      const { token, user } = response.data

      // console.log("Token:", token); 

      if (token) {
        // console.log("Redirecting to dashboard...")
        localStorage.setItem("token", token)
        updateUser(user)
        navigate("/dashboard")
      } else {
        console.log("No token recieved")
      }
    } catch (error) {
      console.log(error)
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      } else {
        setError("Something went wrong. Please try again.")
      }
    }
  }

  return (
   <AuthLayout>
    <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-8 flex flex-col justify-center'>
      <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
      <p className='text-xs text-slate-700 mt-[5px] mb-6'>
        Join us today by entering your details below
      </p>

      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input 
            value={fullName}
            onChange={({target}) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />

          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <div className='col-span-2'>
            <Input
              value={password}
              onChange={({target}) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 characters"
              type="password"
          />
          </div>
        </div>

        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        
        <button type='submit' className='btn-primary'>
          SIGN UP
        </button>
        
        <p className='text-[13px] text-slate-800 mt-3'>
          Already have an account?{" "}
          <Link className='font-medium text-primary underline' to="/login">Login</Link>
        </p>
      </form>
    </div>
   </AuthLayout>
  )
}

export default SignUp
