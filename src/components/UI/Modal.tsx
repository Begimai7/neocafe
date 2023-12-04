import React, { FC } from 'react';

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
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (typeof window === 'undefined' || !open) return null;

  const convertWidth = (twWidth: string) => {
    switch (twWidth) {
      case '96':
        return '24rem';
      default:
        return twWidth;
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
          padding: padding,
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderColor ? '1px' : '0',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          zIndex: 50,
          overflowY: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
