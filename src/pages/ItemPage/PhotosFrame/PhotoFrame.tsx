import s from './photosFrame.module.css';

type PhotosFramePropsType = {
    photos?:string[]
    callback:()=>void
}

export const PhotosFrame = (props:PhotosFramePropsType) => {

    const handleImageClick = () => {
        props.callback()
    }

    return <div className={s.container}>
        <div onClick={handleImageClick} style={{background:`url(https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg)`, backgroundSize:'cover'}} className={s.mainItem}></div>
        <div onClick={handleImageClick} className={s.sideItemOne}>
            <div onClick={handleImageClick} style={{background:`url(https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg)`, backgroundSize:'cover'}} className={s.sideItemFour} ></div>
            <div onClick={handleImageClick} className={s.sideItemFive}  >
                <div onClick={handleImageClick} style={{background:`url(https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg)`, backgroundSize:'cover'}} className={s.sideItemSix}  ></div>
                <div onClick={handleImageClick} style={{background:`url(https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg)`, backgroundSize:'cover'}} className={s.sideItemSeven}  ></div>
            </div>
        </div>
        <div onClick={handleImageClick} style={{background:`url(https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg)`,backgroundSize:'cover'}}  className={s.sideItemTwo}></div>
    </div>
}