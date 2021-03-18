import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import MembersPage from "../pages/MembersPage";
import MembersDetailsPage from "../pages/MembersDetailsPage";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <MembersPage />
        </Route>

        <Route exact path="/details/:login">
          <MembersDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
