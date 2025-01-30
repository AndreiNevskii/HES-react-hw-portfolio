import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import propTypes, {string} from 'prop-types';
import './Layout.css';


export default function Layout({children, className}) {
    return (
        <div className="wrapper">
         <Header/>
         <main className = {className}>
            {children}
         </main> 
         <Footer/>
        </div>
    )
}

Layout.propTypes = {
    children: propTypes.node,
    className: string
};