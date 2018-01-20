import React, {Component} from 'react';

class Author extends Component {
  render() {
    return (
      <div>
        <h3>Written By:</h3>
        <em>{this.props.author}</em>
      </div>
    );
  }
}

export default Author;
