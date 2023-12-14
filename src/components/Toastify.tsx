import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useToast() {
  const Toastify = (
    title: string,
    message: string,
    type: string,
    setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const toastOptions: ToastOptions = {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: 'light',
      className: 'fixed top-0 right-0 rounded-bl-[30px]',
      onClose: () => setShowOverlay(false),
      onOpen: () => setShowOverlay(true),
    };

    if (type === 'success' || type === 'error' || type === 'warning') {
      toast[type](
        <div className="flex justify-center flex-col items-center p-16px min-w-[50vw] min-h-[10vh] text-black bg-blue-500">
          <h6 className="font-bold">{title}</h6>
          <p>{message}</p>
        </div>,
        toastOptions,
      );
    } else {
      console.error(`Invalid toast type: ${type}`);
    }
  };

  return { Toastify };
}

export default useToast;

// Пример использоваия

// const [showOverlay, setShowOverlay] = useState(false);
//   const { Toastify } = useToast();

//   const handleClick = () => {
//     Toastify("Напоминание!", "Your warning message", "warning", setShowOverlay);
//   };

// {showOverlay && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" />}
