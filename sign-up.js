const firstname = document.querySelector('#first-name') 
const lastname = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confpassword = document.querySelector('#password2') 
const submit = document.querySelector('.btn') 

const credentials = {
    firstname:'',
    lastname:'',
    email:'' ,
    password: '',
    confpassword:''

}

firstname.addEventListener('change', function(e){

    credentials.firstname = e.target.value
})

lastname.addEventListener('change', function(e){
    credentials.lastname= e.target.value
})

email.addEventListener('change', function(e){

    credentials.email = e.target.value
})

password.addEventListener('change', function(e){
    credentials.password = e.target.value
})
confpassword.addEventListener('change', function(e){

    credentials.confpassword = e.target.value
})

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(credentials)
    postData("http://192.168.1.106:8000/api/auth/register/", { credentials }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
})

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }