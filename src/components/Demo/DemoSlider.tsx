import sliderOne from "../../assets/images/sliderOne.png";
import sliderTwo from "../../assets/images/sliderTwo.png";
import sliderThree from "../../assets/images/sliderThree.png";
import sliderFour from "../../assets/images/sliderFour.png";
import sliderFive from "../../assets/images/sliderFive.png";
import sliderSix from "../../assets/images/sliderSix.png";
import SliderCard from "../Card/SliderCard";

const DemoSlider = () => {
  const Cards = [
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderFour,
    sliderFive,
    sliderSix,
  ];
  return (
    <section className="container">
      <div className="row mb-5">
        <div className="col-12 mb-5">
          <h2 className="heading-primary">Choose Your Fine Tune</h2>
        </div>
        <div className="col-12">
          <div className="row">
            {Cards.map((e, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <SliderCard image={e} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;
