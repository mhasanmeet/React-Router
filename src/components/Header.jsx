import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'>Urban Properties</Link>
        
        <nav className='nav'>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>About</NavLink>
          <NavLink to="/properties" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Properties</NavLink>
          <NavLink to="/landlord" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>Dashboard</NavLink>
        </nav>
    </header>
  )
}

export default Header