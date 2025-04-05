function anyPromise(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError("Argument must be an array"));
    let total = promises.length;
    let resolved = false;
    let errors = [];
    let index = 0;
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          if (!resolved) {
            resolved = true;
            resolve(value);
          }
        })
        .catch((error) => {
          errors[index++] = error;

          if (errors.length === total) {
            return reject(new AggregateError(errors, "All Promises Rejected"));
          }
        });
    });
  });
}
// Test the anyPromise function
const promise1 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Error 1")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "Error 2")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 300, "Success 3")
);

anyPromise([promise1, promise2, promise3])
  .then((value) => {
    console.log("Resolved with value:", value);
  })
  .catch((error) => {
    console.error("Rejected with error:", error);
  });

const promise4 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Error 4")
);
const promise5 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "Error 5")
);

anyPromise([promise4, promise5])
  .then((value) => {
    console.log("Resolved with value:", value);
  })
  .catch((error) => {
    console.error("Rejected with error:", error);
  });
