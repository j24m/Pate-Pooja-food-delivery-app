import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

function SignUp({ isLoading, setIsLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //Creating credentials
  async function handleSignup() {
    setIsLoading(true); //show loading
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created.");
      //show loader animation here during the user registration process
      navigate("/"); //redirect to landing page once signup successful
    } catch (error) {
      console.error("error", error, typeof error);
    } finally {
      setIsLoading(false); //hide loader
    }
  }
  return (
    <div className="p-2 bg-primary md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-2 md:rounded-r-full rounded-t-3xl">
      <div className="hidden md:block text-center font-bold text-5xl">
        Sign up
      </div>
      {/* <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="username"
      >
        <span>Username</span>
        <input
          placeholder="Enter your name"
          className="border-2 border-black rounded p-1"
          type="text"
          id="username"
          value="John Doe"
        />
      </label> */}
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="email"
      >
        <span>Email Address</span>
        <input
          placeholder="Enter email"
          className="border-2 border-black rounded p-1"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="password"
      >
        <span>Password</span>
        <input
          placeholder="Enter password"
          className="border-2 border-black rounded p-1"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <a className="text-secondary font-bold hover:underline" href="#">
        Forgot password?
      </a>
      <button
        className="font-bold rounded hover:bg-black-shade-1 active:bg-black-shade-3 md:w-2/3 sm:w-4/5 w-3/4 bg-black-shade-2 text-secondary p-2 mt-1"
        onClick={handleSignup}
      >
        Sign up
      </button>
      <Link
        to="/login"
        className="text-center font-bold rounded hover:bg-green-shade-2 active:bg-green-shade-3 md:w-2/3 sm:w-4/5 w-3/4 bg-green-shade-1 text-secondary p-2 mt-1"
        type="submit"
      >
        Already have an account ?
      </Link>
    </div>
  );
}
export default SignUp;
