import s from './header.module.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={'wrapper' + ' ' + s.container}>
        <NavLink className={s.headerLink} to="/">
          <h1 className={s.logo}>Логотип</h1>
        </NavLink>
        <div>
          <NavLink className={s.headerLink} to="/signup">
            <span className={s.headerItem}>Регистрация</span>
          </NavLink>
          <NavLink className={s.headerLink} to="login">
            <span className={s.headerItem}>Войти</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
