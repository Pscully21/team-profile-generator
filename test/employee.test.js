const Employee = require("../lib/employee");
test("Can instanstiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
    const name = "Parker";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test("Can set id via constructor argument", () => {
    const testValue = "100";
    const e = new Employee("Parker", testValue);
    expect(e.id).toBe(testValue);
});
test("Can set email via constructor argument", () => {
    const testValue = "test@email.com";
    const e = new Employee("Parker", "1", testValue);
    expect(e.email).toBe(testValue);
});
test("Can name via getName()", () => {
    const testValue = "Parker";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
    const testValue = "100";
    const e = new Employee("Parker", testValue);
    expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
    const testValue = "test@email.com";
    const e = new Employee("Parker", "1", testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("gets employee's role", () => {
    const result = new Employee("Parker", "1", "test@gmail.com").getRole();
    expect(result).toEqual("Employee");
  });