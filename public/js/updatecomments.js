const submitbtn = document.querySelector('#submitbtn');
const closebtn = document.querySelector('#closebtn');

const submitcomments = async (event) => {
  event.preventDefault();

  const post_id = window.location.pathname.split('/').pop();

  const comments = document.querySelector('#comment').value.trim();

  const response = await fetch('/api/users/comments', {
    method: 'POST',
    body: JSON.stringify({ comments, post_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Create failed!');
  }
};

const closepage = () => {
  document.location.replace('/');
};

submitbtn.addEventListener('click', submitcomments);
closebtn.addEventListener('click', closepage);
