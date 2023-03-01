// Promise Sorting Program 
let i = 0
const employeeDetails = [{
  name: 'Nayan',
  email: 'nayan@123',
  age: 23,
  address: 'Gumasta Nagar',
  phoneNo: 9575260083,
  gender: 'male',
  isMarried: false
},
{
  name: 'Daksh',
  email: 'Daksh@123',
  age: 60,
  address: 'Gopur',
  phoneNo: 8989280208,
  gender: 'male',
  isMarried: true
},
{
  name: 'Ritik',
  email: 'ritik@123',
  age: 50,
  address: 'Sudama Nagar',
  phoneNo: 9174333707,
  gender: "male",
  isMarried: true
},
{
  name: 'Khushi',
  email: 'khushi@123',
  age: 22,
  address: '6 Bungalow',
  phoneNo: 9827209334,
  gender: 'female',
  isMarried: false
},
{
  name: 'Manali',
  email: 'manali@123',
  age: 55,
  address: 'Sudama Nagar B',
  phoneNo: 9039060160,
  gender: 'female',
  isMarried: true
},
{
  name: 'Taha',
  email: 'taha@123',
  age: 36,
  address: 'Moti Tabela',
  phoneNo: 9752844239,
  gender: 'female',
  isMarried: false
},
{
  name: 'Abhishek',
  email: 'abhishek@123',
  age: 28,
  address: 'Ratlam',
  phoneNo: 8962146566,
  gender: 'male',
  isMarried: true
}]
function arr(employeeDetails, count) {
  return new Promise((resolve, reject) => {
    count = i
    if (i <= employeeDetails.length) {
      let a = employeeDetails.sort ((a,b)=> a.name > b.name ? 1 : -1)
      resolve(employeeDetails[i])
    }
    else {
      reject(new Error())
    }
    i = count + 1
  })
}
setTimeout(() => {
  arr(employeeDetails).then((value) => {
      console.log([value])
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log[value])
      return (arr(employeeDetails))
    })
    .then((value) => {
      (console.log([value]))
      return (arr(employeeDetails))
    })
    .catch((Error) => { console.log('Error occured : No value to return you have crossed the length of array') })
}, Math.random() * 3 * 1000)