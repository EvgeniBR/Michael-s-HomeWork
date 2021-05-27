import React from "react";
import Gravatar from "react-gravatar";

import "./SinglePost.styles.scss";

const SinglePost = ({ email, message }) => {
  
  return (
    <div className="post-container">
      <div className="post-img">
        <Gravatar email={email} size={100} />
      </div>
      <div className="post-data">
        <div className="email">{email}</div>
        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default SinglePost;
