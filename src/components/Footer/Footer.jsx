import { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import cn from 'classnames';
import './Footer.css'

export default function Footer(className) {
    let date = (new Date()).getFullYear();
    const {theme} = useContext(ThemeContext)


    return (
        <footer className='footer'>
          &copy; Все права защищены "Андрей". {date}
        </footer>
    )
}