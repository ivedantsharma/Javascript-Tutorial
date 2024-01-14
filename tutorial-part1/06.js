//object destructing
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherfamousSong: "kashmir",
};
const {bandName, famousSong,...restprop} = band;
const {bandName: var1,famousSong:var2} = band;//this is the syntax if we want to make diffferent variable name
console.log(bandName);
console.log(restprop);
console.log(var1);


//objects inside array
// !important
const users = [
    {userID: 1,firstName: "Vedant", gender: "male"},
    {userID: 2,firstName: "Mohit", gender: "male"},
    {userID: 3,firstName: "nitish", gender: "male"},
]
console.log(users);
for(let user of users) {
    console.log(user.firstName);
};

//nested destructuring
const users1 = [
    {userID: 1,firstName: "Vedant", gender: "male"},
    {userID: 2,firstName: "Mohit", gender: "male"},
    {userID: 3,firstName: "Nitish", gender: "male"},
]

const [user1, user2, user3] = users;
const [{firstName}, ,{gender}] = users;
const [{firstName: name,userID}, ,{gender: mard}] = users;
console.log(user1);
console.log(firstName);
console.log(gender);
console.log(name,mard);
console.log(userID);