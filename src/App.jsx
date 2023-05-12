import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Logo from "./Components/Logo";
import modules from "./modules";
import gitImg from "./assets/github-icon.png";

function App() {
  return (
    <div className="box-border m-0 bg-gradient-to-tr from-black to-blue-900 ">
      <Router>
        <div className="py-4 px-20 m-0 flex justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="flex justify-center ml-10 ">
            {modules.map((module) => (
              <li key={module.name} className="mx-6 text-white">
                <Link to={module.routeProps.path}>{module.name}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white px-4 py-1 flex w-fit h-fit shadow-lg">
            <img src={gitImg} alt="Checkout my github!" className="mr-2" />
            Github
          </button>
        </div>
        <div className="mt-4 px-20">
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
