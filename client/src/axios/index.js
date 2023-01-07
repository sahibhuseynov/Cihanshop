import axios from 'axios'


// const HTTP = axios.create({
//     baseURL: "http://localhost:3500"

// })

export const login = async (formData) => 
    await axios.post('http://localhost:3500/users/signin' , formData);
    
