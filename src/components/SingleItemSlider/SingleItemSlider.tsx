import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';


export const SingleItemSlider = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return   <AwesomeSlider style={{marginBottom:'20px'}} cssModule={AwsSliderStyles}>
        <div style={{width:'100%',height:'100%'}} data-src="https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg" />
        <div style={{width:'100%',height:'100%'}} data-src="https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg" />
        <div style={{width:'100%',height:'100%'}} data-src="https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg" />
        <div style={{width:'100%',height:'100%'}} data-src="https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg" />
        <div style={{width:'100%',height:'100%'}} data-src="https://xn--80aabjhkiabkj9b0amel2g.xn--p1ai/static/city/9830-5971.jpg" />
    </AwesomeSlider>
}