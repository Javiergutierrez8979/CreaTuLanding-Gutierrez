import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Contenedor from './componentes/Contenedor';
import CartWidget from './componentes/CartWidget';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
             <NavBar/>
    </Router>

    <Router>
      <Contenedor/>
    </Router>



  
    </>
  )
}

export default App
