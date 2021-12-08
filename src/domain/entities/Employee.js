class Employee 
{
  constructor(id = null, age, name, role) {
    this.id = id;
    this.age = age;
    this.name = name;
    this.role = role;
  }
};

module.exports = Employee;