const Engineer = require("../lib/engineer")
const engineer = new Engineer()

describe('getGithub', () =>{
    it("should ask the user for a Github name", () => {
        expect(engineer.getGithub("markymark").toBe("markymark"))
    })
})


describe('getRole', () =>{
    it("should return the role Engineer", () => {
        expect(engineer.getRole().toBe("Engineer"))
    })
})