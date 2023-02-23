import Classes from "./RegistrationForm.module.scss";
import { useState } from "react";

const RegistrationForm = () => {
  const [title, setTitle] = useState("");

  return (
    <section className="container">
      <div className={`${Classes.regForm}`}>
        <h2 className="heading-primary">New Avatar Engine</h2>

        <div className={`${Classes.form} row`}>
          <div className="col-12 mt-2 col-lg-6">
            <label className="labels mb-2" htmlFor="title">
              Title:
            </label>
            <input type="text" name="title" />
          </div>
          <div className="col-12 mt-2 col-lg-6">
            <label className="labels mb-2" htmlFor="title">
              Class Name:
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g: woman/ man/ book/ dog / car / style"
            />
          </div>
          <div className="col-12 my-5">
            <label className="labels mb-2" htmlFor="title">
              Token:
            </label>
            <input type="text" name="title" placeholder="cvc/ abc/ etc" />
          </div>
          <div className="col-12">
            <label className="labels mb-2" htmlFor="title">
              Images:
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="my-5 d-flex justify-content-end">
            <button className="btn-primary">Create Avatar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
