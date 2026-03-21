import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import {auth} from "../hooks/useGoogleAuth";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")
    const[successMessage, setSuccessMessage] = useState("")
 const[errorMessage, setErrorMessage] = useState("")

    const provider = new GoogleAuthProvider();
    async function handleSubmit(e){
        if(phone.trim().length!=10){
        setErrorMessage ("Mobile number must be of 10 digits");
        return;
        }
        if(password.trim().length <6) {
            setErrorMessage("Enter atleast 6 character as password")
            return;
        }
        
        try{
        e.preventDefault();
        setErrorMessage("")
        const {data} = await axios.post('http://localhost:8000/api/auth/signup',{
            name,
            email,
            phone,
            address,
            password,
            role
        },{
            withCredentials:true,
        });
        console.log(data);
        setSuccessMessage(data.message)
    }

catch(error){
    setSuccessMessage("")
    if(error.response && error.response.data.message){
        setErrorMessage(error.response.data.message);
    }
}
    }
   async function handleGoogleSubmit(e){
        e.preventDefault();
        if(phone.trim().length!=10){
        setErrorMessage ("Mobile number must be of 10 digits");
        return;
        }

        try{
            setErrorMessage("");
            const result = await signInWithPopup(auth,provider);
            console.log(result.user.displayName);
            console.log(result.user.email)
            const fullName = result?.user?.displayName;
            const Email = result?.user?.email;

            const {data} = await axios.post("http://localhost:8000/api/auth/googleSignUp",{
                name:fullName,
                email:Email,
                address,
                role,
                phone
            },{withCredentials:true});
            setSuccessMessage(data.message)

        }catch(error){
            setSuccessMessage("");
            setErrorMessage(error?.response?.data?.message);
        }
    }

  return (
    <div className=" w-screen flex justify-center items-center bg-orange-100 h-screen overflow-hidden">
        <div className ="max-w-sm bg-white px-8 py-2 rounded-lg shadow-md">

        <h1 className ="text-2xl font-bold text-orange-500 mb-2 text-center">Quick Serve</h1>
{
    successMessage ? <p className="text-green-500 text-center">{successMessage}</p> : <p className="text-red-500 text-center">{errorMessage}</p>
}

        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="w-full border 
        border-gray-400 rounded-md p-2 mt-1 mb-2" placeholder='enter your Full name here' onChange={(e)=>setName(e.target.value)}/>


         <label htmlFor="email" className=''>Email</label>
        <input type="text" id="email" name="email" className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2" placeholder='enter your email here' onChange={(e)=>setEmail(e.target.value)}/>

        <label htmlFor="phone" className=''>Phone Number</label>
        <input type="text" id="phone" name="phone" className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2" placeholder='enter your phone number here' onChange={(e)=>setPhone(e.target.value)}/>

        <label htmlFor="address" className=''>Address</label>
        <input type="address" id="address" name="address" className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2" placeholder='enter your address here' onChange={(e)=>setAddress(e.target.value)}/>

        <label htmlFor="password" className=''>Password</label>
        <input type="password" id="password" name="password" className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2" placeholder='enter your password here' onChange={(e)=>setPassword(e.target.value)}/>
<div className='flex justify-between'>
{
        ["user","delivery-boy","admin"].map((r)=>(
          <div key={r} className=" border border-orange-400 px-4 py-2 rounded-lg cursor-pointer focus:bg-orange-500 focus:text-white" 
           onClick={()=>setRole(r)}
            style={{backgroundColor: role === r ? 'orange' : 'white',
                 color: role === r ? 'white' : 'black'}}
           >{r}</div>
        ))
    }
    </div>
    

        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer mt-2 active:scale-95 "  onClick={handleSubmit}> Register </button>


        <button className="w-full text-black border border-orange-600 py-2 rounded-md hover:bg-orange-500 hover:text-white cursor-pointer mt-2 active:scale-95 transition-all duration-300"  onClick={handleGoogleSubmit}>
            <span className="flex items-center justify-center gap-2">
                Sign up with 
                <FaGoogle className=" " size={16}/>
                </span>
 </button>
 


        <div className="m-2 text-center">
        <span>Already have an account?</span><Link to="/signin" className="text-blue-800 hover:underline"> Sign In </Link>
        </div>
        </div>
    </div>
  )
}

export default SignUp