import s from './mainPageSection.module.scss';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../app/store.ts';
import {
  ExcursionCollectionResponseItemType,
  ExcursionsCollectionResponseType
} from '../../../utils/loaders.ts';
import { SectionItem } from './SectionItem/SectionItem.tsx';

type MainPageSideSectionPropsType = {
  title: string;
  param: string;
};
export const MainPageSideSection = ({ title, param }: MainPageSideSectionPropsType) => {
  const excursions: ExcursionsCollectionResponseType = useSelector(
    (state: AppRootStateType) => state[param]
  );

  return (
    <div className="wrapper">
      <h2 className={s.sectionTitle}>{title}</h2>
      <div className={s.flexContainer}>
        {excursions.map((item: ExcursionCollectionResponseItemType, index) => {
          return (
            <SectionItem
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              param={param}
              duration={item.duration}
            />
          );
        })}
      </div>
    </div>
  );
};
