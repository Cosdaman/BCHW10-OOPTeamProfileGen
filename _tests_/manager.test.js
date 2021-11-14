const Manager = require("../lib/manager")

describe("Manager", () => {
    describe("Initialization of Manager", () => {
        it("should return value with what it was initialized with", () => {
            const manager = new Manager("name", "id", "email", "github")
            expect(manager.name).toEqual("name")
        });
        it("should return name", () => {
            const manager = new Manager("name", "id", "email")
            expect(manager.getName()).toEqual("name")
        });
    });

    describe("testing functions", () => {
        it("should return manager", () => {
            const manager = new Manager("name", "id", "email", "github")
            expect(manager.getRole()).toEqual("Manager")
        });
    });
});