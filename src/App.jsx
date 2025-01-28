import {Route, Routes} from 'react-router-dom';
import Main from './components/routes/Main/Main';
import './App.css';

export default function App() {
   return (
     <Routes>
       <Route path="/" element = {<Main/>}/>
    </Routes>
  )
}
