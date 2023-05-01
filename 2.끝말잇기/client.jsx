const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay.jsx');

ReactDom.render(<WordRelay />, document.querySelector('#root')); // 리액트 17버전, 18버전으로 바꾸기