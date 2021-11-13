class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }


}

let testEmp = new Employee("name", "1231", "name@email.com")

console.log(testEmp.getName())
console.log(testEmp.getId())
console.log(testEmp.getEmail())
console.log(testEmp.getRole())