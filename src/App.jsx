import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Logo from "./modules/Components/Logo";
import modules from "./modules";

function App() {
  return (
    <div className="box-border m-0 bg-gradient-to-tr from-black to-blue-900">
      <Router>
        <div className="p-4 flex">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="flex justify-center ml-10">
            {modules.map((module) => (
              <li key={module.name} className="mx-4 text-white">
                <Link to={module.routeProps.path}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Routes>
            {modules.map((module) => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
