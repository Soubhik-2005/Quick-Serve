import React from 'react'
// import Navbar from '../components/Navbar'
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Card from '../components/Card'

export const Home = () => {
  const [resturent, setResturent ] = useState([])
    useEffect(()=>{
        async function fetchResturents(){
          try{
            const {data} = await axios.get("http://localhost:8000/api/resturent",{
                withCredentials: true,
            });
            setResturent(data.resturents);
          } catch (error) {
            console.error("Error fetching resturents:", error);
          }
        }
        fetchResturents();
    }, []);

      
  
  return (
    <div>
        
        <div className="bg-orange-100 w-screen p-4">
        <h2 className="text-xl p-2">Resturents</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
          resturent.map((item) => (
            <div key={item._id} >
              <Card id={item._id} img={item.image} name={item.name} address={item.location} deliveryTime={item.deliveryTime} cuisine={item.cuisine} rating={item.rating} logo={item.logo}/>

            </div>
          ))
        }
        </div>
        </div>
        


    </div>
  )
}

export default Home;