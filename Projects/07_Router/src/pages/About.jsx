import {Link} from '../Link.jsx'

function AboutPage() {
    return (
      <>
        <h1>About Page</h1>
        <img src="https://pbs.twimg.com/profile_images/1786115309729878017/kpKZGjvw_400x400.jpg" alt="Foto pablo" />
        <p>Welcome to the About Page</p>
        <Link to={'/'}>Home</Link>
      </>
    )
}

export default AboutPage