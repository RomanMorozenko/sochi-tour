import { useParams } from 'react-router-dom';
import { MainPageMainSection } from './MainPageSection/MainPageMainSection';
import { MainPageSideSection } from './MainPageSection/MainPageSideSection';

export const MainPageContainer = () => {
  const currentSection = useParams().section;

  const title = getSectionTitle(currentSection);

  return !currentSection || !title ? (
    <MainPageMainSection />
  ) : (
    <MainPageSideSection param={currentSection} title={title} />
  );
};

const getSectionTitle = (param: string = '') => {
  if (param == 'tours') {
    return 'Авторские Туры';
  } else if (param == 'excursions') {
    return 'Экскурсии';
  }
};
