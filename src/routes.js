import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "~/pages/Home";
import ProductPage from "~/pages/Product";

export default () => {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <Switch location={location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/produto" exact exact component={ProductPage} />
          </Switch>
        )}
      ></Route>
    </BrowserRouter>
  );
};
