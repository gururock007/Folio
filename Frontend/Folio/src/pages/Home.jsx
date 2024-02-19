import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Footer from "../components/Footer";
import { PageInfo } from "../components/PageInfo";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PageInfo />
      <Footer />
    </div>
  );
}
