import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import propTypes, {string} from 'prop-types';
import './Layout.css';


export default function Layout({children, className}) {
    return (
        <>
         <Header/>
         <main className = {className}>
            {children}
         </main> 
         <Footer/>
        </>
    )
}

Layout.propTypes = {
    children: propTypes.node,
    className: string
};