const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('add user to userController', () => {
  let user = new User(2226, "Paula", "paula@ramos.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(2226, "Paula", "paula@ramos.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('add user to userController', () => {
  let user = new User(7896, "Laura", "laura@lozda.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('Find user', () => {
  let user = new User(7896, "Laura", "laura@lozda.org");
  let email = "laura@lozda.org";
  userController.add(user);
  userController.findByEmail(email);
  let emails = userController.users.map(u => u.email);
  expect(emails).toContain(user.email);
});

