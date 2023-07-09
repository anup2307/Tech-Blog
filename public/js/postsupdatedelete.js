const updatebtn = document.querySelector('#update');
const deletebtn = document.querySelector('#delete');

const deleteposts = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dashboard/delete/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

const updateposts = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const heading = document.querySelector('#heading').value.trim();
    const description = document.querySelector('#description').value.trim();

    const response = await fetch(`/api/dashboard/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ heading, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update project');
    }
  }
};
updatebtn.addEventListener('click', updateposts);
deletebtn.addEventListener('click', deleteposts);
