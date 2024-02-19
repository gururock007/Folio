import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
import { NavButton } from "./NavButton";
import { SecondaryButton } from "./SecondaryButton";

const Header = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div>
      <nav className="bg-background p-4">
        <div className="grid grid-cols-2 items-center">
          <div className="flex items-center" onClick={() => navigate("/")}>
            <img src={isDark ? dark : light} alt="Logo" className="h-12 w-12" />
            <span className="text-text text-3xl font-bold ml-2">Folio</span>
          </div>
          <ul className=" grid grid-cols-9 gap-2">
            <li className=" col-span-2 text-center">
              <NavButton text={'Home'} location={'/'} />
            </li>
            <li className=" col-span-2 text-center">
              <NavButton text={'Books'} location={'/Books'} />
            </li>
            <li className=" col-span-2 text-center">
              <NavButton text={'Lists'} location={'/lists'} />
            </li>
            <li className=" col-span-2 text-center"> 
              <SecondaryButton text={'Login'} location={'login'} />
            </li>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isDark}
                onChange={toggleTheme}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
