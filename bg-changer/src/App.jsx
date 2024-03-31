import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    
      <div style={{backgroundColor:color, height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <div className='miniContainer'>
            <div className='divs'><button style={{color:color}} onClick={()=>setColor("red")}>    red </button></div>
            <div className='divs'><button style={{color:color}} onClick={()=>setColor("yellow")}> yellow </button></div>
            <div className='divs'><button style={{color:color}} onClick={()=>setColor("white")}>  white </button></div>
            <div className='divs'><button style={{color:color}} onClick={()=>setColor("violet")}> violet </button></div>
            <div className='divs'><button style={{color:color}} onClick={()=>setColor("blue")}>   blue</button></div>
            
            

        </div>
      </div>
    
  )
}

export default App;
