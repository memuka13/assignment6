const p1 = Promise.resolve(3);
const p2 = 1000;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hey');
  }, 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

function myPromiseAll(array) {
  const result = [];
  array.forEach((element, index) => {
    element.then((value) => {
      result[index] = value;
    });
  });
  this.then = (members) => {
    return new Promise((resolve, reject) => {
      resolve(members);
    });
  };
  return result;
}

// myPromiseAll.prototype.then = (members) => {
//   return new Promise((resolve, reject) => {
//     resolve(members);
//   });
// };

myPromiseAll([p1, p3]).then((values) => {
  console.log(values);
});
