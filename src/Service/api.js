import axios from 'axios';

const url = 'https://updatedvaya.herokuapp.com/users';

export const getUsers = async () => {
    return await axios.get(`${url}/get`);
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);

}

export const loginAdmin = async(credentials) => {
  
return await axios.post(`${url}/adminLogin`,credentials);
}