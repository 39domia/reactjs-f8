const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.innerHTML = 'hello guys';
h1.id = 'heading';
h1.className = 'heading h1';
h1.style.color = 'red';
Object.assign(h1.style, {
  backgroundColor: '#EEE'
})
root.appendChild(h1);
console.log(h1);
