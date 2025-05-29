
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { APP_NAME } from '../constants';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Termos e Condições"
          subtitle={`Bem-vindo(a) ao ${APP_NAME}. Ao acessar e usar nossa plataforma, você concorda em cumprir os seguintes termos e condições.`}
          alignment="left"
        />

        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-charcoal-gray prose-p:font-sans prose-p:text-gray-700 prose-a:text-burgundy-accent hover:prose-a:underline">
          <h2 className="font-serif text-2xl mt-8 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao se registrar e utilizar os serviços do ${APP_NAME} ("Plataforma", "Nós"), você ("Usuário") concorda e se compromete a cumprir integralmente com estes Termos e Condições de Uso, bem como com nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não deverá utilizar nossos serviços.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">2. Elegibilidade e Idade Mínima</h2>
          <p>
            Os serviços do ${APP_NAME} são destinados exclusivamente a indivíduos maiores de 18 anos. Ao utilizar a Plataforma, você declara e garante que possui idade legal para consumir bebidas alcoólicas em seu país de residência e para celebrar um contrato vinculativo conosco. Reservamo-nos o direito de solicitar comprovação de idade e de recusar o serviço a qualquer pessoa que não cumpra este requisito.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">3. Serviços Oferecidos</h2>
          <p>
            O ${APP_NAME} é um clube de vinhos por assinatura que oferece curadoria e entrega de vinhos selecionados, acesso a conteúdo educacional e enogastronômico, e outros benefícios relacionados, conforme descrito nos diferentes planos de assinatura disponíveis na Plataforma.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">4. Contas de Usuário e Segurança</h2>
          <p>
            Para acessar determinados recursos da Plataforma, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrerem em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">5. Planos de Assinatura, Pagamentos e Cancelamento</h2>
          <p>
            Os detalhes sobre os planos de assinatura, preços, ciclos de faturamento, políticas de entrega, pausa e cancelamento são descritos na seção "Nossos Planos" e podem ser gerenciados na sua "Área de Membros". Os pagamentos são recorrentes e serão cobrados automaticamente de acordo com o plano escolhido. Você pode cancelar sua assinatura a qualquer momento, respeitando o aviso prévio estipulado.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente na Plataforma, incluindo textos, gráficos, logotipos, imagens, vídeos, compilações de dados e software, é propriedade do ${APP_NAME} ou de seus fornecedores de conteúdo e protegido pelas leis de direitos autorais internacionais. Você concorda em não reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do Serviço sem nossa permissão expressa por escrito.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">7. Conduta do Usuário</h2>
          <p>
            Você concorda em não usar a Plataforma para fins ilegais ou proibidos por estes Termos. Você não deve tentar obter acesso não autorizado a quaisquer sistemas ou redes conectados à Plataforma.
          </p>
          
          <h2 className="font-serif text-2xl mt-8 mb-4">8. Limitação de Responsabilidade</h2>
          <p>
            O ${APP_NAME} envida todos os esforços para garantir a precisão das informações e a qualidade dos produtos. No entanto, não garantimos que o serviço será ininterrupto, pontual, seguro ou livre de erros. Na máxima extensão permitida por lei, o ${APP_NAME} não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares resultantes do uso ou da incapacidade de usar o serviço.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">9. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação na Plataforma. O uso continuado da Plataforma após tais alterações constitui sua aceitação dos novos Termos.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">10. Lei Aplicável</h2>
          <p>
            Estes Termos e Condições serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, sem consideração a conflitos de disposições legais.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">11. Contato</h2>
          <p>
            Para quaisquer dúvidas ou esclarecimentos sobre estes Termos e Condições, entre em contato conosco através dos canais disponibilizados na página de "Contato".
          </p>

          <p className="mt-8 text-sm"><em>Última atualização: 28 de Julho de 2024.</em></p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
