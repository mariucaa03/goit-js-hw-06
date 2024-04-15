

const form = document.querySelector(".login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();

  if (!email || !password) {
    alert("You must fill in all fields!");
  } else {
    const data = {
      email: email,
      password: password
    };
    console.log(data); 

    this.reset(); 
  }
});