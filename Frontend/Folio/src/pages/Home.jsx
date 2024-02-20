import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";
import { PageInfo } from "../components/PageInfo";
import { DashBoard } from "./DashBoard";
import { useAuth } from "../contexts/AuthContext";
import { Book } from "./Book";
export default function Home() {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <DashBoard />;
  } else {
    return (
      <div>
        <Header />
        {/* <Hero />
        <PageInfo /> */}
        <Book />
        <Footer />
      </div>
    );
  }
}
