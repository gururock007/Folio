import Header from "../components/Header";
import Footer from "../components/Footer";
import { DashBoardHome } from "../components/DashBoardHome";
import { Reviews } from "../components/Reviews";

export const DashBoard = () => {
  return (
    <div>
      <Header />
      <DashBoardHome />
      <Footer />
    </div>
  );
};
