import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";
import { PageInfo } from "../components/PageInfo";
import { DashBoard } from "./DashBoard";
import { useAuth } from "../contexts/AuthContext";
<<<<<<< HEAD
=======
import { Book } from "./Book";
import { Results } from "./Results";
import ChatBot from "../components/ChatBot";
>>>>>>> 94f8be3bdf23227e844e6c9f558b23d816859c26
export default function Home() {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <DashBoard />;
  } else {
    return (
      <div>
        <Header />
        <Hero />
        <PageInfo />
<<<<<<< HEAD
=======
        <ChatBot />
        {/* <Results /> */}
>>>>>>> 94f8be3bdf23227e844e6c9f558b23d816859c26
        <Footer />
      </div>
    );
  }
}
