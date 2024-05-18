// object literals


const mySym = Symbol("key1")

const jsUser = {
  name: "sunil",
  "full name": "sunil kumar",
  mysym: "mykey1",
  age: 18,
  location: "punjab",
  email: "sunil@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser.mysym);
console.log(jsUser["mysym"]);

jsUser.email = "sunil@chatgpt.com"
Object.freeze(jsUser)