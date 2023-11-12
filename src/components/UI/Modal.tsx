// Modal.tsx
import React, { FC } from 'react';

// Define the types for the props
interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  backgroundColor?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
}

const Modal: FC<ModalProps> = ({
  children,
  open,
  onClose,
  backgroundColor = 'white',
  width = '96',
  height = 'auto',
  padding = '4',
  borderRadius = 'none',
  borderColor = 'gray-200',
}) => {
  // Close modal if the backdrop is clicked
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Prevent rendering on the server or if not open
  if (typeof window === 'undefined' || !open) return null;

  // Convert Tailwind class names to CSS values
  const convertWidth = (twWidth: string) => {
    switch (twWidth) {
      case '96':
        return '24rem'; // Example conversion, adapt based on your config
      // Add other cases as necessary
      default:
        return twWidth; // Default case to handle 'auto' and other values not in Tailwind config
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
        open ? '' : 'hidden'
      }`}
      onClick={onBackdropClick}
    >
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: backgroundColor,
          width: convertWidth(width),
          height: height,
          padding: padding, // Assuming padding is a valid CSS value
          borderRadius: borderRadius, // Assuming borderRadius is a valid CSS value
          borderColor: borderColor,
          borderWidth: borderColor ? '1px' : '0',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Example shadow
          zIndex: 50,
          overflowY: 'auto', // In case the content is larger than the modal
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
