import { useEffect } from 'react'
import { useState } from 'react'
import PersonForm from './components/PersonForm.jsx'
import PersonList from './components/PersonList.jsx'
import Filter from './components/Filter.jsx'
import { getPersons, addPersons, updatePerson, deletePerson } from './services/person.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [fil, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    getPersons()
     .then(res => {
       setPersons(res)
    })
  }, [])

  const handleName = (e) => {
    const val = e.target.value
    setNewName(val)
  }

  const handleNumber = (e) => {
    const num = e.target.value  
    setNewNumber(num)
  }

  const submitForm = (e) => {
    e.preventDefault()
    const found = persons.find(person => person.name === newName)
   
    if (found) {
      const ask = window.confirm(`${newName} already exists, do you want to update the number?`)
      if (ask) {
        const newp =  {...found, number: newNumber} 
        updatePerson(found.id, newp)
          .then(() => {
            setPersons(persons.map(person => person.id !== found.id? person: newp))
            setNewName('')
            setNewNumber('')
            setNotification({text: `${newp.name} updated successfully.`, type: 'success'})
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch((err) => {
            setNotification({text: `Information of ${newName} has been moved from the server.`, type: 'error'})
            setTimeout(() => {
              setNotification(null)
            }, 5000)
        })
      }
    }
    else {
       if (!newName|| !newNumber) { 
         setNotification({text: `both name and number are required`, type: 'error'})
                                     return }
    const nameObject = {
      name: newName, 
      number: newNumber
    }                     
    addPersons(nameObject)
        .then(() => {
          setPersons(persons.concat(nameObject))
          setNewName('')
          setNewNumber('')
          setNotification({text: `${nameObject.name} added.`, type: 'success'})
          setTimeout(() => {
           setNotification(null)
            }, 5000)
        })
        .catch((err) => {
          const errorMsg = err.response?.data?.error || 'An unknown error occurred';
          setNotification({text: errorMsg, type: 'error'})
          setTimeout(() => {
            setNotification(null)
          }, 5000)
      })
        
}}

const delPerson = (id) => {
  const person = persons.find(p => p.id === id)
  const msg = window.confirm(`Do you really wanna delete ${person.name}?`)
  if (msg){
    deletePerson(id)
    .then(()=> {
      setPersons(persons.filter(p=> p.id !== id))
      setNotification({text: `Deleted ${person.name} successfully.`, type: 'success'})
      setTimeout(() => {
      setNotification(null)
      }, 5000)
    })
    .catch((error) => {
      setPersons(persons.filter(p=> p.id !== id))
      setNotification({text: `Something went wrong`, type: 'error'})
      setTimeout(() => {
      setNotification(null)
      }, 5000)
    })
  }
}

  
const filterPerson = (e) => {
  const name = e.target.value
  setFilter(name)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notification}/> 
      <Filter filterPerson = {filterPerson} fil = {fil}/> 
      <h3> Add a new number </h3>
      <PersonForm newName = {newName} newNumber = {newNumber} handleName = {handleName} 
                   handleNumber = {handleNumber} submitForm = {submitForm} /> 
      <h3> Numbers </h3> 
      <PersonList persons = {persons} del = {delPerson} fil = {fil}/> 
    
    </div>
  )
}

export default App