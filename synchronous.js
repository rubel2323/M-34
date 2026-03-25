const wadaRakhna = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("The fact is resolved");
    } else {
      reject(new Error("The fact is rejected"));
    }
  });
};
wadaRakhna()
  .then((result) => {
    console.log(".Then is resolved", result);
  })
  .catch((error) => {
    console.error("error occurred  ", error);
  });
