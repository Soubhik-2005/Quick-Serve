import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/SignIn'
// import ForgotPassword from "./pages/ForgotPassword"
import {useFetchCurrentUser} from './hooks/useFetchCurrentUser'

function App() {
  useFetchCurrentUser();
  return (
    <Routes>
      
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="/forgot-password" element={<ForgotPassword/>}/> */}
      {/* <Route path="/home" element = {<Home/>}/> */}
    </Routes>
  )
}

export default App