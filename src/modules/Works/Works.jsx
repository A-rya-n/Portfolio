// import React from "react";

const Works = () => {
  return <div className="text-3xl font-bold h-screen px-4">My work</div>;
};

export default {
  routeProps: {
    path: "/Works",
    element: <Works />,
  },
  name: "My work",
};
