import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate=useNavigate();
  const handleLogin =async (e) => {
    e.preventDefault();
 const form=e.target
    const email = form.email.value;
    const password =form.password.value;
    console.log(email,password); 

    axios.post('https://server-internshala.vercel.app/login',{email,password})
    .then(result=>{
        console.log(result);
        if (result.data==="Success") {
          navigate("/home")
          Swal.fire("Log in Successfully!");
        }
       
    })
    .catch(result=>console.log(result))
  
  }
    return (
        <div>
              <>
    
       <div className="bg-gray-200 w-full min-h-screen  flex items-center justify-center">
        <div className="w-full py-8">
          <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
          <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap ml-20 font-semibold py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 bg-emerald-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                  fill="rgba(255,255,255,.2)"
                />
              </svg>
              Image Uploader
            </a>
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Log in!
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              You don't have account?{" "}
              <a
                href="/register"
                className="text-green-500 hover:text-yellow-500 hover:underline"
                title="Sign In"
              >
                Register here
              </a>
            </p>

            <form onSubmit={handleLogin}   className="my-8 text-sm">
            <div className="flex form-control flex-col my-4">
                <label htmlFor="email" className="text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none bg-white focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex  form-control flex-col my-4">
                <label  className="text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                name='password'
                  id="password"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none bg-white focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Password"
                />
              </div>

              <div className="flex  items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="mr-2 focus:ring-0 rounded"
                />
                <label htmlFor="remember_me" className="text-gray-700">
                  I accept the{" "}
                  <a
                    href="#"
                    className="text-green-500 hover:text-blue-700 hover:underline"
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-green-500 hover:text-blue-700 hover:underline"
                  >
                    privacy policy
                  </a>
                </label>
              </div>

              <div className="my-4 flex items-center justify-end space-x-4">
         
               <button type='submit' className="bg-[#10b981] hover:bg-red-500 rounded-lg px-8 py-2 text-white hover:shadow-xl transition duration-150 uppercase">
                  Sign In
                </button>
         
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
              <a
                href="#"
                
                className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-200 hover:bg-gray-200 rounded"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326667 333333"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                    fill="#4285f4"
                  ></path>
                  <path
                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                    fill="#34a853"
                  ></path>
                  <path
                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                    fill="#fbbc04"
                  ></path>
                  <path
                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                    fill="#ea4335"
                  ></path>
                </svg>
                <span>Sign up with Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
       </>
        </div>
    );
};

export default Login;