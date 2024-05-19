// Select elements
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const closeBtn = document.querySelector(".modal__close");

// Function to show the modal
function showModal() {
  modal.style.display = "flex";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

// Event listeners
closeBtn.addEventListener("click", hideModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

// Example usage: Show the modal when a button is clicked
const openModalBtn = document.querySelector("#openModal");
openModalBtn.addEventListener("click", showModal);
