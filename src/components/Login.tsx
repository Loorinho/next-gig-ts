import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/mylogo.png";
import axios from "axios";
// import { ChangeEvent, FormEvent, useState } from "react";
import {useForm} from 'react-hook-form'
import { TLoginSchema, LoginSchema } from "../features/zod/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";


const Login = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: {errors}} = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema)
  })

  async function loginUser(data: TLoginSchema) {
 console.log(data)
    const url = "http://127.0.0.1:8000/api/login";

    try {
      const response = await axios.post(url, data, {
        headers: {
          Accept: "application/json",
        },
      });
      if(response.data.logged_in === true){
        navigate("/home")
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login_form ">
      <form
        className="py-5 px-4 border-2 border-blue-600 rounded"
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="flex justify-center items-center flex-col mb-4">
          <img src={Logo} width={150} height={150} alt="logo" />
          <p className="text-2xl">
            My <span className="text-blue-700">NEXT</span> gig
          </p>
        </div>
        <p className="text-center text-lg">Login into your account</p>

        <div>
          <label htmlFor="" className="block text-sm text-gray-600 mt-3">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username..."
            className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
            autoComplete="off"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{`${errors.email.message}`}</span>
          )}
        </div>

        <div>
          <label htmlFor="" className="block text-sm text-gray-600 mt-3">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password..."
            className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
            autoComplete="off"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{`${errors.password.message}`}</span>
          )}
        </div>

        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            className="w-full hover:scale-95 bg-blue-700 rounded py-2 px-3 text-white text-lg"
            // onClick={() => console.log("clicked")}
          >
            Login
          </button>
        </div>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link to={"/register"}>
            <span className="mx-1 text-blue-700">Register</span>
          </Link>{" "}
          here
        </p>
      </form>
    </div>
  );
};

export default Login;
