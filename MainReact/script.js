// DOM
const root = document.getElementById('root');
const divDOM = document.createElement('div');
divDOM.className = 'heading';
const pDOM = document.createElement('p');
pDOM.innerHTML = 'Hello guys';
divDOM.appendChild(pDOM);
root.appendChild(divDOM);
// React
const h1React = React.createElement('h1', {
  title: 'Hello',
  className: 'heading'
}, 'Hello guys react');

const divReact = React.createElement('div', {
  className: 'post-item'
}, React.createElement('h2', {
  title: 'Learn react basic at F8'
}, 'Learn reactjs'), 
React.createElement('p', null, 'Learn reactjs from basic to advanced')
);

console.log(divReact);