// how to create element
var newElement = document.createElement('div');
console.log(newElement);

var paraElement = document.createElement('p');
// console.log(paraElement);

// paraElement.innerText = 'My name is mehedi hasan'

// or 
paraElement.textContent = 'Hi this is mehedi'

// how to insert  inner html
newElement.innerHTML ='<h2>kno ato jontrona vai </h2> <p>ami pari na soite</p> <div> <p>kno lage </p> </div> ';


// how to show inner HTML
// var container = document.getElementById('container')
// var result = container.innerHTML;
// console.log(result);


// how to add class in element
newElement.classList.add('box-4');

// add many class 
newElement.classList += ' name  valolage-na';
// checked
// console.log(newElement.classList);


// how to remove class
newElement.classList.remove('valolage-na');

// Add and remove and modify attribute 
// add attribute
newElement.setAttribute('data-attr', 'something');

// remove attribute
newElement.removeAttribute('data-attr')

