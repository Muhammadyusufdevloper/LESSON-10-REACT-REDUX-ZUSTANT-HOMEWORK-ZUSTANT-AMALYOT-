import "./AllUsers.css"
import Users from '../../components/users/Users'
import Empty from '../../components/empty/Empty'
import useStore from "../../zustand/store"

function AllUsers() {
  let users = useStore(state => state.user)
  // users = users.filter(user => user.id && user.name && user.username && user.profession && user.age && user.gender);
  return (
    <div className='all__users'>
      {
        users.length ? <Users data={users} /> : <Empty />
      }
    </div>
  )
}

export default AllUsers