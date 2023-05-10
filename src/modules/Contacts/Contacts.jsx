const Contacts = () => {
  return (
    <div className="text-3xl text-white font-bold h-screen px-4">
      Contact Me
    </div>
  );
};

export default {
  routeProps: {
    path: "/Contacts",
    element: <Contacts />,
  },
  name: "Contact",
};
