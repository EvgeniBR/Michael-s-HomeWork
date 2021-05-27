import React from "react";
import SinglePost from "../SinglePost/SinglePost.component";

import "./Feed.styles.scss";

const Feed = ({ data }) => {

  return (
    <div className="post-list">
      {data.map((post) => {
        return (
          <SinglePost
            key={post._id}
            email={post.email}
            message={post.message}
          />
        );
      })}
    </div>
  );
};

export default Feed;
