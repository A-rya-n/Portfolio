import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "./ThemeSlice";

const ThemeToggle = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    setActive((prev) => !prev);
    dispatch(toggleTheme());
  }

  return (
    <div className=" bg-black p-2 w-fit h-fit rounded-xl shadow-md">
      <button
        type="button"
        className={`bg-blue-950 rounded-full p-0 w-12 h-6 focus:outline-none ${
          active ? "bg-blue-400" : null
        }`}
        onClick={handleClick}
      >
        <span
          className={`bg-white rounded-full shadow-md block w-5 h-5 mx-1  transform transition-transform duration-300 ease-in-out ${
            active ? "translate-x-full" : null
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ThemeToggle;
