import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { db } from "../config/firebase"; // Firestore instance
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

function SignUp({ isLoading, setIsLoading }) {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  function validateFirstName(firstname) {
    if (!firstname.trim()) {
      return "first name cannot be empty.";
    }
    if (firstname.length < 2) {
      return "First name must be atleast two characters.";
    }
    if (firstname.length > 50) {
      return "First name should not exceed 50 characters.";
    }
    if (!/^[a-zA-Z-]+$/.test(firstname)) {
      return "First name can only contain letters and hyphens.";
    }
    return "";
  }

  const validateLastName = (lastname) => {
    if (!lastname.trim()) {
      return "Last name cannot be empty.";
    }
    if (lastname.length < 2) {
      return "Last name must be at least 2 characters.";
    }
    if (lastname.length > 50) {
      return "Last name must not exceed 50 characters.";
    }
    if (!/^[A-Za-z]+$/.test(lastname)) {
      return "Last name can only contain letters.";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email address cannot be empty.";
    }
    if (email.length > 320) {
      return "Email address cannot exceed 320 characters.";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "Email address must be in a valid format (e.g., example@domain.com).";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return "Password cannot be empty.";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters.";
    }
    if (password.length > 64) {
      return "Password must not exceed 64 characters.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must include at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must include at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must include at least one digit."; // Digit
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must include at least one special character."; // Special character
    }
    if (/\s/.test(password)) {
      return "Password must not contain spaces.";
    }
    return "";
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameError(validateFirstName(value));
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(validateLastName(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  //Creating credentials
  async function handleSignup() {
    const firstNameErr = validateFirstName(firstName);
    const lastNameErr = validateLastName(lastName);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (firstNameErr || lastNameErr || emailErr || passwordErr) {
      setFirstNameError(firstNameErr);
      setLastNameError(lastNameErr);
      setEmailError(emailErr);
      setPasswordError(passwordErr);
      return; // Stop signup process if there are validation errors
    }
    setIsLoading(true); //show loading
    try {
      //Create user with firebase auth.
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          firstName,
          lastName,
          email,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to save user data.");
      }

      console.log("User created and saved to firestore");
      //show loader animation here during the user registration process
      navigate("/"); //redirect to landing page once signup successful
    } catch (error) {
      console.error("error during signup", error.message);
    } finally {
      setIsLoading(false); //hide loader
    }
  }
  return (
    <div className="p-2 bg-primary md:w-1/2 w-full h-full flex flex-col justify-center items-center gap-2 md:rounded-r-full rounded-t-3xl">
      <div className="hidden md:block text-center font-bold text-5xl">
        Sign up
      </div>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="firstname"
      >
        <span className="flex gap-1">
          firstname
          <span className="text-red-700 text-xl">*</span>
        </span>
        <input
          placeholder="Enter your firstname"
          className="border-2 border-black rounded p-1"
          type="text"
          id="firstname"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        {firstNameError && (
          <span className="text-red-500 text-sm">{firstNameError}</span>
        )}
      </label>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="lastname"
      >
        <span className="flex gap-1">
          lastname
          <span className="text-red-700 text-xl">*</span>
        </span>
        <input
          placeholder="Enter your lastname"
          className="border-2 border-black rounded p-1"
          type="text"
          id="lastname"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {lastNameError && (
          <span className="text-red-500 text-sm">{lastNameError}</span>
        )}
      </label>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="email"
      >
        <span className="flex gap-1">
          email
          <span className="text-red-700 text-xl">*</span>
        </span>
        <input
          placeholder="Enter your email"
          className="border-2 border-black rounded p-1"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
      </label>
      <label
        className="md:w-2/3 sm:w-4/5 w-3/4 font-bold text-md flex flex-col"
        htmlFor="password"
      >
        <span className="flex gap-1">
          password
          <span className="text-red-700 text-xl">*</span>
        </span>
        <input
          placeholder="Enter your password"
          className="border-2 border-black rounded p-1"
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && (
          <span className="text-red-500 text-sm">{passwordError}</span>
        )}
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
