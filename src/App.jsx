// import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import modules from "./modules";

function App() {
  return (
    <Router>
      <ul>
        {modules.map((module) => (
          <li key={module.name}>
            <Link to={module.routeProps.path}>{module.name}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {modules.map((module) => (
          <Route {...module.routeProps} key={module.name} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
