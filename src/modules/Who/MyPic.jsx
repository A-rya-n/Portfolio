import Me from "../../assets/Me.jpg";

const MyPic = () => {
  return (
    <img
      src={Me}
      alt="My profile picture"
      className="w-96 h-80 rounded-full mx-auto p-3 border"
    />
  );
};

export default MyPic;
