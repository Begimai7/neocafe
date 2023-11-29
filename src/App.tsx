import useToast from './components/Toastify';
import { useState } from 'react';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { Toastify } = useToast();

  const handleClick = () => {
    Toastify('Напоминание!', 'Your warning message', 'warning', setShowOverlay);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Here</button>
      {showOverlay && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" />}
    </div>
  );
}

export default App;
