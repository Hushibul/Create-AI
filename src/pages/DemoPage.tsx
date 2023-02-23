import DemoHeading from "../components/Demo/DemoHeading";
import DemoMass from "../components/Demo/DemoMass";
import DemoSlider from "../components/Demo/DemoSlider";
import Navbar from "../components/Navbar/Navbar";

const DemoPage = () => {
  return (
    <>
      <Navbar />
      <DemoHeading />
      <DemoSlider />
      <DemoMass />
    </>
  );
};

export default DemoPage;
