import { NavButton } from "./NavButton";
import sign from "/images/sign.png";
export const SignCard = () => {
  return (
    <div className=" px-32 py-16">
      <div className="grid grid-cols-5 bg-purple-100 bg-opacity-10 shadow-lg backdrop-blur-lg  p-6 pt-16 rounded-3xl">
          <div className=" col-span-3">
            <img src={sign} alt="Illustration" className="w-full h-auto" />
          </div>
          {/* Sign-up form on the right */}
          <div className="px-8 col-span-2">
            <h2 className="text-3xl font-bold text-text mb-8 text-center focus-within:outline-none ">Sign Up</h2>
            {/* Email input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-md bg-inputfeild"
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 rounded-md bg-inputfeild" 
            />
            {/* Confirm Password input */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full  p-3 mb-4 rounded-md bg-inputfeild " 
            />
            <div className=" grid grid-cols-2 gap-2">
              <div className=" col-span-1 self-center text-center">
                <NavButton text={"Sign Up"} location={"/"} />
              </div> 
              {/* Gmail OAuth button */}
              <div className=" col-span-1">
                <button className=" bg-inputfeild text-text p-3 rounded-md mt-4 w-full">
                  Sign Up with Gmail
                </button>
              </div>
            </div>
            {/* Already have an account? hyperlink */}
            <p className="text-text mt-4">
              Already have an account?{" "}
              <a href="#" className="underline text-accent">
                Sign In
              </a>
            </p>
          </div>
        </div>
    </div>
  );
};
