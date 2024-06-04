import './App.css'
import { useState, useEffect } from 'react'

const API_KEY = 'tcBDYId8hlNDdeXhh90j3oTwCKuLriQ7Q753n0mQ'
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

import PropTypes from 'prop-types';

function Image({ imag }) {
  return (
    <div>
      <p>{imag.date}</p>
      <img src={imag.hdurl} alt="NASA APOD" />
    </div>
  )
}

Image.propTypes = {
  imag: PropTypes.object.isRequired
};

function App() {
  const [imag, setImage] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
      })
      .catch((error) => {
        console.log('Fetch Error: ', error);
      })
  }, [])

  const handleSubmit = () => {
    const date = document.querySelector('input').value

    fetch(`${API_URL}&date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
      })
      .catch((error) => {
        console.log('Fetch Error: ', error);
      })
  }
  return (
    <main>
      <h1>La imagen astronomica del dia </h1>
      <input type="date" className='pick-date' />
      <button onClick={handleSubmit}>Buscar</button>
      {imag && <Image imag={imag}/>}
    </main>
  )
}

export default App