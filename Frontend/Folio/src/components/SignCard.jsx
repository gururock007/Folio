import { NavButton } from "./NavButton";
import sign from "/images/sign.png";
export const SignCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-16 bord">
      <div className="w-1/2 p-8">
        <img src={sign} alt="Illustration" className="w-full h-auto" />
      </div>

      {/* Sign-up form on the right */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-bold text-white mb-8">Sign Up</h2>

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
  );
};
