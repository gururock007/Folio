import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dark from "/images/dark.png";
import light from "/images/light.png";

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
            <img src={isDark ? dark : light} alt="Logo" className="h-8 w-8" />
            <span className="text-text text-xl font-bold ml-2">Folio</span>
          </div>
          <ul className="flex justify-end space-x-16">
            <li
              onClick={() => navigate("/")}
              className="bg-secondary cursor-pointer text-primary px-4 py-2 transition duration-300 ease-in-out hover:text-background rounded-md self-center"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/books")}
              className="text-text cursor-pointer self-center"
            >
              Books
            </li>
            <li
              onClick={() => navigate("/lists")}
              className="text-text cursor-pointer self-center"
            >
              Lists
            </li>
            <li
              onClick={() => navigate("/login")}
              className="bg-primary cursor-pointer text-secondary px-4 py-2 transition duration-300 ease-in-out hover:text-background rounded-md"
            >
              Login
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
