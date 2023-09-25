import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'>Urban Properties</Link>
        <nav className='nav'>
          <Link to="/about" className='nav-item'>About</Link>
          <Link to="/properties" className='nav-item'>Properties</Link>
        </nav>
    </header>
  )
}

export default Header