import Header from "../components/Header";
import OnTheWay from "../assets/Take Away-amico.svg";
import OrderFood from "../assets/Order food-amico.svg";
import DoorStepDelivery from "../assets/Take Away-cuate.svg";
import LandingPageSection from "../components/LandingPageSection";
import Footer from "../components/Footer";

function LandingPage() {
  let landingPageSectionData = [
    {
      heading: "Find Favourite Restaurants and discover new ones from our App.",
      description:
        "Pate Pooja is Raipur's best food delivery app with an amazing user experience.",
      linkText: "Explore",
      image: OrderFood,
    },
    {
      heading: "Receive your food at your doorstep.",
      description:
        "We will Deliver your food fresh and quick at your door step with our fast bike and feedback service.",
      image: DoorStepDelivery,
    },
    {
      heading: "Your Favourite Food is on the way!",
      description: "Get your food in 30 minutes from placing the order.",
      linkText: "Track Order",
      image: OnTheWay,
    },
  ];
  return (
    <div className="p-10 bg-primary">
      <Header />
      {landingPageSectionData.map((data, index) => {
        return (
          <LandingPageSection
            key={index}
            heading={data.heading}
            description={data.description}
            linkText={data.linkText}
            image={data.image}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default LandingPage;
