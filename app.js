const form = document.getElementById('form');
const emial = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value

    if(!validateEmail(emailVal)){
        form.classList.add('error');
        emailVal = ""
    }else{
        form.classList.remove('error');
        emailVal = ""
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Thanks to Florin Pop on youtube.
