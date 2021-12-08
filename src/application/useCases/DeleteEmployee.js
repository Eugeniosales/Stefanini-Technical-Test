'use strict';

module.exports = (employeeId, { employeeRepository }) => {
  return employeeRepository.remove(employeeId);
};