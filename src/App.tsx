import useToast from './components/Toastify';

function App() {
  const { Toastify } = useToast();

  const handleClick = () => {
    Toastify("Напоминание!", "Your warning message", "warning");
  };

  return (
    <div>
      <button onClick={handleClick}>Показать Toast</button>
    </div>
  );
}

export default App;
