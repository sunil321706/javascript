// object literals


const mySym = Symbol("key1")


const jsUser = {
  name: "sunil",
  "full name": "sunil kumar",
  [mySym]: "mykey1",
  age: 18,
  location: "punjab",
  email: "sunil@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]); 

jsUser.email = "sunil@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "sunil@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());