document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.getElementById("send-button");
  const response = document.getElementById("response");

  sendButton.addEventListener("click", function() {
    response.style.display = "block";
    
  });
});
