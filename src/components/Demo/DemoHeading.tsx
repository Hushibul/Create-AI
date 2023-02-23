import { FiArrowLeft } from "react-icons/fi";

import sliderOne from "../../assets/images/sliderOne.png";
import sliderTwo from "../../assets/images/sliderTwo.png";
import sliderThree from "../../assets/images/sliderThree.png";
import sliderFour from "../../assets/images/sliderFour.png";
import sliderFive from "../../assets/images/sliderFive.png";
import sliderSix from "../../assets/images/sliderSix.png";

const DemoHeading = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center gap-5">
          <FiArrowLeft className="icon-large pb-2" />
          <h2 className="heading-primary">Alexgender Profile</h2>
        </div>
        <div className="col-12 my-5">
          <label className="labels mb-3" htmlFor="title">
            Token:
          </label>
          <input type="text" name="title" placeholder="cvc/ abc/ etc" />
        </div>
        <div className="col-12 d-flex justify-content-end">
          <button className="btn-primary">Generate Image</button>
        </div>
      </div>
    </section>
  );
};

export default DemoHeading;
