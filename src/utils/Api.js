 const URL_PREFIX = 'http://localhost:3000';

const API = {
    login: (userObj)=>{
       return fetch(`${URL_PREFIX}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

}


export default API;

