import useStore from "../../zustand/store";
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  let users = useStore(state => state.user)
  let follow = useStore(state => state.userFollow)
  return (
    <div className='navbar'>
      <h2>Redux</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>All users <sup>{users.length}</sup></NavLink>
      <NavLink to={"/follow-user"}>Follow user <sup>{follow.length}</sup></NavLink>
    </div>
  )
}

export default Navbar