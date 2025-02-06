import Menu from "../Menu/Menu";
import {useNavigate} from "react-router-dom";
//import classNames from 'classnames'
import './Header.css';
import Button from "../Button/Button";
import useResize from "../../hooks/useResize";
import Burger from '../Burger/Burger';
import {useState} from 'react';

export default function Header() {
    const navigate = useNavigate()
    const width = useResize();
    const [isOpen, setOpen] = useState();

     return (
        <header className = "header">
            <div className="logo">NEVSKII</div>
            {width > 768 && <Menu/>}
            {width <= 768 && <Burger/>}
            <Button className="button-contact" onClick={() => navigate('contacts')} label= "Контакты"/>
        </header>
    )
}