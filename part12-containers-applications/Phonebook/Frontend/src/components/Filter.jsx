const Filter = ({filterPerson, fil}) => {
    return (
        <div>
            filter shown for:
        <input value = {fil} onChange = {filterPerson}/> 

        </div> 
    )

}

export default Filter