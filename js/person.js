
const apiBase = 'http://localhost:5000';

const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};

const getUserProfile = async () => {
    const token = getTokenFromLocalStorage();
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');

    if (!token) {
        console.log('Token or email not found. User is not authenticated.');
        return;
    }

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    const response = await fetch(`${apiBase}/users`, options);
    const data = await response.json();

    if (response.ok) {
        document.getElementById('nameEl').textContent = name;
        document.getElementById('emailEl').textContent = email; 
    } else {
        console.log('Error fetching user profile data');
    }
};

window.addEventListener('load', getUserProfile);
