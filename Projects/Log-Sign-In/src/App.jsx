import './App.css'
import LogIn from './components/LogIn.jsx'
import SignIn from './components/SignIn.jsx'
import {useState} from 'react'

//You have to take into account that the LogIn and SignIn components are not complete 
//    because they are not connected to a database, so that changes some things.

function App() {
  const [showComponent, setShowComponent] = useState('LogIn')

  const handleShowLogIn = () => setShowComponent('LogIn')
  const handleShowSignIn = () => setShowComponent('SignIn')

  return (
    <header>
      <div className='menu'>
        <button onClick={handleShowLogIn}>Log In</button>
        <button onClick={handleShowSignIn}>Sign In</button>
      </div>
      {showComponent === 'LogIn' ? <LogIn /> : <SignIn />}
    </header>
  )
}

export default App
