import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Logo from "./Components/Logo";
import modules from "./modules";
import FindMe from "./Components/FindMe";
import { useSelector } from "react-redux";
import ThemeToggle from "./Components/ThemeToggle";
import { motion } from "framer-motion";

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div
      className={`box-border m-0 ${
        isDarkMode
          ? "bg-gradient-to-tr from-black to-blue-900"
          : "bg-gradient-to-tr from-black to-red-600"
      }`}
    >
      <Router>
        <div className="py-4 px-20 m-0 flex justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="flex justify-center ml-10 ">
            {modules.map((module) => (
              <li key={module.name} className="mx-6 text-white">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                >
                  <Link to={module.routeProps.path}>{module.name}</Link>
                </motion.div>
              </li>
            ))}
          </ul>
          <FindMe />
          <ThemeToggle />
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

// 192.168.1.10
