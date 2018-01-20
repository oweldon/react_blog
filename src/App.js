import React, { Component } from 'react';
import Author from './Author.js';
import Comment from "./Comment.js";
import './App.css';

class Post extends Component {
  render() {
    const allPosts = this.props.post.map(p => {
      return <div>
        <h1 className="Title">{p.title}</h1>
        <Author author={p.author} />
        <p className="Post-intro">
          {p.body}
        </p>
        <h3> Comments:</h3>
        <Comment comments={p.comments} />
      </div>
    });
    return (
      <div className="Post">
        <header className="Post-Header">
          <p className="Post-intro">
          Welcome to the best dino blog
          </p>
          {allPosts}
        </header>

      </div>
    );
  }
}

export default Post;
