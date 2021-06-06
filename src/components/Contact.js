import React, { useState } from "react";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [canSubmit, setCanSubmit] = useState(false);

  const changeHandler = (e) => {
    setInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div id="contact"></div>
      <div className="contact-container section-container">
        <h2>Contact</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
          />
          <label htmlFor="name">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={inputs.subject}
            onChange={changeHandler}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            type="text"
            name="message"
            value={inputs.message}
            onChange={changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
