class EmployeeRepository 
{
    constructor(repository) {
      this.repository = repository;
    }
  
    list() {
      return this.repository.list();
    }

    find(employerId) {
      return this.repository.find(employerId);
    }

    create(employerEntity) {
      return this.repository.create(employerEntity);
    }
  
    update(employerId, employerEntity) {
      return this.repository.update(employerId, employerEntity);
    }
  
    remove(employerId) {
      return this.repository.remove(employerId);
    }
  
  };

module.exports = EmployeeRepository;