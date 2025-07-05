import axios from 'axios'

const url = `${import.meta.env.VITE_BACKEND_URL}` || 'http://localhost:3000/api/persons'

const getPersons = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const addPersons = (data) => {
    const req =  axios.post(url, data)
    return req.then(res => res.data)
}

const updatePerson = (id, person) => {
    const req = axios.put(`${url}/${id}`, person)
    return req.then(res => res.data)
}
const deletePerson = (id)  => {
    return axios.delete(`${url}/${id}`)
}


export { getPersons, addPersons, updatePerson, deletePerson}