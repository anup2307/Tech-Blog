console.log("inside script file");
const submitbtn = document.querySelector("[type=submit]");

const sigunupForm = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  console.log("username>>>", username);

  if (username && password) {
    console.log("inside usernmae and password");
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("response ok");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
    }
  }
};

submitbtn.addEventListener("submit", sigunupForm);
