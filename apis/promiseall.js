function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError("Argument must be an array "));
    let total = promises.length;
    let current = 0;
    let results = [];
    if (total === 0) return resolve([]);

    promises.forEach((promise, index) => {
      Promise.resolve(promise) // it will handle non-promises
        .then((data) => {
          results[index] = data;
          current++;
          if (current === total) resolve(results);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  });
}

// Test cases
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
let promise5 = "string";
let promise6 = { a: "name" };
promiseAll([promise1, promise2, promise3, promise5, promise6])
  .then((results) => {
    console.log(results); // Expected output: [3, 42, 'foo']
  })
  .catch((error) => {
    console.error(error);
  });

const promise4 = Promise.reject("error");

promiseAll([promise1, promise4, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error); // Expected output: 'error'
  });
