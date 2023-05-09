// import React from "react";

const Hero = () => {
  return <h1>Hero</h1>;
};

export default {
  routeProps: {
    path: "/",
    exact: true,
    // component: Hero,
    element: <Hero />,
  },
  name: "Hero",
};
