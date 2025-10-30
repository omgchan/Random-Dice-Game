import UserView from './Components/firstPage/UserView'
import './App.css'
import { useState } from 'react';
import Game from './Components/Game/Game';
import Rules from './Components/Rules';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  
  console.log('Rendering App, isGameStarted:', isGameStarted);
  
  const toggleDisplay = () => {
      console.log('Button clicked!');
      setIsGameStarted(prev => !prev);    
  }
  
  return (
    <>
    {
      isGameStarted ? <Game/> : <UserView toggle={toggleDisplay}/>
    }
    
    </>
  )
}

export default App