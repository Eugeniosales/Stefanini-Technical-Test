const Employee = require('../../src/domain/entities/Employee');
const EmployeeRepository = require('../../src/application/repositories/EmployeeRepository');
const CreateEmployee = require('../../src/application/useCases/CreateEmployee');
const mockEmployeeRepository = new EmployeeRepository();

test('should create an new employee', async () => {
    const createdEmployee = new Employee('id', 25, 'brad', 'engineer');
    mockEmployeeRepository.create = jest.fn(() => createdEmployee);

    const employee = await CreateEmployee('id', 25, 'brad', 'engineer', { employeeRepository: mockEmployeeRepository });

    expect(mockEmployeeRepository.create).toHaveBeenCalledWith(new Employee('id', 25, 'brad', 'engineer'));
    expect(employee).toEqual(createdEmployee);
});