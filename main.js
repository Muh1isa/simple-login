let input = document.getElementById('input')
let emailUser = document.getElementById('email')
let password = document.getElementById('passw')



function Login() {
    localStorage.setItem('username', String(input.value))
    let user = localStorage.getItem('username')
    localStorage.setItem('email', String(emailUser.value))
    let email = localStorage.getItem('email')
    localStorage.setItem('password', String(passw.value))
    let password = localStorage.getItem('password')

    if(user && email && password) {
        location.href = 'https://teamapp-template.netlify.app/'
    } else {
        console.log(false);
    }
}