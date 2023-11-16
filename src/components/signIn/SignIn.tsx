// // SignIn.tsx
// import { useState } from 'react';
// import Modal from '../UI/Modal'; // Убедитесь, что путь к файлу Modal.tsx правильный

// const SignIn = () => {
//   const [isModalOpen, setModalOpen] = useState(true); // Задаем true для автоматического отображения модального окна

//   // Функция для закрытия модального окна
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div>
//       <Modal
//         open={isModalOpen}
//         onClose={closeModal}
//         backgroundColor="white"
//         borderColor="gray-300"
//         borderRadius="10px"
//         width="96"
//         padding="4"
//       >
//         <h2 className="text-lg font-bold mb-4">Заголовок модального окна</h2>
//         <p>Здесь может быть ваше содержимое...</p>
//         <button
//           className="mt-4 bg-red-500 text-white p-2 rounded"
//           onClick={closeModal}
//         >
//           Закрыть
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default SignIn;
