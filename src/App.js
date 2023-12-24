import React, { Fragment } from "react";
import Header from "./components/Header";
import Meals from "./pages/Meals";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
