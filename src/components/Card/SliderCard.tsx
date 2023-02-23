import Classes from "./SliderCard.module.scss";

const SliderCard = ({ image }) => {
  return (
    <div className={`${Classes.sliderCard} rounded overflow-hidden mt-4`}>
      <img src={image} alt="Slider One" style={{ width: "100%" }} />
      <div className={Classes.sliderCard__heading}>
        <div className="d-flex justify-content-between mx-2">
          <h5 className="ps-2 py-2">Braincraft</h5>
          <button className="mt-2">cvc</button>
        </div>
        <p className="ps-2 pb-2 mb-0 ms-2">Name: Woman</p>
      </div>
    </div>
  );
};

export default SliderCard;
