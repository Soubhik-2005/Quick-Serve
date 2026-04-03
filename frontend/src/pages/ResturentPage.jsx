import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../components/Loading"

function ResturentPage() {
    const {id} = useParams();
    const [resturent, setResturent] = useState(null);
    useEffect( () => {
        async function getResturent(){
    const{data} =await axios.get(`http://localhost:8000/api/resturent/${id}`,{withCredentials:true});
    setResturent(data.resturent);
    

}
getResturent();
    },[])

    if(!resturent) return <Loading/>
  return (
    <div>{resturent ? resturent.name : "Resturent not found"}</div>
  )
}

export default ResturentPage