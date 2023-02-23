import elf from "../../assets/images/elf.png";
import eye from "../../assets/images/eye.png";
import flowers from "../../assets/images/flowers.png";
import godOfWar from "../../assets/images/god-of-war.png";
import leeSin from "../../assets/images/lee-sin.png";
import littlePrincess from "../../assets/images/little-princess.png";
import chineseHut from "../../assets/images/chinese hut.png";
import smoking from "../../assets/images/smoking.png";
import humanoidGirl from "../../assets/images/humanoid-girl.png";
import tea from "../../assets/images/tea.png";
import cheerLeaderMan from "../../assets/images/cheerleader-man.png";
import car from "../../assets/images/car.png";
import botKitty from "../../assets/images/bot-kitty.png";
import anubis from "../../assets/images/anubis.png";
import devil from "../../assets/images/devil.png";
import suit from "../../assets/images/tea.png";
import turtle from "../../assets/images/turtle.png";

const DemoMass = () => {
  const Images = [
    elf,
    eye,
    flowers,
    godOfWar,
    leeSin,
    littlePrincess,
    chineseHut,
    smoking,
    humanoidGirl,
    tea,
    cheerLeaderMan,
    car,
    botKitty,
    anubis,
    devil,
    suit,
    turtle,
  ];
  return (
    <section className="container">
      <div>
        <h2 className="heading-primary mb-5">Choose your demo style</h2>
        <p className="labels">
          Search millions of art images by AI models like DALL-E, Stable
          Diffusion, Midjourney...
        </p>
      </div>

      <div className="masonry-gallery">
        {Images.map((e, i) => (
          <div className="masonry-gallery__item" key={i}>
            <img src={e} alt="Item" className="img-fluid" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoMass;
