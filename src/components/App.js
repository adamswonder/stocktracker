import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Stocks } from "./Stocks";
import NavBar from "./NavBar"
import { TitleHeader } from "./TitleHeader";
import AddStock from "./AddStock";
import About from "./About"


function App() {
  //set state for pagerender
  const [page, setPage] = useState("/")

  return (
    //Employ browserRouter for navigation
    <div className="App">
      <BrowserRouter>
        <TitleHeader />
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/addstock">
            <AddStock />
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