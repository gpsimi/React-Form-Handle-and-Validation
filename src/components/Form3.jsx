import React from 'react'
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { data } from 'autoprefixer'
// import { stringify } from 'postcss';




export default function Form3 ()  {
  const form = useForm();
  const { register, control, handleSubmit } = form;


  const onSubmit = (data) => {
    console.log ('Form-submitted', data)
  }
  


  return (
    <div className="flex flex-col items-center justify-center bg-blue-700 h-screen">
      
      <div className="bg-white px-10 py-10 flex flex-col items-center border rounded-md">
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="flex flex-col items-center text-[20px] font-semibold">Registration Form</h1>
          <hr className="mb-5 mt-5 border-1 border-blue-400" />
            
            <div className="ui form">
              <div className="mt-5">
                <label htmlFor="Username" 
                  className="mb-2 block text-sm font-semibold text-blue-700" 
                  >Username</label>
                  <input 
                    type="text" 
                    id="username" 
                    // name="username" 
                    placeholder="Username"
                    {...register("username")}
                    
                    
                  />
                </div>


                <div className="mt-5">
                  <label htmlFor="Email" 
                    className="mb-2 block text-sm font-semibold text-blue-700" 
                  >Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    // name="email" 
                    placeholder="Email" 
                    {...register("email")}
                    
                  />
                </div>
                

                <div className="mt-5">
                  <label htmlFor="Password" 
                    className="mb-2 block text-sm font-semibold text-blue-700" 
                    >Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    // name="password" 
                    placeholder="Password"
                    {...register("password")}
                    
                  />
                </div>

            </div>
              
            


            <div>
              <button 
                className="w-full mt-6 p-2 border rounded text-white bg-blue-700 hover:bg-blue-600"
              >Submit</button>
            </div>
        </form>
        <DevTool control={ control }/>
      </div>
    </div>
  )
}


