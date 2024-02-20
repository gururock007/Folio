import { useNavigate } from "react-router-dom";

export const NavButton = ({ text, location }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/${location}`)}
        className="
              hover:bg-secondary cursor-pointer 
              text-primary px-4 py-2 transition 
              duration-300 ease-in-out hover:text-background 
              rounded-md self-center font-Poppins"
      >
        {text}
      </div>
    </div>
  );
};
