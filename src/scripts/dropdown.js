const dropdownToggles = document.querySelectorAll(".dropdown__toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdown = toggle.parentElement;
    dropdown.classList.toggle("open");
  });
});
