function normalBtn() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error ", error));
}

function arrowBtn() {}
function asyncAwaitBtn() {}
function tryCatchFinalBtn() {}
function PromiseAllBtn() {}
