// create box structure
var box4 =document.createElement('div');
console.log(box4);
box4.classList.add('box-4');
box4.innerHTML='<h3> Box-4 </h3> <p>Creating by JavaScript</P>';

// which position I will insert
var container = document.getElementById('container');
container.insertAdjacentElement('afterend' , box4);

// Now style this box using js
box4.style.backgroundColor='rgb(200, 40, 100)'
box4.style.textAlign='center'
box4.style.padding='5px 0px'
box4.style.fontSize='18px'
box4.style.color='white'
box4.style.height='max-content'
box4.style.borderRadius='4px'
box4.style.marginTop='10px'

