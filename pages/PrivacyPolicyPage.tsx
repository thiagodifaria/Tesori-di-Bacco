
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { APP_NAME } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Política de Privacidade"
          subtitle={`Sua privacidade é importante para ${APP_NAME}. Esta política descreve como coletamos, usamos e protegemos suas informações.`}
          alignment="left"
        />

        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-charcoal-gray prose-p:font-sans prose-p:text-gray-700 prose-a:text-burgundy-accent hover:prose-a:underline">
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-md" role="alert">
            <h3 className="font-bold text-yellow-800">Nota Importante Sobre Este Projeto</h3>
            <p className="text-sm text-yellow-700">
              A plataforma '${APP_NAME}' é um projeto pessoal de demonstração e estudo, desenvolvido por um entusiasta da programação e do mundo do vinho. Não possui fins comerciais e <strong>não coleta ou armazena dados pessoais de usuários além de simulações de funcionalidade interna (por exemplo, dados de login e preferência de plano salvos localmente no seu navegador para fins de demonstração)</strong>. Todas as informações referentes a vinhos, produtores, restaurantes e personalidades são utilizadas de forma ilustrativa e educacional, com o objetivo de demonstrar habilidades técnicas e conceituais em desenvolvimento web. Este não é um serviço comercial real.
            </p>
          </div>

          <h2 className="font-serif text-2xl mt-8 mb-4">1. Introdução</h2>
          <p>
            Esta Política de Privacidade aplica-se a todas as informações (simuladas) coletadas ou processadas pela plataforma ${APP_NAME} ("Plataforma", "Nós"). Entendemos a importância da privacidade e estamos comprometidos em proteger quaisquer dados (simulados) que você possa fornecer durante a interação com esta aplicação demonstrativa.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">2. Informações (Simuladas) que Coletamos</h2>
          <p>
            Para fins de demonstração das funcionalidades da plataforma, podemos simular a coleta dos seguintes tipos de informações:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Informações de Registro:</strong> Nome, endereço de e-mail e senha (armazenados localmente no seu navegador para simular login).</li>
            <li><strong>Preferências de Assinatura:</strong> O plano escolhido e preferências (simuladas) de vinho para demonstrar a personalização.</li>
            <li><strong>Informações de Navegação:</strong> Para fins de funcionalidade da interface, como manter o estado da verificação de idade (armazenado na sessão do seu navegador).</li>
          </ul>
          <p>
            <strong>Reiteramos: Nenhum desses dados é transmitido para um servidor externo ou armazenado de forma persistente fora do seu próprio navegador para fins comerciais ou de rastreamento real.</strong>
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">3. Como (Simulamos) Usar Suas Informações</h2>
          <p>
            As informações simuladas são usadas exclusivamente para:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Permitir o funcionamento das funcionalidades de login e área de membros.</li>
            <li>Demonstrar a personalização de conteúdo com base em planos de assinatura (simulados).</li>
            <li>Manter a verificação de idade durante sua sessão de navegação.</li>
          </ul>

          <h2 className="font-serif text-2xl mt-8 mb-4">4. Compartilhamento de Informações (Simulado)</h2>
          <p>
            Como este é um projeto de demonstração, nenhuma informação pessoal real é coletada para ser compartilhada com terceiros. Qualquer funcionalidade que sugira compartilhamento (ex: integrações sociais) é puramente ilustrativa.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">5. Segurança de Dados (Simulada)</h2>
          <p>
            Embora não haja coleta real de dados sensíveis, a aplicação é desenvolvida com práticas de segurança em mente, como se estivesse lidando com dados reais (ex: uso de HTTPS se implantado, tratamento adequado de entradas). Os dados de login (simulados) são armazenados localmente no seu navegador.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">6. Cookies e Tecnologias de Rastreamento (Simulados)</h2>
          <p>
            A plataforma pode usar armazenamento local (localStorage/sessionStorage) do navegador para funcionalidades essenciais, como manter o estado de login e verificação de idade. Não utilizamos cookies para rastreamento comercial ou publicidade.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">7. Seus Direitos (Contexto Demonstrativo)</h2>
          <p>
            Em um cenário real, você teria direitos sobre seus dados pessoais (acesso, correção, exclusão, etc.). Como este é um projeto de demonstração, você pode limpar os dados armazenados localmente pelo seu navegador (cache e dados de sites) para remover qualquer informação de login simulada.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">8. Alterações a esta Política de Privacidade</h2>
          <p>
            Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças (simuladas) em nossas práticas ou por outras razões operacionais, legais ou regulatórias.
          </p>

          <h2 className="font-serif text-2xl mt-8 mb-4">9. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre o funcionamento da plataforma como um projeto de demonstração, sinta-se à vontade para entrar em contato através dos canais fornecidos na página de "Contato".
          </p>

          <p className="mt-8 text-sm"><em>Última atualização: 28 de Julho de 2024.</em></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
