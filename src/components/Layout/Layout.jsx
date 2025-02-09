import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';
import PropTypes, {string} from 'prop-types';
import './Layout.css';
import { ThemeContext } from '../../context/context';
import cn from 'classnames';
import { useContext } from 'react';

export default function Layout(className) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="wrapper">
         <Header/>
        <div className={cn('container', theme)}>
         <Outlet/>
         </div>
         <Footer/>
        </div>
    )
}

Layout.propTypes = {
    className: PropTypes.string
}