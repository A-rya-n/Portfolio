import line from "../../assets/line.png";

const Content = () => {
  return (
    <div className="text-3xl font-bold text-white flex flex-col ">
      <div className="text-red-600 mb-1">Hello.</div>
      <div>Welcome to my portfolio.</div>
      <div className="mt-40">
        <div className="text-7xl flex flex-wrap">Think. Make. Solve.</div>
        <div className="mt-6 flex text-2xl">
          <img src={line} className="mr-2" />
          <span>What we do</span>
        </div>
        <div className="mt-1 text-xl">
          Enjoy creating delightful,{" "}
          <span className="text-red-600">human digital experience.</span>
        </div>
        <button className="bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white text-lg px-4 py-1 inline-flex w-fit h-fit shadow-lg mt-6">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Content;
