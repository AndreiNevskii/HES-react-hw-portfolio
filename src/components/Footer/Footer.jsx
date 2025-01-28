import Menu from "../Menu/Menu";
import s from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={s.footer}>
            <Menu/>
        </footer>
    )
}