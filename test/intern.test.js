const Intern = require("../lib/intern");
test("can set school via constructor", () => {
    const testValue = "University of Arizona";
    const e = new Intern("Parker", "1", "test@email.com", "University of Arizona");
    expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Parker", "1", "test@email.com", testValue);
    expect(e.getRole()).toBe(testValue);
});
test("gets the intern's school", () => {
    const result = new Intern(
      "Parker",
      "1",
      "test@gmail.com",
      "University of Arizona"
    ).getSchool();
    expect(result).toEqual("University of Arizona");
  });