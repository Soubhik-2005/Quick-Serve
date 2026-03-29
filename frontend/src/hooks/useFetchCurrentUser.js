import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";



export const fetchUser = async (dispatch) => {
  try{
      const {data} = await axios.get("http://localhost:8000/api/auth/me", {
        withCredentials: true,
      });
      console.log("Fetched user:", data);
      dispatch(setUser(data));
    } catch (error) {
      console.error("Error fetching user:", error);
      dispatch(setUser(null));
    }
  };

export function useFetchCurrentUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    fetchUser(dispatch);
  }, [dispatch]);
}


