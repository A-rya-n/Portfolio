import { motion } from "framer-motion";
import Form from "./Form";
import contactImg from "../../assets/contact.jpg";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = contactImg;
    image.onload = () => {
      setloaded(true);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
    >
      <div className="h-screen px-4">
        <div className="bg-slate-800 mx-auto w-3/4 h-3/5 rounded-xl shadow-xl flex">
          <div className=" w-2/3 rounded-xl">
            <Form />
          </div>
          <div className=" w-1/3">
            {loaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.0 }}
                className="h-full"
              >
                <img src={contactImg} className="h-full rounded-xl" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default {
  routeProps: {
    path: "/Contacts",
    element: <Contacts />,
  },
  name: "Contact",
};
