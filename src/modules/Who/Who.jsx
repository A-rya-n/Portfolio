// import React from "react";

const Who = () => {
  return <div className="text-3xl font-bold h-screen px-4">About Me</div>;
};

export default {
  routeProps: {
    path: "/Who",
    element: <Who />,
  },
  name: "About me",
};
