import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import { Testimonials } from "./routes/Testimonials";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/testimonials" component={Testimonials} />
      </Switch>
    </Router>
  );
}

export default App;
