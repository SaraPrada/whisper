document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("send-button");
  const response = document.getElementById("response");
  const userInput = document.getElementById("message-input");


  sendButton.addEventListener("click", function () {
    response.style.display = "block";
  });

});
