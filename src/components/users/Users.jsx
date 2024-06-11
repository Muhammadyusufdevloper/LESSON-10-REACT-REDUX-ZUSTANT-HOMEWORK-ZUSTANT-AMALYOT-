import PropTypes from "prop-types";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import useStore from "../../zustand/store";
import { useState } from "react";
import EditModal from "../modal/EditModal"

function Users({ data }) {
  const follow = useStore(state => state.toggle);
  const removeUser = useStore(state => state.removeUser);
  const userFollow = useStore(state => state.userFollow);
  const [editUser, setEditUser] = useState(null);

  const userElements = data?.map((user) => (
    <div key={user.id} className="users__card">
      <img src={user.gender === "male" ? male : female} alt={`${user.gender} avatar`} />
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.profession}</p>
      <div>
        <p>{user.age} years old</p>
        <p className="users__card__time"></p>
      </div>
      <div>
        <button onClick={() => removeUser(user.id)}>
          Remove
        </button>
        <button onClick={() => setEditUser(user)}>
          Edit
        </button>
        <button onClick={() => follow(user)}>
          {
            userFollow.some((follow) => follow.id === user.id) ? "Following" : "Follow"
          }
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="users__wrapper">{userElements}</div>
      {
        editUser &&
        <EditModal setEditUser={setEditUser} data={editUser}>
          <div className="modal__overlay" onClick={() => setEditUser(null)}></div>
          <form onSubmit={(e) => {
            e.preventDefault();
            const newObj = {
              name: e.target.name.value,
              username: e.target.username.value,
              profession: e.target.profession.value,
              age: e.target.age.value,
              gender: e.target.gender.value
            };
            useStore.getState().editUser(newObj);
            setEditUser(null);
          }} className="modal__user-form">
            <input required name="name" defaultValue={editUser.name} type="text" placeholder="name" />
            <input required name="username" defaultValue={editUser.username} type="text" placeholder="username" />
            <input required name="profession" defaultValue={editUser.profession} type="text" placeholder="profession" />
            <input required name="age" maxLength={3} defaultValue={editUser.age} type="number" placeholder="age" />
            <select required name="gender" defaultValue={editUser.gender}>
              <option value="" hidden disabled>gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditUser(null)}>Close</button>
          </form>
        </EditModal>
      }
    </>
  );
}

Users.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.oneOf(["male", "female"]).isRequired,
    })
  ).isRequired,
};

export default Users;
