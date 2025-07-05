const PersonList = ({persons, del, fil}) => {
    return (
       <div>
        <ul>
        {persons
         .filter(p => p.name.toLowerCase().includes(fil.toLowerCase()))
          .map(person => 
            <li key = {person.id}> 
            {person.name} {person.number} 
            <button onClick = {() => del(person.id)}> delete </button>
            </li>
        )}
        </ul> 
       </div>
       )
}

export default PersonList