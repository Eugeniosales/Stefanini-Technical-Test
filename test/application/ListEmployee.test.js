const Employee = require('../../src/domain/entities/Employee');
const EmployeeRepository = require('../../src/application/repositories/EmployeeRepository');
const ListEmployees = require('../../src/application/useCases/ListEmployees');
const mockEmployeeRepository = new EmployeeRepository();

test('should list all employees', async () => {

    const targetEmployee1 = new Employee('123', 30, 'brad', 'engineer');
    const targetEmployee2 = new Employee('456', 32, 'lewis', 'analyst');

    mockEmployeeRepository.list = jest.fn(() => [targetEmployee1, targetEmployee2]);

    const employees = await ListEmployees({ employeeRepository: mockEmployeeRepository });

    expect(employees).toEqual([targetEmployee1, targetEmployee2]);
});