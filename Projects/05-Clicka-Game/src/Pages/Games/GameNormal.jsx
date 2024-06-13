import duck from '../../assets/duck.png'
import { useState } from 'react'
import { Link } from '../../Link.jsx'

function GameNormal() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2>{count}</h2>
        <img src={duck} alt="random" onClick={() => setCount((count) => count + 1)}/>
        <p></p>
        <Link to={"/"}> Go back </Link>
    </div>
  )
}

export default GameNormal