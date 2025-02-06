import {useState, useEffect} from 'react';

export default function useResize() {
  const[width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handlResize = () => {setWidth(window.innerWidth)}
    window.addEventListener("resize", handlResize); 
    return () => {
        window.removeEventListener("resize", handlResize);  
    }

  }, [])
  return width;
}