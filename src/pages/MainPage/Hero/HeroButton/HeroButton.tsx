import s from './heroButton.module.css';


export const HeroButton = (props:any) => {

    const className = props.activeBtn === props.id ? s.active : s.heroButton

    const onClick = () => props.setActiveBtn(props.id)

    return <button onClick={onClick} className={className}>
        {props.name}
    </button>
}