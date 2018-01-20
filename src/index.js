import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

 var post = [{
  title: "I love Dinosaurs",
  author: "Dino Dude",
  body: "Dinosaurs are the most majestic creatures to ever roam this planet! Dinosaurs are real!",
  comments: ["You're so right!", "Dino's for life!", "Best blog ever!"],
}, {
  title: "Another Post",
  author: "Someone Else",
  body: "I'm just happy to be here. Writing about life.",
  comments: ["this is so deep!", "i'm proud of you!", "Best blog ever!"]
}];

ReactDOM.render(< Post post={post} />, document.getElementById('root'));
registerServiceWorker();
