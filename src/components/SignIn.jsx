import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="p-2 bg-primary md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-2 md:rounded-r-full rounded-t-3xl">
      <div className="hidden md:block text-center font-bold text-5xl">
        Log in
      </div>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="email"
      >
        <span>Email Address</span>
        <input
          placeholder="Enter email"
          className="w-full border-2 border-black rounded p-1"
          type="email"
          id="email"
        />
      </label>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="password"
      >
        <span>Password</span>
        <input
          placeholder="Enter password"
          className="w-full border-2 border-black rounded p-1"
          type="password"
          id="password"
        />
      </label>
      <a className="text-secondary font-bold hover:underline" href="#">
        Forgot password?
      </a>
      <button
        className="font-bold rounded hover:bg-black-shade-1 active:bg-black-shade-3 md:w-2/3 sm:w-4/5 w-3/4 bg-black-shade-2 text-secondary p-2 mt-1"
        type="submit"
      >
        Log in
      </button>
      <Link
        to="/signup"
        className="text-center font-bold rounded hover:bg-green-shade-2 active:bg-green-shade-3 md:w-2/3 sm:w-4/5 w-3/4 bg-green-shade-1 text-secondary p-2 mt-1"
        type="submit"
      >
        Don't have an account ?
      </Link>
    </div>
  );
}
export default SignIn;
