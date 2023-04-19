import { NavLink } from 'react-router-dom';
import links from '../utils/links';

// set up types for build now... review later...

type NavLinksProps = {
  toggleSidebar? : any
}


const NavLinks = ({ toggleSidebar }: NavLinksProps) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            key={id}
            onClick={toggleSidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
