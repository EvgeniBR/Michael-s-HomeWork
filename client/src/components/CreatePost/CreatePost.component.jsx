import React, { useState } from "react";
import FormInput from "../FormInput/FormInput.component";
import TextAreaInpit from "../TextAreaInput/TextAreaInput.component";
import axios from "axios";

import "./CreatePost.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";

const CreatePost = ({updatePosts}) => {
  const [currentState, setCurrentState] = useState({
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentState((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/api/posts", currentState)
        .then((res) => {
          setCurrentState({
            email: "",
            message: "",
          });
        });
        updatePosts()
    } catch (e) {
      console.log("error in handle submit of sign up", e);
    }
  };
  const { email, message } = currentState;
  return (
    <div>
      <form className="from-create" onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => handleChange(event)}
          label="Email"
          required
        />
        <TextAreaInpit
          type="textarea"
          name="message"
          value={message}
          onChange={(event) => handleChange(event)}
          label="Message"
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
      </form>
    </div>
  );
};

export default CreatePost;
