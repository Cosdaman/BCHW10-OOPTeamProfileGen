const Manager = require("../lib/manager")

describe("Manager", () => {
    describe("Initialization of Manager", () => {
        it("should return value with what it was initialized with", () => {
            const manager = new Manager("name", "id", "email", "specialproperty")
            expect(manager.officeNum).toEqual("specialproperty")
        });
        it("should return name", () => {
            const manager = new Manager("name", "id", "email","specialproperty")
            expect(manager.getName()).toEqual("name")
        });
        it("should have 4 keys inside the object", () => {
            const manager = new Manager("name", "id", "email","specialproperty")
            expect(Object.keys(manager).length).toEqual(4)
        });
    });

    describe("testing functions", () => {
        it("should return manager", () => {
            const manager = new Manager("name", "id", "email", "specialproperty")
            expect(manager.getRole()).toEqual("Manager")
        });
    });
});