const Manager = require("../lib/manager")
const manager = new Manager()

describe('getOfficeNumber', () =>{
    it("should prompt the user for an office number", () => {
        expect(manager.getGithub("1234").toBe("1234"))
    })
})


describe('getRole', () =>{
    it("should return the role Manager", () => {
        expect(manager.getRole().toBe("Manager"))
    })
})