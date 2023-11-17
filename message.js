document.addEventListener("DOMContentLoaded", function() {
  const sendButton = document.getElementById("send-button");
  const response = document.getElementById("response");
  const userInput = document.getElementById("message-input");
  

  sendButton.addEventListener("click", function() {
    response.style.display = "block";
    
  });


  // response.addEventListener("touchstart", function(event) {
  //   response.textContent = userInput;
  // });

  // response.addEventListener("touchend", function(event) {
  //   response.textContent = response;
  // });


});
