import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const allComments = this.props.comments.map(c => {
      return <p>{c}</p>
    });
    return (
      <div>{allComments}</div>
    );
  }
}

export default Comment;
