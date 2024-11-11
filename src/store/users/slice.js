import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_STATE = [
  {
    key: '1',
    id: '1',
    name: 'Mark Brown',
    email: 'johnmail.com',
    address: 'New York No. 1'
  },
  {
    key: '2',
    id: '2',
    name: 'Jim Green',
    email: 'jim@mail.com',
    address: 'London No. 1'
  }
]

const initialState = (() => {
  const persistedState = localStorage.getItem('__redux__state__')

  if (persistedState) return JSON.parse(persistedState).users

  return DEFAULT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      return [
        ...state,
        { ...action.payload, id: state.length + 1, key: state.length + 1 }
      ]
    },
    deleteUserById: (state, action) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions
export const { addNewUser } = usersSlice.actions
