import { motion } from "framer-motion";
import MyPic from "./MyPic";
import AboutContent from "./AboutContent";
import { TypeAnimation } from "react-type-animation";

const Who = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <div className=" h-screen px-4">
        <div className="bg-slate-800 mx-auto h-fit rounded-xl shadow-xl flex-col p-5">
          <div className="w-full flex flex-grow">
            <div className="mx-auto text-4xl text-white font-medium p-5">
              <TypeAnimation
                sequence={["Somthing about me."]}
                speed={10}
                cursor={false}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-2/5 flex-grow justify-center items-center flex ">
              <MyPic />
            </div>
            <div className="w-3/4 pr-24 flex-grow">
              <AboutContent />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default {
  routeProps: {
    path: "/Who",
    element: <Who />,
  },
  name: "About me",
};
