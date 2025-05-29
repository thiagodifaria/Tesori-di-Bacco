

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Button from './Button';
import LegalTextModal from './LegalTextModal';
import { 
  APP_FULL_NAME, 
  APP_NAME, 
  AGE_VERIFICATION_TITLE_STEP_1, 
  AGE_VERIFICATION_TITLE_STEP_2,
  AGE_VERIFICATION_TERMS_LINK_TEXT,
  AGE_VERIFICATION_PRIVACY_LINK_TEXT,
  TERMS_CONTENT_MODAL,
  PRIVACY_POLICY_CONTENT_MODAL,
  DRINK_RESPONSIBLY_MSG
} from '../constants';
import { RoutePath } from '../types';

const formatCPFInput = (value: string): string => {
  const onlyDigits = value.replace(/\D/g, '');
  
  if (onlyDigits.length <= 11) {
    let formatted = onlyDigits;
    if (formatted.length > 3) {
      formatted = formatted.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (formatted.length > 7) {
      formatted = formatted.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (formatted.length > 11) {
      formatted = formatted.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
    return formatted.substring(0, 14);
  }
  
  return onlyDigits.substring(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

interface AgeVerificationModalProps {
  isOpen: boolean;
  onVerify: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ isOpen, onVerify }) => {
  const [docInput, setDocInput] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [step, setStep] = useState(1);

  const [showLegalModal, setShowLegalModal] = useState<'TERMS' | 'PRIVACY' | null>(null);
  
  const navigate = useNavigate();

  const isStep1FormValid = docInput.trim() !== '' && isTermsAccepted && isPrivacyAccepted;

  const handleDocInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocInput(formatCPFInput(e.target.value));
  };

  const handleProceedStep1 = () => {
    if (isStep1FormValid) {
      sessionStorage.setItem(`isAgeVerified_${APP_NAME.replace(/\s/g, '_')}`, 'true');
      setStep(2);
    }
  };
  
  const handlePathwaySelection = (path: RoutePath | null) => {
    onVerify();
    if (path) {
      navigate(path);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setDocInput('');
      setIsTermsAccepted(false);
      setIsPrivacyAccepted(false);
      setStep(1);
      setShowLegalModal(null);
    }
  }, [isOpen]);


  return (
    <>
      <Modal 
        isOpen={isOpen} 
        title={step === 1 ? AGE_VERIFICATION_TITLE_STEP_1 : AGE_VERIFICATION_TITLE_STEP_2} 
        hideCloseButton={step === 1}
        onClose={step === 2 ? onVerify : undefined}
        size={step === 1 ? 'md' : 'sm'}
      >
        {step === 1 && (
          <div className="text-left">
            <p className="mb-4 text-sm text-charcoal-gray font-sans leading-relaxed">
              Para acessar nosso clube de vinhos e explorar nossas descobertas enológicas, por favor, confirme sua maioridade informando seu CPF e aceite nossos termos.
            </p>
            
            <div className="mb-4">
              <label htmlFor="doc-input" className="block text-xs font-medium text-gray-600 mb-1 font-sans">CPF</label>
              <input
                type="text"
                id="doc-input"
                value={docInput}
                onChange={handleDocInputChange}
                placeholder="CPF: 000.000.000-00"
                className="w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors text-sm font-sans"
                maxLength={14} 
              />
            </div>

            <div className="space-y-3 mb-6">
              <label htmlFor="terms-checkbox" className="flex items-start text-sm text-charcoal-gray font-sans cursor-pointer">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  checked={isTermsAccepted}
                  onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                  className="h-4 w-4 text-burgundy-accent border-gray-300 rounded focus:ring-gold-accent mt-0.5 mr-2.5 flex-shrink-0"
                />
                <span>
                  Li e aceito os{' '}
                  <button 
                    onClick={() => setShowLegalModal('TERMS')} 
                    className="font-semibold text-burgundy-accent hover:underline focus:outline-none"
                  >
                    {AGE_VERIFICATION_TERMS_LINK_TEXT}
                  </button>.
                </span>
              </label>
              <label htmlFor="privacy-checkbox" className="flex items-start text-sm text-charcoal-gray font-sans cursor-pointer">
                <input
                  type="checkbox"
                  id="privacy-checkbox"
                  checked={isPrivacyAccepted}
                  onChange={() => setIsPrivacyAccepted(!isPrivacyAccepted)}
                  className="h-4 w-4 text-burgundy-accent border-gray-300 rounded focus:ring-gold-accent mt-0.5 mr-2.5 flex-shrink-0"
                />
                <span>
                  Li e aceito a{' '}
                  <button 
                    onClick={() => setShowLegalModal('PRIVACY')}
                    className="font-semibold text-burgundy-accent hover:underline focus:outline-none"
                  >
                    {AGE_VERIFICATION_PRIVACY_LINK_TEXT}
                  </button>.
                </span>
              </label>
            </div>
            
            <Button onClick={handleProceedStep1} fullWidth variant="primary" size="lg" disabled={!isStep1FormValid}>
              Confirmar e Prosseguir
            </Button>
            <p className="mt-4 text-xs text-gray-500 font-sans text-center">
             {DRINK_RESPONSIBLY_MSG} Produto destinado a adultos.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="text-center space-y-4 py-4">
             <p className="mb-6 text-base text-charcoal-gray font-sans">
                Sua idade foi verificada. Escolha como deseja iniciar sua experiência {APP_NAME}.
            </p>
            <Button onClick={() => handlePathwaySelection(RoutePath.Login)} fullWidth variant="primary" size="md">
              Login
            </Button>
            <Button onClick={() => handlePathwaySelection(RoutePath.SignUp)} fullWidth variant="outline" size="md">
              Registrar-se
            </Button>
            <Button onClick={() => handlePathwaySelection(null)} fullWidth variant="text" size="md" className="!text-charcoal-gray hover:!text-burgundy-accent">
              Explorar o Site como Convidado
            </Button>
          </div>
        )}
      </Modal>

      <LegalTextModal
        isOpen={showLegalModal === 'TERMS'}
        onClose={() => setShowLegalModal(null)}
        title={AGE_VERIFICATION_TERMS_LINK_TEXT}
        contentHTML={TERMS_CONTENT_MODAL}
      />
      <LegalTextModal
        isOpen={showLegalModal === 'PRIVACY'}
        onClose={() => setShowLegalModal(null)}
        title={AGE_VERIFICATION_PRIVACY_LINK_TEXT}
        contentHTML={PRIVACY_POLICY_CONTENT_MODAL}
      />
    </>
  );
};

export default AgeVerificationModal;