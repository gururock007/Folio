import { NavButton } from "./NavButton";
import sign from "/images/sign.png";
export const SignCard = () => {
  return (
    <div className=" px-32 py-16 font-Poppins">
      <div className="grid grid-cols-5  bg-opacity-10 shadow-lg backdrop-blur-lg  p-6 pt-16 rounded-3xl">
          <div className=" col-span-3">
            <img src={sign} alt="Illustration" className="w-full h-auto" />
          </div>
          <div className="px-8 col-span-2">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-md bg-inputfeild placeholder:text-text"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 rounded-md bg-inputfeild placeholder:text-text" 
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full  p-3 mb-4 rounded-md bg-inputfeild placeholder:text-text" 
            />
            <div className=" grid grid-cols-2 gap-2">
              <div className=" col-span-1 self-center text-center mt-4">
                <NavButton text={"Sign Up"} location={"/"} />
              </div> 
              <div className=" col-span-1">
                <button className=" bg-inputfeild text-text p-3 rounded-md mt-4 w-full">
                  Sign Up with Gmail
                </button>
              </div>
            </div>
            <div className="text-text mt-4 text-center pt-5">
              Already have an account?{" "}
              <a href="#" className="underline text-accent">
                Sign In
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};
