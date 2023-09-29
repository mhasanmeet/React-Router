import { Link } from 'react-router-dom'
import "../index.css";

const NotFound = () => {
  return (
    <section className='not-found-page'>
        <div>Page Not Found </div>
        <Link to="/"><h2>Back to home </h2></Link>
    </section>
  )
}

export default NotFound