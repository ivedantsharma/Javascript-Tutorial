// Promise
// it is a feature of browser now javascript
console.log("script start !");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({ value: "Fried Rice" });
  }
  //we can write anything in reject like object function array text etc
  // else reject("Couldn't do it");
  else reject(new Error("something missing from array"));
});

// How to consume
// friedRicePromise.then((myfriedRice)=> {
//     console.log("lets eat", myfriedRice);
// }, (error)=> {console.log(error)})
//  another way to write above line using catch
friedRicePromise
  .then((myfriedRice) => {
    console.log("lets eat", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

// if there are both promise and settimeout in a file then firstly promise will run from microtask queue and then settimeout will run from callback queue
setTimeout(() => {
  console.log("Hello from settimeout");
});

for (let i = 1; i <= 100; i++) {
  console.log(Math.random());
}
console.log("script end !");

// function returning promise

function ricePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve({ value: "Fried Rice" });
    } else reject(new Error("something missing from array"));
  });
}

ricePromise()
  .then((myfriedRice) => {
    console.log("lets eat", myfriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

// promise and settimeout
//  i want to resolve and reject promise after 2 sec

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true; //do false then check
    setTimeout(() => {
      if (value) {
        resolve();
      } else reject();
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log(resoleved);
  })
  .catch(() => {
    console.log("rejected");
  });
