import { useAppDispatch } from '../hooks/Store'
import { deleteUserById } from '../store/users/slice'
import { addNewUser } from '../store/users/slice'

const useUserActions = () => {
  const dispatch = useAppDispatch()

  const removeUser = (id) => {
    dispatch(deleteUserById(id))
  }

  const newUser = (value) => {
    dispatch(addNewUser(value))
  }

  return { removeUser, newUser }
}

export default useUserActions
