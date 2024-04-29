import { Link } from 'react-router-dom';

//NavBar component used across all pages
export type ComponentType =
  | 'Name'
  | 'LinkedImage'
  | 'Sections'
  | 'TextBox'
  | 'Delete'
  | null;

const NavBar = () => {
  return (
    <div className="nav">
      <Link className="navLink" to={'/'}>
        JSON Upload
      </Link>
      <Link className="navLink" to={'/Components'}>
        Components
      </Link>
      <Link className="navLink" to={'/dataPolling'}>
        Data Polling
      </Link>
      <Link className="navLink" to={'/debounce'}>
        Debounce
      </Link>
    </div>
  );
};

export default NavBar;
