const paginationLinks = document.querySelectorAll('.pagination__link');

paginationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove active class from all links
    paginationLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    event.target.classList.add('active');

    // Fetch and display the content for the selected page
    const pageNumber = event.target.textContent;

  });
});

