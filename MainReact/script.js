// DOM
const root = document.getElementById('root');
const divDOM = document.createElement('div');
divDOM.className = 'heading';
const pDOM = document.createElement('p');
pDOM.innerHTML= 'Hello guys';
divDOM.appendChild(pDOM);
root.appendChild(divDOM);
// React
const h1React = React.createElement('h1',{
  title: 'Hello',
  className: 'heading'
}, 'Hello guys react'
);

