//sorting with function
const emp = [{
  name: 'Nayan',
  email: 'nayan@123',
  salary: 9575
},
{
  name: 'Daksh',
  email: 'Daksh@123',
  salary: 8989
},
{
  name: 'Ritik',
  email: 'ritik@123',
  salary: 9174
},
{
  name: 'khushi',
  email: 'khushi@123',
  salary: 9827
},
{
  name: 'Manali',
  email: 'manali@123',
  salary: 9039
},
{
  name: 'Taha',
  email: 'taha@123',
  salary: 9752
},
{
  name: 'Abhishek',
  email: 'abhishek@123',
  salary: 8962
}]
function sortEmp() {
  return emp.sort((a, b) => a.salary > b.salary ? 1 : -1)
}
console.log(sortEmp())