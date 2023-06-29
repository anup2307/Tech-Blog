const createbtn = document.querySelector("#submitbtn");

const createPost = async () => {
  const heading = document.querySelector("#title").value.trim();
  const description = document.querySelector("#content").value.trim();

  const response = await fetch("/api/dashboard/createpost", {
    method: "POST",
    body: JSON.stringify({ heading, description }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Create failed!");
  }
};

createbtn.addEventListener("click", createPost);
