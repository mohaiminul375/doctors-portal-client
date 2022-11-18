import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser,updateUser } = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // toast('user crated succesfully ')
        const userInfo ={
          displayName: data.name

        }
        updateUser(userInfo)
        .then(()=>{

        })
        .catch(error => console.log(error))
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 shadow-2xl p-7 ">
        <h2 className="text-4xl  text-center">Register</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}

            <label className="label">
              {" "}
              <span className="label-text">forget password </span>{" "}
            </label>
          </div>
          <input
            className="mt-4 w-full btn btn-accent"
            type="submit"
            value="SignUp"
          />
        </form>
        <p>
          already have an account
          <Link className="text-secondary" to="/login">
            please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
