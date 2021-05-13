import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 data-testid="heading">Math Magicians</h1>
    <ul>
      <li data-testid="home">
        <Link to="/">Home</Link>
      </li>
      <li data-testid="calculator">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li data-testid="quote">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
