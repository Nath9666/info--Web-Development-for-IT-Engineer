const name = () => {
  return "John Doe";
};

var user = {
  name: "John Doe",
  age: 25,
  sex: 0,
  sayHi: function () {
    return "Hello!";
  },
};

let users = [];
// copy user but change the name
var user2 = { ...user, name: "Jane Doe" };
users.push(user2);
var user2 = { ...user, name: "Wily Mit", sex: 1 };
users.push(user2);
var user2 = { ...user, name: "A" };
user2.age = 10;

users.push(user);
users.push(user2);

console.log(users);
users.sort((user1, user2) => user1.sex - user2.sex);
console.log(users);
