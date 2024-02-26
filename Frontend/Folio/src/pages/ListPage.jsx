import React from "react";
import { ListComponent } from "../components/ListComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const ListPage = () => {
  return (
    <div>
      <Header />
      <ListComponent
        url={"http://localhost/search/booksByGenre/love"}
        gener={"Love"}
      />
      <ListComponent
        url={"http://localhost/search/booksByGenre/crime"}
        gener={"Crime"}
      />
      <ListComponent
        url={"http://localhost/search/booksByGenre/horror"}
        gener={"Horror"}
      />
      <Footer />
    </div>
  );
};
