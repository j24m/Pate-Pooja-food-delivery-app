import GirlThinkingAboutFood from "../assets/eating a variety of foods.gif";
import Header from "./Header";
import Footer from "./Footer";
function LoaderAnimation() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-primary">
        <img
          className="h-80 shadow-lg shadow-black rounded-full"
          src={GirlThinkingAboutFood}
          alt=""
        />
      </div>
    </>
  );
}

export default LoaderAnimation;
