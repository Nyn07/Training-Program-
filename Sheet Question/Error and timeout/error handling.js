//Error Handling Program
let newArr = []
let arr = [ {
    name: 'Nayan',
    age: 22
  },
  {
    name : 'Nimesh',
    age : 23
  }]
for (i = 0; i < arr.length; i++) {
  let a = arr[i].age
try {
    const c = (a / null)
     
  console.log ('The age of '+ (i+1) +' employee is ' + a)
  }
  catch (error) {
     console.log(''+ error)
  }}



