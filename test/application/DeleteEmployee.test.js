const EmployeeRepository = require('../../src/application/repositories/EmployeeRepository');
const DeleteEmployee = require('../../src/application/useCases/DeleteEmployee');
const mockEmployeeRepository = new EmployeeRepository();

test('shold remove an employee by the id', async() => {
    mockEmployeeRepository.remove = jest.fn(() => true);

    await DeleteEmployee('123', { employeeRepository: mockEmployeeRepository });

    expect(mockEmployeeRepository.remove).toHaveBeenCalledWith('123');
});