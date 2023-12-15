import s from './SectionItem.module.scss';
import { FaHeart, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

type SectionItemPropsType = {
  id: string;
  title: string;
  price: number;
  param: string;
  duration: string;
};

export const SectionItem = ({ id, title, price, param, duration }: SectionItemPropsType) => {
  const requestParam = `/${param}/${id}`;

  return (
    <div className={s.flexItem}>
      <NavLink className={s.navlink} to={requestParam}>
        <div className={s.itemCard}>
          <FaHeart className={s.favoritesIcon} />
          <img className={s.itemImage} src="src/assets/image.jpeg" alt="image" />
          <div className={s.itemInfo}>
            <h4 className={s.itemTitle}>{title}</h4>
            <div className={s.itemDuration}>
              <AccessTimeIcon />
              {duration}
            </div>
            <div className={s.itemPrice}>
              <ConfirmationNumberIcon />
              <span>От {price} рублей</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
