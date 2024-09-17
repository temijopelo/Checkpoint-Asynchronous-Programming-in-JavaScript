const values = [
  { name: "temi", age: 23, isGraduate: false },
  { name: "tope", age: 18, isGraduate: false },
  { name: "tolu", age: 28, isGraduate: true },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// First async function
const firstAsyncFunction = async () => {
  await delay(1000);
  console.log("First async function executed after 1 second");
};

// Second async function
const secondAsyncFunction = async () => {
  await delay(1000);
  console.log("Second async function executed after 2 seconds");
};

// Third async function
const thirdAsyncFunction = async () => {
  await delay(1000);
  console.log("Third async function executed after 3 seconds");
};

const iterateWithAsyncAwait = async () => {
  for (value of values) {
    console.log(value.name);
    await delay(1000);
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
  }
};

iterateWithAsyncAwait();
