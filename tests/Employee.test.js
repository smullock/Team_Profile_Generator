const Employee = require("../lib/employee")
const employee = new Employee()

describe('getName', () =>{
    it("should ask the user for their name", () => {
        expect(employee.getName("Sarah").toBe("Sarah"))
    })
})


describe('getId', () =>{
    it("should return the role ID", () => {
        expect(employee.getId("111").toBe("111"))
    })
})

describe('getEmail', () =>{
    it("should return the emaiil address of employee", () => {
        expect(employee.getEmail("sarah@mullock.com").toBe("sarah@mullock.com"))
    })
})