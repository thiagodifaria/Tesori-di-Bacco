
import React from 'react';
import Modal from './Modal';

interface LegalTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  contentHTML: string;
}

const LegalTextModal: React.FC<LegalTextModalProps> = ({ isOpen, onClose, title, contentHTML }) => {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="xl">
      <div 
        className="prose prose-sm sm:prose-base max-h-[60vh] sm:max-h-[70vh] overflow-y-auto p-1 font-sans text-charcoal-gray 
                   prose-headings:font-serif prose-headings:text-charcoal-gray prose-headings:font-semibold 
                   prose-a:text-burgundy-accent hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </Modal>
  );
};

export default LegalTextModal;
