import { useEffect, useState } from 'react';
import Directory from './components/directory/directory.component';
import { reveal} from './components/animations/animation.component';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100 ?
        counter + 1  :
        (clearInterval(count), setCounter(100), 
        reveal())
      ); 
    }, 170);
  }, [])

  return (
    <Directory counter={counter} />
  )
}

export default App;