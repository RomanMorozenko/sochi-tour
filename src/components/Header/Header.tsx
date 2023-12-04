import { useAppSelector } from '../../hooks/useAppSelector';
import s from './header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { signOut, onAuthStateChanged, getAuth } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { clearUser, setUser } from '../../state/userSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const userEmail = useAppSelector((state) => state.user.email);
  const navigate = useNavigate();

  const isAuthorized = !!userEmail;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleClose();
    navigate('');
  };

  const handleLogout = async () => {
    handleClose();
    try {
      await signOut(auth);
      dispatch(clearUser());
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email || ''));
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // You can also use the user object to get the user's Firebase ID token
      // user.getIdToken().then((idToken) => {
      //   console.log(idToken);
      //   // You can send this token to your server and validate it using the Firebase Admin SDK, or use it for other purposes as required by your application
      // });
    } else {
      // User is signed out
      console.log('User is currently signed out.');
    }
  });

  return (
    <header className={s.header}>
      <div className={'wrapper' + ' ' + s.container}>
        <NavLink className={s.headerLink} to="/">
          <h1 className={s.logo}>Логотип</h1>
        </NavLink>
        {isAuthorized ? (
          <div className={s.userIconContainer}>
            <PersonOutlineIcon />
            <span onClick={handleClick} className={s.userEmail}>
              {userEmail}
            </span>
            <DropDownMenu
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              handleLogout={handleLogout}
              handleProfileClick={handleProfileClick}
            />
          </div>
        ) : (
          <div>
            <NavLink className={s.headerLink} to="/signup">
              <span className={s.headerItem}>Регистрация</span>
            </NavLink>
            <NavLink className={s.headerLink} to="/signin">
              <span className={s.headerItem}>Войти</span>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

type DropDownMenuPropsType = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  handleProfileClick: () => void;
  handleLogout: () => void;
};

const DropDownMenu = ({
  anchorEl,
  open,
  handleClose,
  handleProfileClick,
  handleLogout
}: DropDownMenuPropsType) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}>
      <MenuItem onClick={handleProfileClick}>
        <PersonOutlineIcon />
        Профайл
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon /> Выйти
      </MenuItem>
    </Menu>
  );
};
