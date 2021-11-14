const Intern = require("../lib/intern")

describe("Intern", () => {
    describe("Initialization of Intern", () => {
        it("should return value with what it was initialized with", () => {
            const intern = new Intern("name", "id", "email", "github")
            expect(intern.name).toEqual("name")
        });
        it("should return name", () => {
            const intern = new Intern("name", "id", "email")
            expect(intern.getName()).toEqual("name")
        });
    });

    describe("testing functions", () => {
        it("should return intern", () => {
            const intern = new Intern("name", "id", "email", "github")
            expect(intern.getRole()).toEqual("Intern")
        });
    });
});