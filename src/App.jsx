import {Route, Routes} from 'react-router-dom';
import Homepage from './routes/Homepage/Homepage';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import BlogPost from './routes/BlogPost/BlogPost'
import Comments from './routes/Comments/Comments';
import './App.css';
import Layout from './components/Layout/Layout';
import { useContext } from 'react';
import { ThemeContext } from './context/context';
import cn from 'classnames';

export default function App(className) {
  const {theme} = useContext(ThemeContext)
   return (
    <div className = {theme}>
     <Routes>
      <Route path="/" element = {<Layout/>}>
       <Route index element = {<Homepage/>}/>
       <Route path="/about" element = {<About/>}/>
       <Route path="/blog" element = {<Blog/>}/>
       <Route path="/blog/:id" element = {<BlogPost/>}/>
       <Route path="/comments" element = {<Comments/>}/>
       </Route>
      </Routes>
     </div>
  )
}
