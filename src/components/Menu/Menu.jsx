import {NavLink} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import "./Menu.css";

export default function Menu() {
    const MENU = [
        {el: "На главную", to: "/", id: uuid()}, 
        {el: "Обо мне", to: "/about", id: uuid()}, 
        {el: "Отзывы", to: "/comments", id: uuid()},
        {el: "Блог", to: "/blog", id: uuid()}
    ]
    return (
        <ul className="menu">
            {MENU.map(({el, to, id}) => <NavLink key={id} to={to}> {el} </NavLink>)}
        </ul> 
    )
}