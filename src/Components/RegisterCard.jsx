import { useState } from "react";
import { useForm } from "react-hook-form";

import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { Link, NavLink } from "react-router";

function RegisterCard() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    console.log("Registration data:", data);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-5 text-2xl font-extrabold">
        <NavLink to="/">tindog</NavLink>
      </div>
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <header className="mb-6 space-y-1 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create an account
          </h2>
          <p className="text-sm text-gray-600">
            Enter your details below to register
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col space-y-1"></div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 after:ml-1 after:text-red-500 after:content-['*']"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",

                validate: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  `${value} is not a valid email address.`,
              })}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <span className="text-[12px] font-extralight text-red-500">
              {errors.email?.message}
            </span>
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 after:ml-1 after:text-red-500 after:content-['*']"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Password must be at least 8 characters long, with uppercase, lowercase, and a number",
                  },
                })}
                className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
            <span className="m-0 p-0 text-[12px] font-extralight text-red-500">
              {errors.password?.message}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5 text-center text-sm text-gray-500 before:absolute before:top-1/2 before:left-0 before:h-px before:w-[40%] before:bg-gray-300 before:content-[''] after:absolute after:top-1/2 after:right-0 after:h-px after:w-[40%] after:bg-gray-300 after:content-['']">
          <span className="relative z-10 bg-white px-4">OR</span>
        </div>

        <button
          type="submit"
          className="mb-4 flex w-full items-center justify-center rounded-md border-1 border-gray-700 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
        >
          <span>
            <FaGoogle />
          </span>{" "}
          <span>Sign Up with Google</span>
        </button>

        {/* Login Link */}
        <p className="text-left text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterCard;
