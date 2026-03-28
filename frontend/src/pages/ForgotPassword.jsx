import React from "react";
import { useState } from "react";
import axios from "axios";

function ForgotPassword() {

  const [state, setState] = useState(3);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const[email, setEmail]= useState("");
  const[otp, setOtp] = useState("");
  const[password, setPassword] = useState("");
  const[repassword, setRepassword] = useState("");

  async function verifyEmail(e) {
    e.preventdefault();
    try {
      setErrorMessage("");
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/forgotPassword",
        {
          email,
        },
        {
          withCredentials: true,
        },
      );
      setSuccessMessage(data?.message);
      setState(2);
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage(error?.response?.data?.message);
    }
  }

  async function verifyOtp(e){
        e.preventdefault();
        try{
            setErrorMessage("");
            const {data} = axios.post("http://localhost:8000/api/auth/verifyOtp",
                {
                    otp
                },
                {
                    withCredentials:true
                });
                setSuccessMessage(data?.message);
            
        } catch(error){
            setErrorMessage(error?.response?.data?.message);
        }
  }

  async function changePassword(e){
    e.preventdefault();
    try{
        setErrorMessage("");
        const {data}= axios.post("http://localhost:8000/api/auth/changePassword",
            {
                password
            },
            {withCredentials:true}
        )
        setSuccessMessage(data?.message);

        
    }catch(error){
        setSuccessMessage("");
        setErrorMessage(error?.response?.data?.message);
    }
  }
  return (
    <>
      {state == 1 && (
        <div className=" w-screen flex justify-center items-center bg-orange-100 h-screen overflow-hidden">
          <div className="max-w-sm bg-white px-8 py-2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-orange-500 mb-2 text-center">
              Quick Serve
            </h1>
            {successMessage ? (
              <p className="text-green-500 text-center">{successMessage}</p>
            ) : (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2"
              placeholder="enter your email here"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer mt-2 active:scale-95 "
              onClick={verifyEmail}
            >
              Verify 
            </button>
          </div>
        </div>
      )}
      {state == 2 && (
        <div className=" w-screen flex justify-center items-center bg-orange-100 h-screen overflow-hidden">
          <div className="max-w-sm bg-white px-8 py-2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-orange-500 mb-2 text-center">
              Quick Serve
            </h1>
            {successMessage ? (
              <p className="text-green-500 text-center">{successMessage}</p>
            ) : (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <label htmlFor="otp" className="">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2"
              placeholder="enter your otp here"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer mt-2 active:scale-95 "
              onClick={verifyOtp}
            >
              Verify 
            </button>
          </div>
        </div>
      )}
      {state == 3 && (
        <div className=" w-screen flex justify-center items-center bg-orange-100 h-screen overflow-hidden">
          <div className="max-w-sm bg-white px-8 py-2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-orange-500 mb-2 text-center">
              Quick Serve
            </h1>
            {successMessage ? (
              <p className="text-green-500 text-center">{successMessage}</p>
            ) : (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}

            <label htmlFor="password" className="">
              Enter new Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2"
              placeholder="enter your password here"
              onChange={(e) => setPassword(e.target.value)}
            />

             <label htmlFor="password" className="">
              Re-Enter new Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2"
              placeholder="enter your password here"
              onChange={(e) => setRepassword(e.target.value)}
            />

            <button
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer mt-2 active:scale-95 "
              onClick={changePassword}
            >
              Verify 
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
