import React, { FC } from 'react';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = ({ children, open, onClose, className }) => {
  const modalClasses = open
    ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md z-50 overflow-y-auto bg-white '
    : 'hidden';

  return (
    <div className={`${modalClasses} ${className}`} onClick={() => onClose()}>
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
