import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "/images/login.png";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail } from "../contexts/regexConditions";
export const LoginCard = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault;
    try {
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className=" px-32 py-16 font-Poppins">
      <div className="grid grid-cols-5  bg-opacity-10 shadow-lg backdrop-blur-lg  p-6 pt-16 rounded-3xl">
        <div className=" col-span-3">
          <img src={login} alt="Illustration" className="w-full h-auto" />
        </div>
        <div className="px-8 col-span-2">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-3 mb-4 rounded-md bg-inputfeild placeholder:text-text text-text"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-3 mb-4 rounded-md bg-inputfeild placeholder:text-text text-text"
          />
          <div className=" grid grid-cols-2 gap-2">
            <div className=" col-span-1 self-center text-center mt-4">
              <button
                className="hover:bg-secondary cursor-pointer 
              text-primary px-4 py-2 transition 
              duration-300 ease-in-out hover:text-background 
              rounded-md self-center"
                onClick={handleLogin}
              >
                Sign Up{" "}
              </button>
            </div>
            <div className=" col-span-1">
              <button className=" bg-inputfeild text-text p-3 rounded-md mt-4 w-full">
                Sign Up with Gmail
              </button>
            </div>
          </div>
          <div className="text-text mt-4 text-center pt-5">
            Do not have an account?{" "}
            <a href="/signup" className="underline text-accent">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
