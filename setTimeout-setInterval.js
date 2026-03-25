console.log(1);
console.log(2);
console.log(3);
let num = 0;
const intervalId = setInterval(() => {
  num++;
  console.log(intervalId, num);
  if (num > 7) {
    clearInterval(intervalId);
  }
}, 4000);
console.log(5);

setTimeout(() => {
  console.log(10000000);
}, 4000);
