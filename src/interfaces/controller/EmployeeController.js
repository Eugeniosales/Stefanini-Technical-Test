const ListEmployees = require('../../application/useCases/ListEmployees');
const FindEmployee = require('../../application/useCases/FindEmployee');
const CreateEmployee = require('../../application/useCases/CreateEmployee');
const UpdateEmployee = require('../../application/useCases/UpdateEmployee');
const RemoveEmployee = require('../../application/useCases/DeleteEmployee');
const EmployeeSerializer = require('../serializers/EmployeeSerializer');
const EmployeeRepository = require('../../application/repositories/EmployeeRepository');
const EmployeeRepositoryDynamo = require('../storage/EmployeeRepositoryDynamo');
const DeleteEmployee = require('../../application/useCases/DeleteEmployee');
const employeeRepository = new EmployeeRepository(new EmployeeRepositoryDynamo());

module.exports = {
    async list () {
      const employees = await ListEmployees({ employeeRepository });

      const employeeSerializer = new EmployeeSerializer();

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            data: employeeSerializer.serializeArray(employees),
            message: 'success.'
          },
        ),
      };
    },

    async find(event) {
      const { id } = event.queryStringParameters;

      const employee = await FindEmployee(id, { employeeRepository });

      const employeeSerializer = new EmployeeSerializer();

      if(employee) {
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              data: employeeSerializer.serializeObject(employee),
              message: 'success.'
            },
          ),
        };
      }

      return {
        statusCode: 404,
        body: JSON.stringify(
          {
            data: {},
            message: 'not found.',
          },
        ),
      };

    },

    async create(event) {
        const { age, name, role } = JSON.parse(event.body);

        const employee = await CreateEmployee(age, name, role, { employeeRepository });

        const employeeSerializer = new EmployeeSerializer();
        
        return {
            statusCode: 200,
            body: JSON.stringify(
              {
                data: employeeSerializer.serializeObject(employee),
                message: 'success.'
              },
            ),
            isBase64Encoded: false
        };
    },

    async update(event) {

      const { id } = event.queryStringParameters;

      const { age, name, role } = JSON.parse(event.body);

      const employee = await UpdateEmployee(id, age, name, role, { employeeRepository });

      const employeeSerializer = new EmployeeSerializer();

      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            data: employeeSerializer.serializeObject(employee),
            message: 'success.'
          },
        ),
      };

    },

    async remove(event) {
      const { id } = event.queryStringParameters;

      const employee = await DeleteEmployee(id, { employeeRepository });

      const statusCode = employee ? 200:404;

      const message = employee ? 'success.':'not found.';

      return {
        statusCode,
        body: JSON.stringify({ data: {}, message })
      };
    }
}
