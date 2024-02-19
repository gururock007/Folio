import { useEffect, useState } from "react";

const ThemeSwitch = () => {
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
      <div className="bg-gray-800">
        <input type="checkbox" checked={isDark} onChange={toggleTheme} />
        <span className="slider"></span>
      </div>
    </div>
  );
};
export default ThemeSwitch;
