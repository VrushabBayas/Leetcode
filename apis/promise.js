let promise1 = Promise.resolve(10);
let promise2 = new Promise((resolve) => {
  resolve("data in side promise");
});
let promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "This will input data");
});
let promise4 = 4;
let promise5 = "string";
let promise6 = { a: "name" };

const res = Promise.all([
  promise1,
  promise2,
  promise3,
  promise4,
  promise5,
  promise6,
]).then((values) => {
  console.log("values: ", values);
});
