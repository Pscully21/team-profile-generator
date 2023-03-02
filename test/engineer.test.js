const Engineer = require("../lib/engineer");
test("creates an engineer object", () => {
    const e = new Engineer("Parker", "1", "test@email.com", "github");
    expect(e.name).toBe("Parker");
    expect(e.id).toBe("1");
    expect(e.email).toBe("test@email.com");
    expect(e.github).toBe("github");
  });
  test("gets engineer's name", () => {
    const result = new Engineer(
      "Parker",
      "1",
      "test@email.com",
      "github"
    ).getName();
    expect(result).toEqual("Parker");
  });
  test("gets engineer's ID", () => {
    const result = new Engineer(
      "Parker",
      "1",
      "test@email.com",
      "github"
    ).getId();
    expect(result).toEqual("1");
  });
  test("gets engineer's email", () => {
    const result = new Engineer(
      "Jack",
      "1",
      "test@email.com",
      "github"
    ).getEmail();
    expect(result).toEqual("test@email.com");
  });
  test("gets engineer's github", () => {
    const result = new Engineer(
      "Parker",
      "1",
      "test@email.com",
      "github"
    ).getGitHub();
    expect(result).toEqual("github");
  });
  test("gets engineer's role", () => {
    const result = new Engineer(
      "Parker",
      "1",
      "test@email.com",
      "github"
    ).getRole();
    expect(result).toEqual("Engineer");
  });