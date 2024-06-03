import {useState} from 'react'
import {getRandomUser} from '../services/user.js'

export function useUser () {
    const [user, setUser] = useState()
  
    const getUser = async () => {
      const newUser = await getRandomUser()
      setUser(newUser)
    }
  
    return {user: user, getUser}
}