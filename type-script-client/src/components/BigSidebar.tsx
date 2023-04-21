import NavLinks from './NavLinks';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store: RootState) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          {/* the line below is down for further review */}
          <NavLinks toggleSidebar={isSidebarOpen}/>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
