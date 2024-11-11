import ListUsers from './components/ListUsers'
import NewUser from './components/NewUser'

function App() {
  return (
    <div className='container container-fluid mt-4'>
      <ListUsers />
      <hr />
      <NewUser />
    </div>
  )
}

export default App
