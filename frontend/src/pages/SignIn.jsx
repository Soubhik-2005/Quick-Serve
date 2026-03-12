import React from "react";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/signin",
        {
          email,
          password,
          role,
        },
        {
          withCredentials: true,
        },
      );
        console.log(data);
    } catch (error) {
      console.log("error in handleSubmit", error);
    }
  }
  return (
    <div className=" w-screen flex justify-center items-center bg-orange-100 h-screen overflow-hidden">
      <div className="max-w-sm bg-white px-8 py-2 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-orange-500 mb-2 text-center">
          Quick Serve
        </h1>
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
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-400 rounded-md p-2 mt-1 mb-2"
          placeholder="enter your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between">
          {["user", "delivery-partner", "admin"].map((r) => (
            <div
              key={r}
              className=" border border-orange-400 px-4 py-2 rounded-lg cursor-pointer focus:bg-orange-500 focus:text-white"
              onClick={() => setRole(r)}
              style={{
                backgroundColor: role === r ? "orange" : "white",
                color: role === r ? "white" : "black",
              }}
            >
              {r}
            </div>
          ))}
        </div>

        <button
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 cursor-pointer mt-2 active:scale-95"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default SignIn;
