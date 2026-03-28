import React, { useEffect } from "react";
import axios from "axios";


export const fetchUser = async () => {
      const {data} = await axios.get("http://localhost:8000/api/auth/me", {
        withCredentials: true,
      });
      console.log(data);
    };


export function useFetchCurrentUser() {
  useEffect(() => {
    
    fetchUser();
  }, []);
}


