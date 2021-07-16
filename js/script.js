const form = document.getElementById('form')

// localStorage.setItem("email","teste@gmail.com")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value

  let convertEmail = JSON.stringify(email)

  localStorage.setItem('lead', convertEmail)

}
)
