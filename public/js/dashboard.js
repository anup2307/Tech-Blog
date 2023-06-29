const newpostbtn = document.querySelector("[type=submit]");

const displayCreatepost = async () => {
  const response = await fetch("/dashboard/new", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard/new");
  } else {
    alert("Failed to create");
  }
};

newpostbtn.addEventListener("click", displayCreatepost);
