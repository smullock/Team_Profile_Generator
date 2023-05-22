const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "smullock";
    const employeeInstance = new Engineer("sarah", 2, "sarah@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "smullock";
    const employeeInstance = new Engineer("sarah", 2, "sarah@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("sarah", 2, "sarah@gmail.com", "smullock");
    expect(employeeInstance.getRole()).toBe(returnValue);
});