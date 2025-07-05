const PersonForm = ({newName, newNumber, handleName, handleNumber, submitForm}) => {
    return (
    <form onSubmit = {submitForm}> 
       <div> name: <input value = {newName} onChange = {handleName}/>  </div>
       <div> number: <input value = {newNumber} onChange = {handleNumber}/> </div> 
        <div> <button type = "Submit"> add </button> </div>
     </form> 
    )
}
export default PersonForm