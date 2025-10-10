function toggleButton(buttonClass) {
  const buttonElement = document.querySelector(buttonClass);

  if (!buttonElement.classList.contains("is-toggled")) {
    turnOffPreviousButton();
    buttonElement.classList.add("is-toggled");
  }
  else buttonElement.classList.remove("is-toggled");
}

function turnOffPreviousButton() {
  const toggledButton = document.querySelector('.is-toggled');

  if (toggledButton)
    toggledButton.classList.remove('is-toggled');
}