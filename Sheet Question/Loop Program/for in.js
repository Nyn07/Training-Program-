/* loop program
for in loop */
const employeeDetails = {
  name : 'Nayan Mehta',
  email : 'nayanmehta0709@gmail.com',
  Age : 22,
  Address : '1437,B Scheme No. 71',
  phoneNo : 9575260083,
  Gender : 'Male',
  isMarried : false
}
for (let a in employeeDetails)
  console.log('Employee ' + a + ' : ' +employeeDetails[a])