import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: string;
  hideCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  hideCloseButton = false,
  size = 'lg'
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm font-sans animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        className={`relative bg-ice-white p-6 sm:p-8 rounded-xl shadow-2xl w-11/12 ${sizeClasses[size]} transform transition-all duration-300 ease-out scale-100 m-4`}
      >
        {title && (
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal-gray mb-6 text-center">{title}</h2>
        )}
        {!hideCloseButton && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-burgundy-accent transition-colors p-1.5 rounded-full hover:bg-light-warm-grey focus:outline-none focus:ring-2 focus:ring-gold-accent"
            aria-label="Fechar modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <div className="text-charcoal-gray">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
