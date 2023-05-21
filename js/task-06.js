const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = Number(event.target.dataset.length);
  const inputValue = event.target.value;

  if (inputValue.length === inputLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
}
