import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
// import ForgotPassword from "./pages/ForgotPassword"
import {useFetchCurrentUser} from './hooks/useFetchCurrentUser'
import { useSelector } from 'react-redux'
import Loading from './components/Loading'
function App() {
  useFetchCurrentUser();
  const {user, loading} = useSelector((state) => state.auth);
  if (loading) {
    return <div><Loading/></div>;
  }
  return (
    <Routes>
      
      <Route path="/" element = {user? <Navigate to="/home"/> :<Navigate to="/signup"/>}/>
      <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
      <Route path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
      <Route path="/home" element={user? <Home /> : <Navigate to="/signup"/>}/>
      {/* <Route path="/forgot-password" element={<ForgotPassword/>}/> */}
    </Routes>
  )
}

export default App