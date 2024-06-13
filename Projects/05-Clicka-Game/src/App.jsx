import GameNormal from './Pages/Games/GameNormal.jsx'
import GameRed from './Pages/Games/GameRed.jsx'
import GameBlue from './Pages/Games/GameBlue.jsx'
import GameGreen from './Pages/Games/GameGreen.jsx'
import GameHat from './Pages/Games/GameHat.jsx'
import GameSkarf from './Pages/Games/GameSkarf.jsx'
import GameunGlasses from './Pages/Games/GameSunGlasses.jsx'
import Menu from './Pages/Menu.jsx'
import { Router } from './Router.jsx'
import './App.css'

const routes = [
  {
    path: '/',
    Component: Menu
  },
  {
    path: '/game',
    Component: GameNormal
  },
  {
    path: '/gamered',
    Component: GameRed
  },
  {
    path: '/gameblue',
    Component: GameBlue
  },
  {
    path: '/gamegreen',
    Component: GameGreen
  },
  {
    path: '/gamehat',
    Component: GameHat
  },
  {
    path: '/gameskarf',
    Component: GameSkarf
  },
  {
    path: '/gameglasses',
    Component: GameunGlasses
  }
]

function App() {

  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
