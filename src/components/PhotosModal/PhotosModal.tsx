import s from './photosModal.module.css';
// import { SingleItemSlider } from '../SingleItemSlider/SingleItemSlider.tsx';

type PhotosModalPropsType = {
  active: boolean;
  setActive: () => void;
};

export const PhotosModal = (props: PhotosModalPropsType) => {
  const className = props.active ? s.modalOverlay + ' ' + s.active : s.modalOverlay;

  return (
    <div className={className} onClick={() => props.setActive()}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {/* <SingleItemSlider /> */}
      </div>
    </div>
  );
};
