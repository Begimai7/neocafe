import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const getColor = (type: string) => {
//   let color: string;
//   switch (type) {
//     case 'success':
//       color = 'green';
//       break;
//     case 'error':
//       color = 'red';
//       break;
//     case 'warning':
//       color = 'blue';
//       break;
//     default:
//       color = 'black';
//   }
//   return color;
// };

// const getImg = (type: string) => {
//   let image: JSX.Element | null = null;
//   switch (type) {
//     case 'success':
//       image = (
//         <svg
//           width="57"
//           height="57"
//           viewBox="0 0 57 57"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M48.0938 16.0324L23.1562 40.9688L10.6875 28.5011"
//             stroke="#37D400"
//             stroke-width="5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       );
//       break;
//     default:
//       image = null;
//   }
//   return image;
// };

function useToast() {
  const Toastify = (title: string, message: string, type: string) => {
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
    };

    if (type === 'success' || type === 'error' || type === 'warning') {
      toast[type](
        <div className="flex justify-center flex-col items-center p-16px min-w-[50vw] min-h-[10vh] text-black">
          <h6 className='font-bold'>{title}</h6>
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
