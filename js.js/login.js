const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = (Event) => {
    if(target.value.length > 2){
        button.removeAttribute('disable');
        return;
    }
    button.setAttribute('disable', '');
}
const handleSubmit = () => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'

}


input.addEventListener('input', validateInput);