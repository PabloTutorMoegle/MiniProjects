import { useEffect, useState } from 'react'
import { EVENTS } from './assets/constants.js'
import PropTypes from 'prop-types';

export function Router ({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
}

Router.propTypes = {
  routes: PropTypes.array,
  defaultComponent: PropTypes.func
};