const cards = document.getElementsByClassName('card');
console.log(cards);

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

cards.forEach((item) => {
  item.addEventListener('click', function (event) {
    console.log(event);
  });
});
document.querySelector('#logout').addEventListener('click', logout);
