const React = require('react');
const ReactDom = require('react-dom');
import NumberBaseball from './NumberBaseball';

// ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseball />);
ReactDom.render(<NumberBaseball />, document.querySelector('#root'));