const tabNavLinks = document.querySelectorAll(".tabs__nav-link");
const tabPanes = document.querySelectorAll(".tabs__pane");

tabNavLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Remove active class from all nav links and panes
    tabNavLinks.forEach((link) => link.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Add active class to the clicked nav link and corresponding pane
    link.classList.add("active");
    tabPanes[index].classList.add("active");
  });
});
