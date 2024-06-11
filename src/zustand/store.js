import { create } from 'zustand'

const useStore = create((set) => ({
    userFollow: JSON.parse(localStorage.getItem("userFollow")) || [],
    user: JSON.parse(localStorage.getItem("user")) || [],
    toggle: (payload) => set((state) => {
        const index = state.userFollow.findIndex(el => el.id === payload.id)
        let newUserFollow;
        if (index < 0) {
            newUserFollow = [...state.userFollow, payload]
        } else {
            newUserFollow = state.userFollow.filter(el => el.id !== payload.id)
        }
        localStorage.setItem("userFollow", JSON.stringify(newUserFollow))
        return { userFollow: newUserFollow }
    }),
    addUser: (payload) => set((state) => {
        const newUser = [...state.user, payload];
        localStorage.setItem("user", JSON.stringify(newUser));
        return { user: newUser };
    }),
    removeUser: (id) => set((state) => {
        const newUser = state.user.filter(el => el.id !== id);
        localStorage.setItem("user", JSON.stringify(newUser));
        return { user: newUser };
    }),
    editUser: (payload) => set((state) => {
        const updatedUsers = state.user.map(user => user.id === payload.id ? payload : user);
        localStorage.setItem("user", JSON.stringify(updatedUsers));
        return { user: updatedUsers };
    })
}))

export default useStore
