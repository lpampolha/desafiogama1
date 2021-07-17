window.onload = function(){
  var button = document.getElementById("button")

  button.onclick = saveMail
}

function saveMail(){
  var inputMail = document.getElementById("email")
  var email = inputMail.value

  localStorage.setItem("mailSave", email)

  var span = getElementById("message")
  span.innerHTML = "E-mail salvo com sucesso"
}