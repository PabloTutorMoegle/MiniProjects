import blueduck from '../../assets/blueduck.png'
import { useState } from 'react'
import { Link } from '../../Link.jsx'

function GameBlue() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2>{count}</h2>
        <img src={blueduck} alt="random" onClick={() => setCount((count) => count + 1)}/>
        <p></p>
        <Link to={"/"}> Go back </Link>
    </div>
  )
}

export default GameBlue