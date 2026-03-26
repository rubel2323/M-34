const delayedMessage = (name, ms) => {
  let message = setInterval(() => {
    console.log("Hello", name, "\n");
  }, ms);
  setTimeout(() => {
    clearInterval(message);
  }, 8000);
};

document.getElementById("btn").addEventListener("click", function () {
  delayedMessage("Alice", 2000);
});
