'use strict';

const Employee = require('../../domain/entities/Employee');

module.exports = (age, name, role, { employeeRepository }) => {
  const employee = new Employee(null, age, name, role);
  return employeeRepository.create(employee);
};