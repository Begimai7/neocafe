// import React from 'react';
// interface ModalProps {
//   isOpen: boolean;
//   children: React.ReactNode;
//   onClose: () => void;
//   borderClass?: string;
//   width: string;
//   height: string;
// }
// const Modal: React.FC<ModalProps> = ({
//   isOpen,
//   children,
//   onClose,
//   borderClass,
//   width,
//   height,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal modal-open">
//       <div
//         className={`modal-box fixed rounded ${borderClass} ${width} ${height}`}
//       >
//         <span
//           className="cursor-pointer	absolute top-0 right-2 "
//           onClick={onClose}
//         >
//           x
//         </span>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;
