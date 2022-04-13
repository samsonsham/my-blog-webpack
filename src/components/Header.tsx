import { Link } from 'react-router-dom'
const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/my-blog-webpack">Home</Link>
      </li>
      <li>
        <Link to="/my-blog-webpack/about">About</Link>
      </li>
      <li>
        <Link to="/my-blog-webpack/articles-list">Articles</Link>
      </li>
    </ul>
  </nav>
)

export default Header
