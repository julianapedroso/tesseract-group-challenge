import React from "react";
import Header from "./components/Header";
import MembersPage from "./pages/MembersPage";
import MembersDetailsPage from "./pages/MembersDetailsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MembersPage />
      <MembersDetailsPage />
      <Footer />
    </div>
  );
};

export default App;
