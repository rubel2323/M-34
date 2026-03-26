function normalBtn() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error ", error));
}

let arrowBtn = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

async function asyncAwaitBtn() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

const tryCatchFinalBtn = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  try {
    const data = await res.json();

    console.log(" tried data are ", data);
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("Nothing is impossible finally");
  }
};

async function PromiseAllBtn() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json(),
      ),

      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json(),
      ),

      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json(),
      ),
    ]);

    console.log(users);
    console.log(posts);
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}
