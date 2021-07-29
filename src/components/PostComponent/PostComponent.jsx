import React from 'react';
import { Link } from 'react-router-dom';
import './PostComponent.css';

const PostComponent = (props) => {
  // author: "Aleksandar";
  // body: "This is the body of this first post and it have soem text in it";
  // id: 1;
  // title: "This is A first Post";

  return (
    <div className="post_component">
      <h2>{props.title}</h2>
      <h3>
        <i>{props.author}</i>
      </h3>
      <Link to={`/posts/${props.id}`}>View Full Post</Link>
    </div>
  );
};

export default PostComponent;
