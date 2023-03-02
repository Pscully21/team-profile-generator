const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
test("Can set office number via construction argument", () => {
    const testValue = 100; 
    const e = new Manager("Parker", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager"; 
    const e = new Manager("Foo", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(testValue);
});
test("Can get office number via getOffice()", () => {
    const testValue = 100; 
    const e = new Manager("Foo", 1, "test@email.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
