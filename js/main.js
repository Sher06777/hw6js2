const apiBase = 'http://localhost:5000';

const btn = document.getElementById('btn');

const register = async (name, email, password) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    };
    const response = await fetch(`${apiBase}/register`, options);
    const data = await response.json();

    console.log(data);
};

btn.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const emailEl = document.getElementById('email').value;
    const passwordEl = document.getElementById('password').value;
    const confirmpasswordEl = document.getElementById('confirm').value;
    console.log(name, emailEl, passwordEl);

    const regexppass = /^.+$/;

    if (regexppass.test(passwordEl)) {
        if (passwordEl === confirmpasswordEl) {
            await register(name, emailEl, passwordEl)
            window.location.href = './login.html';
        }
    }
});


