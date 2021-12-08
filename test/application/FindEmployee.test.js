const Employee = require('../../src/domain/entities/Employee');
const EmployeeRepository = require('../../src/application/repositories/EmployeeRepository');
const FindEmployee = require('../../src/application/useCases/FindEmployee');
const mockEmployeeRepository = new EmployeeRepository();

test('shold find an employee by the id', async() => {
    
    const targetEmployee = new Employee('123', 30, 'brad', 'engineer');

    mockEmployeeRepository.find = jest.fn(() => targetEmployee);

    const employee = await FindEmployee('123', { employeeRepository: mockEmployeeRepository });

    expect(mockEmployeeRepository.find).toHaveBeenCalledWith('123');
    expect(employee).toEqual(targetEmployee);

});