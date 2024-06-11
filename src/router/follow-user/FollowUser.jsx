import Users from "../../components/users/Users"
import Empty from "../../components/empty/Empty"
import useStore from "../../zustand/store"

const FollowUser = () => {
  let follow = useStore(state => state.userFollow)
  return (
    <div className='all__users'>
      {
        follow?.length ? <Users data={follow} /> : <Empty />
      }
    </div>
  )
}

export default FollowUser