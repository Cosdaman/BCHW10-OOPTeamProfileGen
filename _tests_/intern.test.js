const Intern = require("../lib/intern")

describe("Intern", () => {
    describe("Initialization of Intern", () => {
        it("should return value with what it was initialized with", () => {
            const intern = new Intern("name", "id", "email", "specialproperty")
            expect(intern.school).toEqual("specialproperty")
        });
        it("should return name", () => {
            const intern = new Intern("name", "id", "email", "specialproperty")
            expect(intern.getName()).toEqual("name")
        });
        it("should have 4 keys inside the object", () => {
            const intern = new Intern("name", "id", "email", "specialproperty")
            expect(Object.keys(intern).length).toEqual(4)
        });
    });

    describe("testing functions", () => {
        it("should return intern", () => {
            const intern = new Intern("name", "id", "email", "specialproperty")
            expect(intern.getRole()).toEqual("Intern")
        });
    });
});