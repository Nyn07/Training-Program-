class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}
const employee1 = new Employee("Nayan", 1, "nayan@123");
const employee2 = new Employee("Nimesh", 2, "nimesh@123");

console.log([employee1.getName()+','+ employee1.getId()+ ','+ employee1.getEmail()]); 
console.log([employee2.getName()+','+ employee2.getId()+ ','+ employee2.getEmail()]); 
