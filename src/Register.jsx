import React from "react";
import { Link } from "react-router-dom";
import ParticlesComponent from "./components/particles";

const Register = () => {
  return (
    <div>
      <ParticlesComponent id="particles" />
      <div className=" h-screen flex flex-col  pt-40 items-center">
        <main className="w-[27%] h-[60%] border border-gray-500 rounded-md shadow-lg ">
          <form
            action=""
            className="flex flex-col items-center justify-center gap-4 pt-10"
          >
            <h1 className="text-3xl font-semibold">Register</h1>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Name
              </label>
              <input type="text" className="border border-black bg-inherit" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Email
              </label>
              <input type="email" className="border border-black bg-inherit" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                className="border border-black bg-transparent"
              />
            </div>
            <div>
              <Link
                to="/home"
                className="font-semibold border border-black py-1 px-2 rounded-sm shadow-md"
              >
                Sign in
              </Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;
