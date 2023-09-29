import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link">
          {' '}
          <Link className="Books" to="/">
            BOOKS
          </Link>
        </li>
        <li className="linked">
          {' '}
          <Link className="category" to="/Categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div className="circle">
        <FontAwesomeIcon icon={faUser} style={{ color: '#0290ff' }} />
      </div>
    </nav>
  );
}

export default NavBar;
