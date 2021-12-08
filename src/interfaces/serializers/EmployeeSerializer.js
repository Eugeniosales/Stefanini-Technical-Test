'use strict'

class EmployeeSerialize
{
    serializeObject(employee) {
        return {
            id: employee.id,
            age: employee.age,
            name: employee.name,
            role: employee.role
        }
    }

    serializeArray(employees) {
        return employees.map(employee => this.serializeObject(employee));
    }
}

module.exports = EmployeeSerialize;