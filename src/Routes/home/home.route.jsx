import { useEffect, useState } from 'react';
import '../../App.css'

const HomeRoute = ({counter}) => {

  const [value, setValue] = useState(counter);

  useEffect(() => {
    const continueCounter = setInterval(() => {
        setValue((value) =>
          value === 105 ? (clearInterval(continueCounter), setValue(105)) : value + 1);
      }, 255);
  }, [])
  return (
    <div className={value === 105 ? 'cisco' : 'content'}>
      <h1>Ciisco Mahomed</h1>
    </div>
  );
};


export default HomeRoute;