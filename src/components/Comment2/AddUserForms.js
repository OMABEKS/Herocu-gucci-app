import React,{useState} from "react";

const AddUserForm = (props) => {

    const initialFormState = { id: null, name: '', text: '' }

    const [user, setUser] = useState(initialFormState)

    const handleInputChange = e => {
        const { name, value } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if (!user.name)  return
        props.addUser(user)
        setUser(initialFormState)

    }

    return(
       <form onSubmit={handleSubmit}>
           <label>Комментарий</label>
           <input  type="text" name="name" value={user.name} onChange={handleInputChange} />
           <button>Добавить комментарий</button>
       </form>
    )
}
export {AddUserForm}