'use strict';

module.exports = (employeeId, { employeeRepository }) => {
  return employeeRepository.find(employeeId);
};