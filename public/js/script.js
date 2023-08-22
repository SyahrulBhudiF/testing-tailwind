const button = document.querySelectorAll('nav span')
const section = document.querySelector('section')
const signin = document.querySelector('#signin')
const login = document.querySelector('#login')
const loginForm = section.querySelector('#loginForm');

const dummyEmail = 'admin@gmail.com'
const dummyPass = '123456'

button.forEach(e => {
    e.addEventListener('click', () => {
        if (e.textContent === 'Sign in') {
            e.classList.add('hidden')
            login.classList.remove('hidden')
            section.querySelector('p').innerHTML = 'Sign In'
            section.querySelector('button').innerHTML = 'Sign In'

        } else if (e.textContent === 'Login') {
            e.classList.add('hidden')
            signin.classList.remove('hidden')
            section.querySelector('p').innerHTML = 'Login'
            section.querySelector('button').innerHTML = 'Login'
        }
    })
})


loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;

    if (emailValue === dummyEmail && passwordValue === dummyPass) {
        return window.location.href = 'home.html'
    } else {
        alert('Password Or Email Wrong')
        inputEmail.value = ''
        inputPassword.value = ''
    }
});
