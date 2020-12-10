import axios from "axios"

async function login(username, password) {
    console.log(username, password)
    let res = await axios.post('http://localhost:3001/api/auth/signin',
        {
            username,
            password
        }
    )
    return res
}

async function signup(username, email, password) {
    let res = await axios.post(
        'http://localhost:3001/api/auth/signup',
        {
            username,
            email,
            password
        }
    )
    return res.data

}

async function getCandidates() {
    let res = await axios.get("http://localhost:3001/api/candidates",
      {  headers: { Authorization:  localStorage["token"] }}

    );
return res

}


export { login, signup, getCandidates }