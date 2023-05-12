import line from "../../assets/line.png";
import WordChange from "./WordChange";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="text-3xl font-bold text-white flex flex-col ">
      <div className="text-red-600 mb-1">Hello.</div>
      <div>Welcome to my portfolio.</div>
      <div className="mt-40">
        <div className="text-7xl flex flex-wrap">Think. Make. Solve.</div>
        <div className="mt-6 flex text-2xl">
          <img src={line} className="mr-2" />
          <WordChange />
        </div>
        <div className="mt-5 text-xl">
          Enjoy creating delightful,{" "}
          <span className="text-red-600">human digital experience.</span>
          <span className="block">Here to help.</span>
        </div>
        <Link to="/Who">
          <button className="bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white text-lg px-4 py-1 inline-flex w-fit h-fit shadow-lg mt-6">
            Learn More
          </button>
        </Link>
        <Link to="/Works">
          <button className="bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white text-lg px-4 py-1 inline-flex w-fit h-fit shadow-lg mt-6 ml-10">
            What I Do
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
