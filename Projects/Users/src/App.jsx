import './App.css'
import { useUser } from './hooks/useUser.js'
import { User } from './components/User.jsx'


function App() {
  const { user, getUser } = useUser()
  
  const handleClick = () => { 
    getUser().then(() => console.log('User fetched')
    ).catch(() => console.log('Failed to fetch user'))
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleClick}>Get new user</button>
      {user && <User user={user} />}
    </div>
  )
}

export default App

