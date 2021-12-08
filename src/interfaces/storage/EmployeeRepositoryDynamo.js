const EmployeeModel = require('../../infrastructure/database/models/Employee');
const Employee = require('../../domain/entities/Employee');

class EmployeeRepositoryDynamo {
    constructor() {
        this.model = EmployeeModel;
    }

    async list () {
        const employees = await this.model.scan().exec();

        return employees.map(employee => new Employee(employee.id, employee.age, employee.name, employee.role));
    }

    async find(employeeId) {
        const employee = await this.model.get(employeeId);

        if(employee) {
            return new Employee(employee.id, employee.age, employee.name, employee.role);
        }

        return false;
    }

    async create(employeeEntity) {
        const { id, age, name, role } = employeeEntity;
        
        const employee = await this.model.create({ id, age, name, role });

        return new Employee(employee.id, employee.age, employee.name, employee.role);
    }

    async update(employerId, employeeEntity) {
        const { age, name, role } = employeeEntity;

        const employee = await this.model.update(employerId, { age, name, role });

        return new Employee(employee.id, employee.age, employee.name, employee.role);
    }

    async remove(employeeId) {

        const employee = await this.model.get(employeeId);

        if(employee) {
            await this.model.delete(employeeId);
        }
        
        return employee;
    }
}

module.exports = EmployeeRepositoryDynamo;