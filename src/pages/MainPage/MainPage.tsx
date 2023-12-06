import { Hero } from './Hero/Hero.jsx';
import { Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div>
      <Hero />
      <Outlet />
    </div>
  );
};
