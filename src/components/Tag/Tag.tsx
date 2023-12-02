import s from './tag.module.css'


export const Tag = (props:{name:string,callback:()=>void}) => {
    return <button className={s.tag}>{props.name}</button>
}