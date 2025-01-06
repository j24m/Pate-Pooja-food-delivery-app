import { Link, useLocation } from "react-router-dom";
import PokeBowl from "../assets/Poke bowl.gif";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";
import LoaderAnimation from "./LoaderAnimation";

function UserAuthSection() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const [isLoading, setIsLoading] = useState(false);

  return (
    //isLoading ? loader animation : userAuth
    <>
      {isLoading ? (
        <LoaderAnimation />
      ) : (
        <div className="shadow-xl md:flex md:flex-row md:justify-center md:items-center h-screen flex flex-col-reverse items-center">
          {isLogin ? (
            <SignIn />
          ) : (
            <SignUp isLoading={isLoading} setIsLoading={setIsLoading} />
          )}
          <div className="h-full md:w-1/2 sm:w-2/3 md:p-4 p-2 flex flex-col justify-center items-center">
            <img className="md:w-3/4 sm:w-3/5 w-1/2" src={PokeBowl} alt="" />
            <Link
              to="/"
              className="md:text-5xl text-3xl text-purple-shade-1 text-shadow-without-hover font-bold hover:text-shadow-on-hover"
            >
              Pate Pooja
            </Link>
            <h2 className="md:text-lg text-md text-primary">
              Delight in Every Bite
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
export default UserAuthSection;
