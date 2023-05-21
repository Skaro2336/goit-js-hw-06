const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {};
  for (let i = 0; i < loginForm.elements.length; i += 1) {
    const element = loginForm.elements[i];
    if (element.type !== "submit") {
      formData[element.name] = element.value;
    }
  }
  const isFormValid = Object.values(formData).every((value) => value !== "");
  if (!isFormValid) {
    alert("Будь ласка, заповніть всі поля форми.");
    return;
  }
  console.log(formData);

  loginForm.reset();
});
