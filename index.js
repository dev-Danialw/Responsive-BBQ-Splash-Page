let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // do something with the event
  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");

  let updatedHtmlContent = `
  <h2>Congrats, ${userFirstName}</h2>
  <p>You are on your way to becoming a BBQ MASTER!</p>
  <p class="fine-print">We will never share your personal information without your permission</p>
  
  
  `;
  let ourMainContent = document.getElementById("Main-Content");
  ourMainContent.innerHTML = updatedHtmlContent;
});
