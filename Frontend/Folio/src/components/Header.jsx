import { useNavigate } from "react-router-dom";
import dark from "../assets/dark.png";
import light from "../assets/light.png";
// import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div onClick={() => navigate("/")}>
          <img
            src={document.body.classList.contains("dark") ? dark : light}
            alt="Logo"
          />
          Folio
        </div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/books")}>Books</li>
          <li onClick={() => navigate("/lists")}>Lists</li>
          <li onClick={() => navigate("/login")}>Login</li>
          {/* <ThemeSwitch /> */}
        </ul>
      </nav>
    </div>
  );
}
