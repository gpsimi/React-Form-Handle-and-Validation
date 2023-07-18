import React from "react";
import  { useState } from "react";
import { useForm } from "react-hook-form";
// import "./App.css";


function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  

  
  

  return (
    <div className="flex flex-col items-center justify-center bg-blue-700 h-screen">
      
      <pre className="text-white">{ JSON.stringify(userInfo, undefined, 2) }</pre>
      
      
      <div className="bg-white px-10 py-10 flex flex-col items-center border rounded-md">
        
        <form onSubmit={ handleSubmit (onSubmit) }>
          <h1 className="flex flex-col items-center text-[20px] font-semibold">Registration Form</h1>
          <hr className="mb-5 mt-5 border-1 border-blue-400" />
            
            <div className="ui form">
              <div className="mt-5">
                <label htmlFor="Username" 
                  className="mb-2 block text-sm font-semibold text-blue-700" 
                  >Username</label>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    
                  />

                  {/* {errors.email && errors.username.type === "required" && (
                  <p className="errorMsg">Username is required.</p>
                  )}
                  {errors.email && errors.username.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                  )} */}

                </div>
                <p>{errors.username?.message}</p>


                <div className="mt-5">
                  <label htmlFor="Email" 
                    className="mb-2 block text-sm font-semibold text-blue-700" 
                  >Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid."
                      }
                    })}
                    
                  />
                  {/* {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Email is not valid.</p>
                  )} */}

                </div>
                <p>{errors.email?.message}</p>
                

                <div className="mt-5">
                  <label htmlFor="Password" 
                    className="mb-2 block text-sm font-semibold text-blue-700" 
                    >Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    {...register("password", 
                    {required: "Password is required"})}
                    
                  />
                            {/* {errors.password && errors.password.type === "required" && (
                            <p className="errorMsg">Password is required.</p>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                            <p className="errorMsg">
                              Password should be at-least 6 characters.
                            </p>
                            )} */}

                </div>
                <p>{errors.password?.message}</p>

            </div>
              
            
            

            <div>
                {/* <p className="text-blue-700 border">{ JSON.stringify(userInfo, undefined, 2) }</p> */}
              <button 
                className="lex flex-col items-center w-full mt-6 p-2 border rounded text-white bg-blue-700 hover:bg-blue-600"
                >Submit</button>
            </div>
        </form>
      </div>
    </div> 
  )
}

export default Form
