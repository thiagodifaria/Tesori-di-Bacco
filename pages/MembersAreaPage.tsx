
import React, { useState } from 'react';
import { useAuth } from '../App';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { MOCK_SUBSCRIPTION_TIERS, APP_NAME } from '../constants';
import { RoutePath, SubscriptionTier } from '../types';
import StarIcon from '../components/icons/StarIcon';
import WineGlassIcon from '../components/icons/WineGlassIcon';

const MembersAreaPage: React.FC = () => {
  const auth = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; message: string; action?: () => void }>({ title: '', message: '' });
  const [selectedPlanForUpgrade, setSelectedPlanForUpgrade] = useState<string>(auth?.currentTier?.id || '');

  if (!auth || !auth.currentUser || !auth.currentTier) {
    return <div className="p-8 text-center text-xl">Carregando dados do membro...</div>;
  }

  const { currentUser, currentTier } = auth;

  const openModal = (title: string, message: string, action?: () => void) => {
    setModalContent({ title, message, action });
    setIsModalOpen(true);
  };

  const handleUpgradeDowngrade = () => {
    openModal("Alteração de Plano", `Seu plano seria alterado para ${MOCK_SUBSCRIPTION_TIERS.find(t => t.id === selectedPlanForUpgrade)?.name || 'o selecionado'}. Esta é uma simulação.`, () => {
        const newTier = MOCK_SUBSCRIPTION_TIERS.find(t => t.id === selectedPlanForUpgrade);
        setIsModalOpen(false);
        alert(`(Simulação) Plano alterado para: ${newTier?.name}`);
    });
  };
  
  const mockOrders = [
    { id: 'order1', date: '15/07/2024', planName: currentTier.name, status: 'Enviado', total: `R$ ${currentTier.pricePerMonth}`},
    { id: 'order2', date: '15/06/2024', planName: currentTier.name, status: 'Entregue', total: `R$ ${currentTier.pricePerMonth}`},
    { id: 'order3', date: '15/05/2024', planName: currentTier.name, status: 'Entregue', total: `R$ ${currentTier.pricePerMonth}`},
  ];

  const eliteTierName = MOCK_SUBSCRIPTION_TIERS.find(t => t.id === 'tier6')?.name || "L'Elite di Bacco";


  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={`Bem-vindo(a) de volta, ${currentUser.name.split(' ')[0]}!`}
          subtitle={`Gerencie sua assinatura ${currentTier.name} e explore os benefícios exclusivos de ser um membro ${APP_NAME}.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 sm:p-8 bg-light-warm-grey rounded-lg shadow-xl">
              <h3 className="text-2xl font-serif text-charcoal-gray mb-6 border-b border-gray-300 pb-3">Sua Assinatura Atual</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Plano</p>
                  <p className="text-xl font-semibold text-burgundy-accent">{currentTier.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valor Mensal</p>
                  <p className="text-xl font-semibold text-charcoal-gray">R$ {currentTier.pricePerMonth}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Próxima Cobrança</p>
                  <p className="text-xl font-semibold text-charcoal-gray">15/08/2024 (Exemplo)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Próxima Entrega</p>
                  <p className="text-xl font-semibold text-charcoal-gray">20/08/2024 (Exemplo)</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-0 sm:flex sm:space-x-3">
                <Button onClick={() => openModal("Pausar Assinatura", "Sua assinatura seria pausada. Esta é uma simulação.")} variant="outline" size="sm">Pausar Assinatura</Button>
                <Button onClick={() => openModal("Cancelar Assinatura", "Tem certeza que deseja cancelar? Sentiremos sua falta! Esta é uma simulação.")} variant="text" className="!text-red-600 hover:!text-red-800" size="sm">Cancelar Assinatura</Button>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-light-warm-grey rounded-lg shadow-xl">
              <h3 className="text-2xl font-serif text-charcoal-gray mb-6 border-b border-gray-300 pb-3">Alterar Plano</h3>
                <p className="text-sm text-gray-600 mb-4">Deseja explorar novos horizontes ou ajustar sua experiência {APP_NAME}? Veja outros planos disponíveis.</p>
                <div className="mb-4">
                    <label htmlFor="plan-select" className="block text-sm font-medium text-gray-700 mb-1">Selecione o novo plano:</label>
                    <select 
                        id="plan-select" 
                        value={selectedPlanForUpgrade}
                        onChange={(e) => setSelectedPlanForUpgrade(e.target.value)}
                        className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:ring-gold-accent focus:border-gold-accent appearance-none bg-ice-white pr-10 text-sm text-charcoal-gray"
                    >
                        {MOCK_SUBSCRIPTION_TIERS.filter(t => !t.isInviteOnly && t.id !== currentTier.id).map(tier => (
                            <option key={tier.id} value={tier.id}>{tier.name} (R$ {tier.pricePerMonth}/mês)</option>
                        ))}
                         {MOCK_SUBSCRIPTION_TIERS.filter(t => !t.isInviteOnly && t.id === currentTier.id).length === 0 && MOCK_SUBSCRIPTION_TIERS.find(t => !t.isInviteOnly && t.id === MOCK_SUBSCRIPTION_TIERS[0].id) && (
                            <option key={MOCK_SUBSCRIPTION_TIERS[0].id} value={MOCK_SUBSCRIPTION_TIERS[0].id} disabled={MOCK_SUBSCRIPTION_TIERS[0].id === currentTier.id}>
                                {MOCK_SUBSCRIPTION_TIERS[0].name} (R$ {MOCK_SUBSCRIPTION_TIERS[0].pricePerMonth}/mês) {MOCK_SUBSCRIPTION_TIERS[0].id === currentTier.id ? "(Atual)" : ""}
                            </option>
                        )}
                    </select>
                </div>
              <Button onClick={handleUpgradeDowngrade} variant="primary" disabled={selectedPlanForUpgrade === currentTier.id || !selectedPlanForUpgrade}>Alterar Plano (Simulação)</Button>
               <Link to={RoutePath.MembershipPlans} className="ml-0 mt-2 sm:ml-4 sm:mt-0 text-sm text-burgundy-accent hover:underline block sm:inline-block">Ver detalhes de todos os planos</Link>
            </div>

            {currentTier.id === 'tier5' && (
              <div className="p-6 sm:p-8 bg-gold-accent/10 border border-gold-accent rounded-lg shadow-xl text-center">
                <StarIcon className="mx-auto h-10 w-10 text-gold-accent mb-3" />
                <h3 className="text-2xl font-serif text-charcoal-gray mb-3">{eliteTierName}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Como membro {currentTier.name}, você está entre os mais distintos apreciadores. "{eliteTierName}" representa o ápice da exclusividade, acessível apenas por convite. Continue sua jornada conosco para mais descobertas.
                </p>
                <Button onClick={() => alert(`Mais informações sobre ${eliteTierName} seriam apresentadas aqui. (Simulação)`)} variant="outline" className="!border-gold-accent !text-gold-accent hover:!bg-gold-accent hover:!text-ice-white">Saber Mais (Conceitual)</Button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-light-warm-grey rounded-lg shadow-xl">
              <h3 className="text-xl font-serif text-charcoal-gray mb-4 border-b border-gray-300 pb-2">Detalhes Pessoais</h3>
              <p className="text-sm"><strong className="text-gray-600">Nome:</strong> {currentUser.name}</p>
              <p className="text-sm"><strong className="text-gray-600">Email:</strong> {currentUser.email}</p>
              <p className="text-sm"><strong className="text-gray-600">Endereço:</strong> {currentUser.address || 'Não informado'}</p>
              <Button onClick={() => openModal("Editar Detalhes", "Aqui você poderia editar seus dados pessoais. Esta é uma simulação.")} variant="text" size="sm" className="mt-3 !px-0">Editar Detalhes</Button>
            </div>

            <div className="p-6 bg-light-warm-grey rounded-lg shadow-xl">
              <h3 className="text-xl font-serif text-charcoal-gray mb-4 border-b border-gray-300 pb-2">Detalhes de Pagamento</h3>
              <p className="text-sm"><strong className="text-gray-600">Método:</strong> Cartão de Crédito final {currentUser.paymentMethod?.slice(-4) || 'Não informado'}</p>
              <Button onClick={() => openModal("Atualizar Pagamento", "Aqui você poderia atualizar seu método de pagamento. Esta é uma simulação.")} variant="text" size="sm" className="mt-3 !px-0">Atualizar Pagamento</Button>
            </div>
            
            <div className="p-6 bg-light-warm-grey rounded-lg shadow-xl">
              <h3 className="text-xl font-serif text-charcoal-gray mb-4 border-b border-gray-300 pb-2">Histórico de Pedidos</h3>
              {mockOrders.length > 0 ? (
                <ul className="space-y-3">
                  {mockOrders.map(order => (
                    <li key={order.id} className="text-sm p-3 border border-gray-200 rounded-md bg-ice-white">
                      <div className="flex justify-between items-center">
                        <span>{order.date} - {order.planName}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${order.status === 'Entregue' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{order.status}</span>
                      </div>
                      <p className="text-xs text-gray-500">Total: {order.total}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">Nenhum pedido anterior.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
        <p className="mb-6 text-sm">{modalContent.message}</p>
        <div className="flex justify-end space-x-3">
          <Button onClick={() => setIsModalOpen(false)} variant="outline" size="sm">Cancelar</Button>
          {modalContent.action && <Button onClick={modalContent.action} size="sm">Confirmar</Button>}
        </div>
      </Modal>
    </div>
  );
};

export default MembersAreaPage;
