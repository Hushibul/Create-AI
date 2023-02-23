import avatarBackground from "../../assets/images/avatarBackground.png";
import avatarOne from "../../assets/images/avatarOne.png";
import avatarTwo from "../../assets/images/avatarTwo.png";

import Classes from "./Header.module.scss";

const Header = () => {
  return (
    <section className="container-fluid">
      <div className={`${Classes.header}`}>
        <div className={`${Classes.heading}`}>
          <h1 className="row">
            <span className={`${Classes.heading__primary}`}>Create</span>
            <span className={`${Classes.heading__bold} col-6`}>Ai</span>
            <span className={`${Classes.heading__secondary} col-6`}>
              your own image Avatar
            </span>
          </h1>
          <button className={`${Classes.heading__btn}`}>
            Create New Avatar
          </button>
        </div>
        <div className={`${Classes.avatars}`}>
          <div className={`${Classes.avatarBackgrond}`}>
            <img src={avatarBackground} alt="" />
          </div>
          <div className={`${Classes.avatarOne}`}>
            <img src={avatarOne} alt="" />
          </div>
          <div className={`${Classes.avatarTwo}`}>
            <img src={avatarTwo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
