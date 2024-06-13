import {Link} from '../Link.jsx'
import duck from '../assets/duck.png'
import redduck from '../assets/redduck.png'
import blueduck from '../assets/blueduck.png'
import greenduck from '../assets/greenduck.png'
import hatduck from '../assets/hatduck.png'
import skarfduck from '../assets/skarfduck.png'
import sunglassesduck from '../assets/sunglassesduck.png'

function HomePage() {
    return (
        <>
            <h1>Pick a skin for your Duck</h1>
            <p>_________________________________________________________</p>
            <Link to={'/game'} props={duck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={duck} alt="normal" />
            </Link>
            <Link to={'/gamered'} props={redduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={redduck} alt="red" />
            </Link>
            <Link to={'/gameblue'} props={blueduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={blueduck} alt="blue" />
            </Link>
            <Link to={'/gamegreen'} props={greenduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={greenduck} alt="green" />
            </Link>
            <p>_________________________________________________________</p>
            <Link to={'/gamehat'} props={hatduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={hatduck} alt="hat" />
            </Link>
            <Link to={'/gameskarf'} props={skarfduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={skarfduck} alt="skarf" />
            </Link>
            <Link to={'/gameglasses'} props={sunglassesduck}>
            <img style={{maxHeight: '100px', maxWidth: '100px'}} src={sunglassesduck} alt="sunglasses" />
            </Link>
            <p>_________________________________________________________</p>
            <p>Click on a duck to start the game!</p>
        </>
    )
}

export default HomePage