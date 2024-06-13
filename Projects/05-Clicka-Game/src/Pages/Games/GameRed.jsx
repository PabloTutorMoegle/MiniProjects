import redduck from '../../assets/redduck.png'
import { useState } from 'react'
import { Link } from '../../Link.jsx'

function GameRed() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2>{count}</h2>
        <img src={redduck} alt="random" onClick={() => setCount((count) => count + 1)}/>
        <p></p>
        <Link to={"/"}> Go back </Link>
    </div>
  )
}

export default GameRed