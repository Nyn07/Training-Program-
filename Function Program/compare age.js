//function 2 program
const b = Number.parseInt(prompt('Enter age upto which you want to see employee'))
const arr = [
{name : 'Nayan',
age : 26},
{name : 'Nimesh',
age : 55},
{name: 'Jay',
age : 33}]
function umar() {
return arr.filter(a=>a.age<b)}
console.log (umar())