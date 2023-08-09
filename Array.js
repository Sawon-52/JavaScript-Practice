var studentName =['amin', 'delwar', 'tomas', 'pias' , 'pial'];
//show all element in array
console.log(studentName);

//how to get element using indexing number;
var showValue = studentName[3];
console.log(showValue + ' is awosome student');

// how to set element with index number.
studentName[3] = 'Rakib';
console.log(studentName);

//how to know array length 
var studentNameLength = studentName.length;
console.log(studentNameLength);

// how to access all element in array
for(var i = 0; i<studentNameLength; i++){
    console.log('Name:'+ studentName[i]);
}

// how add items in array but last position
studentName.push('Mehedi');
console.log(studentName);

// add items in array but first position
studentName.unshift('Soaibur');
console.log(studentName);

//remove end element
studentName.pop();
console.log(studentName);

// remove start items
studentName.shift();
console.log(studentName);

// how to know index number of any items if items is given
var indexSearch = studentName.indexOf('amin');
console.log(indexSearch);


// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// Main array k change kore dai

// splice(start)
// splice(start, deleteCount)
// splice(kob,koita delete korbo, item0 add korbo)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* … ,*/ itemN)

var monthName = ['jan', 'march', 'april', 'jun'];
console.log(monthName);

var result = monthName.splice(1,0,'Feb');
console.log(monthName);

var result = monthName.splice(4,0,'May');
console.log(monthName);












