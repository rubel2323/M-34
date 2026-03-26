const jokeDisplay = async () => {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single",
  );

  const data = await response.json();
  console.log(data.joke);
};
jokeDisplay();
