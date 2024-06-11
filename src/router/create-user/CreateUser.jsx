import "./CreateUser.css"
import useStore from "../../zustand/store"

function CreateUser() {
  const addUser = useStore(state => state.addUser)

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let newUser = Object.fromEntries(formData.entries())
    addUser({ ...newUser, id: new Date().getTime() })
    e.target.value.remove()
  }


  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input required value={"Ali"} name="name" type="text" placeholder='name' />
        <input required value={"soliev"} name="username" type="text" placeholder='username' />
        <input required value={"programmer"} name="profession" type="text" placeholder='profession' />
        <input required value={"234"} name="age" maxLength={3} type="number" placeholder='age' />
        <select required value={"male"} name="gender" id="">
          <option value="" hidden disabled>gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser
