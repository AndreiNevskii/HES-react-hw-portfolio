import Menu from "../Menu/Menu";
import {useNavigate} from "react-router-dom";
//import classNames from 'classnames'
import './Header.css';
import Button from "../Button/Button";


export default function Header() {
    const navigate = useNavigate()
     return (
        <header className = "header">
            <div className="logo">NEVSKII</div>
            <Menu/>
            <Button className="button-contact" onClick={() => navigate('contacts')} label= "Контакты"/>
        </header>
    )
}