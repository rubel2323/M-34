document.getElementById("inputFieldBtn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputFieldValue = inputField.value;
  try {
    if (isNaN(inputFieldValue)) {
      throw "This is not a number";
    }
    console.log("valid input is ", inputFieldValue);
  } catch (error) {
    console.log("Error: -", error);
  } finally {
    console.log("It is final console");
  }
});
