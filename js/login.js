const apiBase = 'http://localhost:5000';

const login = async (email, password) => {
    console.log(email, password);
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    };
    const response = await fetch(`${apiBase}` + "/login", options);
    const data = await response.json();
    console.log(response);
    
    if (response.ok) {
        const token = data.accessToken;
        const email = data.email;
        const name = data.name;
        localStorage.setItem('email', email + '');
        localStorage.setItem('name', name + '');
        localStorage.setItem('token', token + '');
        console.log(email, name, token);
        window.location.href = './person.html';
    } else {
        console.log('Error during login:', data.error);
    }
    console.log(data);


};

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', async () => {
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;

    try {
        login(emailValue, passwordValue)
    } catch (error) {
        console.log(error);
    }
});



