import React, { useEffect, useState } from "react";
import CreatePost from "../../components/CreatePost/CreatePost.component";
import Feed from "../../components/Feed/Feed.component";
import axios from 'axios';

import "./HomePage.styles.scss";
import Searchbox from "../../components/Searchbox/Searchbox.component";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getPosts = async () =>{
    const data = await axios
        .get("http://localhost:8000/api/posts")
        setPosts(data.data)
  }
  useEffect(() => {
    getPosts();      
  }, []);

  const filteredPosts = posts.filter((post) =>
      post.email.toLowerCase().includes(searchField.toLowerCase())
    );
  return (
    <div className="homepage">
      <CreatePost updatePosts={getPosts} />
      <Searchbox
          placeholder="Filter"
          handleChange={(e) => setSearchField(e.target.value)}
        />
      <Feed data={filteredPosts}  />
    </div>
  );
};

export default HomePage;
