import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/user/userSlice';
import { changeLightMode } from '../features/lightMode/lightModeSlice';


const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const lightMode = useSelector((store) => store.lightMode)
 

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  useEffect(()=>{
    console.log(lightMode)
  },[])

  const handleClick = (e) =>{
   dispatch(changeLightMode())
   // we need the ! before light mode as the light mode is not getting updated until the next rerende
   // therefore, if the initial value is false, upon press, the value will remain false and only change on a subsequent click
   // this way, it changes from the very first click
    localStorage.setItem("UniqueIDlightMode", JSON.stringify(!lightMode))
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => dispatch(clearStore('Logging out...'))}
            >
              logout
            </button>
            
          </div>
          
        </div>
        <button className='lightMode-btn'
              type='button'
              onClick={handleClick}
              >
              <div className="lightMode-btn-img-container" style={{transform: `translateY(${lightMode ? '0' : '-100%'})`}}>
                {/* the two divs below are for the images on the lightMode button, they are styled in the index.css using the first/last of type (hence no class) */}
                <div />
                <div />
              </div>
            </button>
      </div>
    </Wrapper>
  );
};
export default Navbar;
