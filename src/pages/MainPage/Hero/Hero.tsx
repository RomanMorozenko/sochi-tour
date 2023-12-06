import s from './hero.module.css';
import { HeroButton } from './HeroButton/HeroButton.tsx';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Hero = () => {
  const [activeBtn, setActiveBtn] = useState('1');

  return (
    <div className={s.hero}>
      <div className={s.slogan}>
        <span className={s.sloganLineOne}>Коллекционируйте</span>
        <span className={s.sloganLineTwo}>счастливые дни</span>
      </div>
      <div className={'wrapper' + ' ' + s.buttonsWrapper}>
        <NavLink to="/">
          <HeroButton id="1" activeBtn={activeBtn} setActiveBtn={setActiveBtn} name="Главная" />
        </NavLink>
        <NavLink to="tours">
          <HeroButton
            id="2"
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}
            name="Авторские туры"
          />
        </NavLink>
        <NavLink to="excursions">
          <HeroButton id="3" activeBtn={activeBtn} setActiveBtn={setActiveBtn} name="Экскурсии" />
        </NavLink>
        <NavLink to="booking">
          <HeroButton id="4" activeBtn={activeBtn} setActiveBtn={setActiveBtn} name="Букинг" />
        </NavLink>
      </div>
    </div>
  );
};
