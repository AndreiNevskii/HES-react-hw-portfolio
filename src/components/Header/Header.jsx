import Menu from "../Menu/Menu";
import {useNavigate} from "react-router-dom";
//import classNames from 'classnames'
import './Header.css';
import Button from "../Button/Button";
import useResize from "../../hooks/useResize";
import Burger from '../Burger/Burger';
import {useState} from 'react';
import {NavLink} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import cn from 'classnames';

export default function Header() {
    const navigate = useNavigate()
    const width = useResize();
    const [isOpen, setOpen] = useState(false);
    const {toggleTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);

     return (
        <header className = {cn('header', theme)}>
            <div className="logo">NEVSKII</div>
            {width > 768 && <Menu/>}
            {width <= 768 && <Burger onClick={() => setOpen(state => !state)}/>}
            <Button className="button-contact" onClick={() => navigate('contacts')} label= "Контакты"/>
            <Button className="button-theme" label="Сменить тему" onClick={() => toggleTheme()}/>   
            {isOpen && width <= 768 && <Menu className="menu"/>}  
            {width <= 768 && <NavLink onClick={() => setOpen(state => !state)}/>}
        </header>
    )
}