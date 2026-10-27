// validation
console.log("javascript connected");

const form = document.getElementById("enquiry-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  console.log("Form stopped for validation");

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you for your enquiry. We will get back to you soon.");
    }
});

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error"); 

if (nameInput.value.trim() === "") {
  nameError.textContent = "Full name is required.";
}
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email address is required.";
  }
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
    }



      function showError(element, message) {
        element.textContent = message;
      }

      function clearError(element) {
        element.textContent = "";
      }
    

  

