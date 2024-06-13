import greenduck from '../../assets/greenduck.png'
import { useState } from 'react'
import { Link } from '../../Link.jsx'

function GameGreen() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2>{count}</h2>
        <img src={greenduck} alt="random" onClick={() => setCount((count) => count + 1)}/>
        <p></p>
        <Link to={"/"}> Go back </Link>
    </div>
  )
}

export default GameGreen