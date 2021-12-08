'use strict';

const Employee = require('../../domain/entities/Employee');

module.exports = (id, age, name, role, { employeeRepository }) => {
  const employee = new Employee(id, age, name, role);
  return employeeRepository.create(employee);
};