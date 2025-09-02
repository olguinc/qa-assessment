window.location.href = "https://demoqa.com/text-box";

// Fill in the form fields
document.querySelector("#userName").value = "John Doe";
document.querySelector("#userEmail").value = "john.doe@example.com";
document.querySelector("#currentAddress").value = "123 Main St";
document.querySelector("#permanentAddress").value = "456 Secondary St";
document.querySelector("#submit").click();

// Validate the info in output section
setTimeout(() => {
  const output = document.querySelector("#output");
  if (
    output &&
    output.innerText.includes("John Doe") &&
    output.innerText.includes("john.doe@example.com") &&
    output.innerText.includes("123 Main St") &&
    output.innerText.includes("456 Secondary St")
  ) {
    console.log("Output contains the entered values.");
  } else {
    console.error("Test Failed: Output does not contain the expected values.");
  }
}, 1000);


// API Validation
async function getData() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Wrong status code: " + response.status);
    }
    const data = await response.json();
    if (
      data.hasOwnProperty("userId") &&
      data.hasOwnProperty("id") &&
      data.hasOwnProperty("title") &&
      data.hasOwnProperty("body") &&
      data.id === 1
    ) {
      console.log("All tests passed");
    } else {
      throw new Error("API Test Failed: Missing properties or incorrect id.");
    }
  } catch (error) {
    throw new Error("API Test Failed: " + error.message);
  }
}
await getData();
