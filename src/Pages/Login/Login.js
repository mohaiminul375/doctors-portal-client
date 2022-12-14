import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const {  register,  formState: { errors },  handleSubmit,
  } = useForm();
  const [loginError,setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'
  
  const handleLogIn = (data) => {
    console.log(data);
    setLoginError('')
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
navigate(from, {replace: true})
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message);
    })
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
          {loginError && <p>{loginError}</p>}
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
