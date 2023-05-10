// import React from "react";

const Hero = () => {
  return <div className="text-3xl font-bold h-screen px-4">Hello</div>;
};

export default {
  routeProps: {
    path: "/",
    exact: true,
    element: <Hero />,
  },
  name: "Hello",
};
