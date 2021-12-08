const Employee = require('../../src/domain/entities/Employee');
const EmployeeRepository = require('../../src/application/repositories/EmployeeRepository');
const UpdateEmployee = require('../../src/application/useCases/UpdateEmployee');
const mockEmployeeRepository = new EmployeeRepository();

test('should update an employee by the id with a new payload', async() => {
    const targetEmployee = new Employee('123', 30, 'brad', 'engineer');
    
    mockEmployeeRepository.update = jest.fn(() => targetEmployee);

    const employee = await UpdateEmployee('123', 30, 'brad', 'engineer', { employeeRepository: mockEmployeeRepository });

    expect(mockEmployeeRepository.update).toHaveBeenCalledWith('123', new Employee('123', 30, 'brad', 'engineer'));
    expect(employee).toEqual(targetEmployee);
});