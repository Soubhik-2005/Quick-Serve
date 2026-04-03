import React from 'react'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import axios from 'axios'

export const Home = () => {
  const [resturent, setResturent ] = useState([])

  async function fetchResturents(){
      const {data} = await axios.get("http://localhost:8000/api/resturent",{
        withCredentials: true,
      });
      
      setResturent(data.resturents);
      ;

  }
  return (
    <div>
        <Navbar />
        <button onClick={fetchResturents} className="bg-black text-white py-2 px-4 rounded-md hover:bg-brand-dark">
          Fetch Resturents
        </button>
{
        resturent.map((item) => (
          <div key={item._id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.address}</p>
            <p>{item.description}</p>

          </div>
        ))
      }

    </div>
  )
}

export default Home;