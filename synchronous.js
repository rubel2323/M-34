const wadaRakhna = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success < 0.3) {
      resolve("The fact is resolved");
    } else {
      reject("The fact is rejected");
    }
  });
};
