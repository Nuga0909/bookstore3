import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link">
          {' '}
          <Link className="Books" to="/">
            Books
          </Link>
        </li>
        <li className="linked">
          {' '}
          <Link className="category" to="/Categories">
            Category
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
