'use strict';

module.exports = ({ employeeRepository }) => {
  return employeeRepository.list();
};