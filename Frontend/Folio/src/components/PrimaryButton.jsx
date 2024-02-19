import React from "react";

export const PrimaryButton = ({ text }) => {
  return (
    <div className="">
      <div
        onClick={() => navigate("/")}
        className="
              bg-secondary cursor-pointer 
              text-primary px-4 py-2 transition 
              duration-300 ease-in-out hover:text-background 
              rounded-md self-center"
      >
        {text}
      </div>
    </div>
  );
};
