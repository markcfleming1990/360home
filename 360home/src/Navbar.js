import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        360 Home Management
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/quote">Quote</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
      </ul>
    </nav>
  );
}

// create custom funciton to wrap links to highlight active links
function CustomLink({ to, children, ...props }) {
 const resolvedPath = useResolvedPath(to)
 const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active": ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
