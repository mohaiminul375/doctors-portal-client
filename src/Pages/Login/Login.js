import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogIn = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 shadow-2xl p-7 ">
        <h2 className="text-4xl text-center">LogIn</h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
           
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "password is required",minLength:{value: 6,message:'password must be 6 character or longer'} })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}  
           
            <label className="label">
              {" "}
              <span className="label-text">forget password </span>{" "}
            </label>
          </div>
          <input className="w-full btn btn-accent" type="submit" />
        </form>
        <p>
          New to doctors portal?{" "}
          <Link className="text-secondary" to="/signup">
            please SignUp
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
