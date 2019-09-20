// Get the collapsible portion of the navbar and collapse button
var collapsibleRegion = document.getElementById("header");
var collapseButton = document.getElementsByClassName("navbar-toggle")[0];

// Modal components
var modal = document.getElementById("sponsor-modal"); // Sponsorship modal
var btn = document.getElementById("supportBtn"); // Button that opens the modal
var span = document.getElementsByClassName("close")[0]; // <span> element that closes the modal

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  // Check to ensure that the navbar is closed; otherwise, close it
  if ($(collapsibleRegion).attr("aria-expanded")) {
    $(collapseButton).click();
  }
  // Now open the modal
  modal.style.display = "flex";
}

// When the user clicks the button, open the modal
btn.onclick = () => {
  modal.style.display == "flex" ? closeModal() : openModal();
};
// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  closeModal();
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modal) {
    closeModal();
  }
};
