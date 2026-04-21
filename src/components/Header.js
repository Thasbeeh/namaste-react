import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnLogin, setBtnLogin] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-red-200 shadow-lg">
      <div className="m-1 w-32">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-6">
          <li className="px-6">Online status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-6">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6">
            <Link to="/about">About</Link>
          </li>
          <li className="px-6">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-6">Cart</li>
          <li className="px-6">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-6"
            onClick={() => {
              btnLogin === 'Login'
                ? setBtnLogin('Logout')
                : setBtnLogin('Login');
            }}
          >
            {btnLogin}
          </button>
          <li className="px-6 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
