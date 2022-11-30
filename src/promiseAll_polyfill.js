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
  let counter = 0;
  return new Promise((resolve, reject) => {
    array.forEach((element, index) => {
      Promise.resolve(element)
        .then((x) => {
          result[index] = x;
          counter++;
          console.log(counter);
          if (counter === array.length) {
            resolve(result);
          }
        })
        .catch(reject)
        .then((err) => err);
    });
  });
}
myPromiseAll([p1, p3, p2]).then((x) => console.log(x));
