import { NavButton } from "./NavButton";
import sign from "/images/sign.png";
export const SignCard = () => {
  return (
    <div className=" px-32 py-16">
      <div className="grid grid-cols-5 bg-purple-100 bg-opacity-10 shadow-lg backdrop-blur-lg border border-opacity-18 border-white border-[0.1px] p-6 pt-16 rounded-3xl">
          <div className=" col-span-3">
            <img src={sign} alt="Illustration" className="w-full h-auto" />
          </div>
          {/* Sign-up form on the right */}
          <div className="px-8 col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Sign Up</h2>
            {/* Email input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white p-3 mb-4 rounded-md"
            />
            {/* Password input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white p-3 mb-4 rounded-md"
            />
            {/* Confirm Password input */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-white p-3 mb-4 rounded-md"
            />
            <NavButton text={"Sign Up"} location={"/"}></NavButton>
            {/* Gmail OAuth button */}
            <button className="bg-accent text-white p-3 rounded-md mt-4 w-full">
              Sign Up with Gmail
            </button>
            {/* Already have an account? hyperlink */}
            <p className="text-white mt-4">
              Already have an account?{" "}
              <a href="#" className="underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
    </div>
  );
};
