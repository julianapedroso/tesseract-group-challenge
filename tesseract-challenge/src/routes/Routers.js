import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import MembersPage from "../pages/MembersPage";
import MembersDetailsPage from "../pages/MembersDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header />

        <Route exact path="/">
          <MembersPage />
        </Route>

        <Route exact path="/details/:userId">
          <MembersDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
