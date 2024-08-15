"use client";  
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/Container';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <Container>
      <div className="w-full flex justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="email" >
            Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 pl-2" href="#">
              Not have an account ?
              <b className="text-green-500"> <Link href="/signup">Sign Up</Link>
              </b>
            </p>
          </div>
        </form>
  
</div>
    </Container>
)
};



export default Login;
