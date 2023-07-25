import { Link } from "react-router-dom";
import Logo from "../assets/images/mylogo.png";
import Header from "./Header";

const Register = () => {
  return (
    <>
      <Header />
      <div className="login_form border-2 border-blue-600 rounded">
        <form action="" className="py-5 px-4">
          <div className="flex justify-center items-center flex-col mb-4">
            <img src={Logo} width={150} height={150} alt="logo" />
            <p className="text-2xl">
              My <span className="text-blue-700">NEXT</span> gig
            </p>
          </div>
          <p className="text-center text-lg">Create your account</p>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                First name
              </label>
              <input
                type="text"
                placeholder="Enter your username..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Last name
              </label>
              <input
                type="text"
                placeholder="Enter your username..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Gender
              </label>
              <input
                type="text"
                placeholder="Enter your username..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Contact
              </label>
              <input
                type="number"
                placeholder="eg. 0786528921..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Age
              </label>
              <input
                type="number"
                placeholder="Enter your age..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your location..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid ">
            <div>
              <label htmlFor="" className="block text-sm text-gray-600 mt-3">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address..."
                className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
                autoComplete="off"
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-2"> */}
          <div>
            <label htmlFor="" className="block text-sm text-gray-600 mt-3">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password..."
              className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="" className="block text-sm text-gray-600 mt-3">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="Confirm your password...."
              className="w-full px-3 py-2 rounded focus:ring-1 ring-blue-700 outline-none border-2 border-blue-600"
              autoComplete="off"
            />
          </div>
          {/* </div> */}

          <div className="flex justify-center items-center mt-5">
            <button className="w-full hover:scale-95 bg-blue-700 rounded py-2 px-3 text-white text-lg">
              Create account
            </button>
          </div>

          <p className="mt-4">
            Already have an account?{" "}
            <Link to={"/"}>
              <span className="mx-1 text-blue-700">Login</span>
            </Link>{" "}
            here
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
