import './Burger.css'

export default function Burger({onClick}) {

        return (
          <div className='burger' onClick={onClick}>
            <span></span>
         </div>
  
    )
 
}