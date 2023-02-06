//Class Program

let age = parseInt(prompt('Enter age by which you have to filter a array'))
class employee {
  constructor(age) {
    let sor = (emp.sort((a, b) => { return a.salary > b.salary ? 1 : -1 }))
    console.log('Sort on te basis of Salary \n', sor)
    let filt = sor.filter((a) => { return a.age <= age })
    console.log('\nFilter on the basis of Age :-\n', filt)
  }
}
let emp = [{
  name: 'Nayan',
  email: 'nayan@123',
  salary: 9575,
  age: 23
},
{
  name: 'Daksh',
  email: 'Daksh@123',
  salary: 8989,
  age: 52
},
{
  name: 'Ritik',
  email: 'ritik@123',
  salary: 9174,
  age: 32
},
{
  name: 'khushi',
  email: 'khushi@123',
  salary: 9827,
  age: 21
},
{
  name: 'Manali',
  email: 'manali@123',
  salary: 9039,
  age: 43
},
{
  name: 'Taha',
  email: 'taha@123',
  salary: 9752,
  age: 60
},
{
  name: 'Abhishek',
  email: 'abhishek@123',
  salary: 8962,
  age: 55
}]
let empl = new employee(age)