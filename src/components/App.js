import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Stocks } from "./Stocks";
import NavBar from "./NavBar"
import { TitleHeader } from "./TitleHeader";


function App() {
  //set state for pagerender
  const [page, setPage] = useState("/")

  return (
    <div className="App">
      <BrowserRouter>
        <TitleHeader />
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path="/about">
            <Stocks />
          </Route>
          <Route exact path="/contact">
            <Stocks />
          </Route>
          <Route exact path="/">
            <Stocks />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;