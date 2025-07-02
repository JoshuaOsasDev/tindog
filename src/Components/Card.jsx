import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import { Link, NavLink } from "react-router";

function Card() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-5 text-2xl font-extrabold">
        <NavLink to="/">tindog</NavLink>
      </div>
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <header className="mb-6 space-y-1 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Login to your account
          </h2>
          <p className="text-sm text-gray-600">
            Enter your email below to login to your account
          </p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 after:ml-1 after:text-red-500 after:content-['*']"
              >
                Email
              </label>
              <span className="mr-1 text-sm font-extralight text-red-500">
                {errors && errors.email?.message}
              </span>
            </div>
            <input
              type="email"
              id="email"
              placeholder="m@example.com"
              {...register("email", {
                required: "email is required",
                validate: (value) =>
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                  `${value} is not a valid email address.`,
              })}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 after:ml-1 after:text-red-500 after:content-['*']"
              >
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="relative">
              <div className="flex flex-col items-end">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Password must be at least 8 characters long, with uppercase, lowercase, and a number",
                    },
                  })}
                />
                <span className="mr-1 text-sm font-extralight text-red-500">
                  {errors && errors.password?.message}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((password) => !password);
                }}
                className={`${errors.password?.message ? "absolute top-1/3 right-3 -translate-y-1/2 text-sm font-extralight text-gray-500 hover:text-gray-700 focus:outline-none" : "absolute top-1/2 right-3 -translate-y-1/2 text-sm font-extralight text-gray-500 hover:text-gray-700 focus:outline-none"}`}
                tabIndex={-1}
              >
                {showPassword ? <HiEye /> : <HiEyeOff />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-0 flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-center text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Login
          </button>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md border-2 border-blue-500 px-4 py-2 text-center text-gray-700 shadow-sm hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Login with Google
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center text-sm text-gray-500 before:absolute before:top-1/2 before:left-0 before:h-px before:w-[40%] before:bg-gray-300 before:content-[''] after:absolute after:top-1/2 after:right-0 after:h-px after:w-[40%] after:bg-gray-300 after:content-['']">
          <span className="relative z-10 bg-white px-4">or</span>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Card;
