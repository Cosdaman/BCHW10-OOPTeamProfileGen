const Engineer = require("../lib/engineer")

describe("Engineer", () => {
    describe("Initialization of Engineer", () => {
        it("should return value with what it was initialized with", () => {
            const engineer = new Engineer("name", "id", "email", "github")
            expect(engineer.name).toEqual("name")
        });
        it("should return name", () => {
            const engineer = new Engineer("name", "id", "email","github")
            expect(engineer.getName()).toEqual("name")
        });
        it("should have 4 keys inside the object", () => {
            const engineer = new Engineer("name", "id", "email","github")
            expect(Object.keys(engineer).length).toEqual(4)
        });
    });

    describe("testing functions", () => {
        it("should return engineer", () => {
            const engineer = new Engineer("name", "id", "email", "github")
            expect(engineer.getRole()).toEqual("Engineer")
        });
    });
});