import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users/slice'

const persistanceMiddleware = (store) => (next) => (action) => {
  next(action)
  //console.log(action)
  try {
    const serializedState = JSON.stringify(store.getState())
    localStorage.setItem('__redux__state__', serializedState)
  } catch (error) {
    console.error('Could not serialize state:', error)
  }
}

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceMiddleware)
})
