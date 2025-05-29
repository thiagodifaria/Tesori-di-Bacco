

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import WineCard from '../components/WineCard';
import { MOCK_WINES, MOCK_SUBSCRIPTION_TIERS, MOCK_TESTIMONIALS, MOCK_ARTICLES, MOCK_RESTAURANTS, APP_FULL_NAME, APP_NAME, PRIMARY_COLOR_TEXT, GOLD_ACCENT_TEXT, TEXT_COLOR } from '../constants';
import { RoutePath, SubscriptionTier, Wine, Restaurant, JournalArticle } from '../types';
import WineGlassIcon from '../components/icons/WineGlassIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import GiftIcon from '../components/icons/GiftIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import StarIcon from '../components/icons/StarIcon';

const HowItWorksStep: React.FC<{ number: number; title: string; description: string; icon?: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-4 md:p-6 max-w-xs mx-auto animate-subtleFadeInUp">
    {icon ? <div className="mb-5 text-burgundy-accent">{icon}</div> : 
    <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-5 rounded-full bg-gold-accent text-ice-white text-xl md:text-2xl font-bold shadow-md`}>
      {number}
    </div>
    }
    <h3 className="text-xl md:text-2xl font-serif text-charcoal-gray mb-2.5">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HomePage: React.FC = () => {
  const featuredWines = MOCK_WINES.slice(0, 3);
  const featuredArticles = MOCK_ARTICLES.slice(0, 2);
  const featuredRestaurantIds = ["rest1", "rest2", "rest3"]; 
  const featuredRestaurants = MOCK_RESTAURANTS.filter(r => featuredRestaurantIds.includes(r.id));
  
  const homePageSubscriptionTiers = [
    MOCK_SUBSCRIPTION_TIERS.find(t => t.id === 'tier1'), 
    MOCK_SUBSCRIPTION_TIERS.find(t => t.id === 'tier2'),
    MOCK_SUBSCRIPTION_TIERS.find(t => t.id === 'tier4')  
  ].filter(Boolean) as SubscriptionTier[];


  return (
    <div className="scroll-smooth snap-y snap-mandatory w-screen overflow-x-hidden">
      <section className="full-page-section text-center bg-light-warm-grey">
         {/*
          **********************************************************************
          * ÁREA RESERVADA PARA O FUNDO VISUAL DA SEÇÃO HERÓI (OPCIONAL)       *
          * *
          * Para adicionar uma imagem de fundo:                                *
          * <img 
          *   src="/images/hero/sua_imagem.jpg" 
          *   alt="imagem para acessibilidade"
          *   className="absolute inset-0 w-full h-full object-cover z-0" 
          * />
          * <div className="absolute inset-0 bg-black opacity-30 z-0"></div> 
          * *
          * Para um vídeo de fundo (considere o desempenho):                    *
          * <video 
          *   autoPlay 
          *   loop 
          *   muted 
          *   playsInline 
          *   className="absolute inset-0 w-full h-full object-cover z-0"
          * >
          *   <source src="/videos/your_hero_video.mp4" type="video/mp4" />
          *   Your browser does not support the video tag.
          * </video>
          * <div className="absolute inset-0 bg-black opacity-30 z-0"></div>            
          ***********************************************************************
        */}
        <div className="relative z-10 p-6 animate-fadeIn max-w-4xl">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight font-bold tracking-tight ${TEXT_COLOR}`}>
            Tesori di Bacco: L'Anima del Vino, Goccia a Goccia.
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl font-sans mb-10 max-w-3xl mx-auto text-gray-700 leading-relaxed`}>
            Receba mensalmente vinhos artesanais de curadoria especializada, com acesso a histórias, análises detalhadas e harmonizações exclusivas. Inicie sua jornada sensorial.
          </p>
          <Button to={RoutePath.MembershipPlans} variant="primary" size="lg" className="text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Descubra Nossos Planos
          </Button>
        </div>
      </section>

      
      <section className="full-page-section bg-ice-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Como Funciona Nossa Assinatura" subtitle="Uma jornada de descobertas em quatro passos simples e elegantes, pensada para sua comodidade e prazer." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <HowItWorksStep number={1} title="Escolha Seu Plano" description="Selecione o plano que mais combina com seu perfil de apreciador e suas aspirações enológicas." icon={<WineGlassIcon className="w-14 h-14 md:w-16 md:h-16" />} />
            <HowItWorksStep number={2} title="Personalize (Opcional)" description="Em planos selecionados, compartilhe suas preferências para uma curadoria ainda mais afinada com seu paladar." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 md:w-16 md:h-16"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>} />
            <HowItWorksStep number={3} title="Receba Sua Caixa Tesori" description="Vinhos cuidadosamente embalados e selecionados chegam à sua porta, prontos para serem desvendados." icon={<GiftIcon className="w-14 h-14 md:w-16 md:h-16" />} />
            <HowItWorksStep number={4} title="Descubra & Desfrute" description="Explore notas de degustação interativas, guias de harmonização e perfis completos dos vinhos em nossa plataforma." icon={<BookOpenIcon className="w-14 h-14 md:w-16 md:h-16" />} />
          </div>
           <div className="text-center mt-12 md:mt-16 animate-subtleFadeInUp" style={{animationDelay: "0.6s"}}>
            <Button to={RoutePath.MembershipPlans} variant="outline" size="lg" className="shadow hover:shadow-md">
              Ver Detalhes dos Planos
            </Button>
          </div>
        </div>
      </section>

      <section className="full-page-section bg-light-warm-grey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Seleções em Destaque do Mês" subtitle="Uma amostra dos vinhos que encantam nossos membros. Cada garrafa, uma história." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredWines.map((wine: Wine, index: number) => (
              <div key={wine.id} className="animate-subtleFadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <WineCard wine={wine} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 animate-subtleFadeInUp" style={{animationDelay: "0.6s"}}>
            <Button to={RoutePath.CollezioneFrescobaldi} variant="primary" size="lg" className="shadow-lg hover:shadow-xl">
              Explorar La Collezione Frescobaldi
            </Button>
          </div>
        </div>
      </section>

        <section className="full-page-section bg-ice-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Nossos Planos de Assinatura" subtitle={`Escolha a experiência ${APP_NAME} que mais ressoa com sua paixão pelo vinho. Três dos nossos principais planos em destaque.`} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
                    {homePageSubscriptionTiers.map((tier: SubscriptionTier, index: number) => (
                        <div key={tier.id} className={`bg-light-warm-grey p-6 md:p-8 rounded-xl shadow-xl flex flex-col transform hover:scale-105 transition-transform duration-300 animate-subtleFadeInUp border-2 ${tier.isPopular ? 'border-gold-accent' : 'border-transparent'}`} style={{animationDelay: `${index * 0.15}s`}}>
                            {tier.isPopular && <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gold-accent text-ice-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">MAIS POPULAR</span>}
                            <h3 className={`font-serif text-2xl md:text-3xl ${PRIMARY_COLOR_TEXT} mb-2 text-center`}>{tier.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 text-center h-12 font-sans">{tier.tagline}</p>
                            <p className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-1 text-center">R$ {tier.pricePerMonth}<span className="text-sm md:text-base font-normal text-gray-500">/mês</span></p>
                            <p className="text-sm text-gray-500 mb-6 text-center font-sans">{tier.bottleCountDescription}</p>
                            <ul className="space-y-2.5 text-sm text-gray-700 mb-8 flex-grow font-sans">
                                {tier.benefits.general.slice(0,2).map((benefit, idx) => ( 
                                    <li key={idx} className="flex items-start">
                                        <svg className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        {benefit}
                                    </li>
                                ))}
                                <li className="flex items-start">
                                   <svg className={`w-4 h-4 mr-2 mt-1 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                   E mais benefícios exclusivos...
                                </li>
                            </ul>
                            <Button to={`${RoutePath.MembershipPlans}#${tier.id}`} variant="primary" fullWidth className="shadow hover:shadow-md">Ver Detalhes do Plano</Button>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12 md:mt-16 animate-subtleFadeInUp" style={{animationDelay: "0.45s"}}>
                    <Button to={RoutePath.MembershipPlans} variant="outline" size="lg" className="shadow hover:shadow-md">Comparar Todos os Planos</Button>
                </div>
            </div>
        </section>

      <section className="full-page-section bg-light-warm-grey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl mx-auto">
            <div className="md:w-2/5 animate-subtleFadeInUp">
              <img src="/images/founders/luigi_mario_frescobaldi.jpg" alt="Luigi e Mario Frescobaldi, fundadores Tesori di Bacco" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[500px] md:max-h-[550px]" />
            </div>
            <div className="md:w-3/5 animate-subtleFadeInUp flex flex-col" style={{animationDelay: "0.2s"}}>
              <SectionTitle title="Nossa Essência" subtitle="Paixão, Curadoria e Descoberta Elevadas à Máxima Expressão." alignment="left" className="mb-6 md:mb-8" titleClassName="!text-4xl lg:!text-5xl" />
              <div className="font-sans text-gray-700 space-y-4 leading-relaxed text-base md:text-lg">
                <p>
                  Na Tesori di Bacco - Club di Scoperte Enologiche, a paixão pelo vinho é uma herança de família, cultivada através de gerações. Fundada pelos irmãos Luigi e Mario Frescobaldi, nossa missão é elevar a arte da descoberta enológica a um novo patamar de sofisticação e autenticidade.
                </p>
                <p>
                  Luigi, com seu paladar refinado por anos de imersão na viticultura global e uma rara sensibilidade para identificar terroirs de exceção, lidera nossa curadoria. Mario, com sua visão estratégica e expertise em criar experiências digitais impecáveis, garante que cada interação com a Tesori di Bacco seja tão memorável quanto os vinhos que selecionamos.
                </p>
                <p>
                  Com raízes fincadas em Minas Gerais – nossa sede em Vila da Serra, Nova Lima, e um escritório na vibrante Savassi, em Belo Horizonte – buscamos conectar o apreciador brasileiro ao que há de mais extraordinário no universo dos vinhos. Da dedicação de produtores artesanais aos ícones consagrados, cada garrafa em nossa seleção é um convite a descobrir a alma em cada taça.
                </p>
              </div>
              <div className="mt-8"> 
                <Button to={RoutePath.AboutUs} variant="secondary" size="md" className="shadow hover:shadow-md">Conheça os Fundadores</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-page-section bg-ice-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Tavole del Gusto" subtitle="Elevando a experiência do vinho com a alta gastronomia parceira. Explore sabores que se complementam."/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {featuredRestaurants.map((restaurant: Restaurant, index: number) => (
              <div key={restaurant.id} className="bg-light-warm-grey rounded-lg shadow-lg overflow-hidden group animate-subtleFadeInUp flex flex-col" style={{animationDelay: `${index * 0.2}s`}}>
                <Link to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} className="block">
                    <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-56 md:h-64 object-cover group-hover:opacity-90 transition-opacity duration-300" />
                </Link>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <Link to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} className="block">
                    <h3 className="text-xl md:text-2xl font-serif text-charcoal-gray mb-2 group-hover:text-burgundy-accent transition-colors">{restaurant.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-1 font-sans">{restaurant.city}, {restaurant.country}</p>
                  {restaurant.chef && <p className="text-xs text-gray-500 mb-3 font-sans">Chef: {restaurant.chef}</p>}
                   <p className="text-sm text-gray-700 mb-4 h-16 overflow-hidden text-ellipsis font-sans leading-relaxed flex-grow">{restaurant.philosophy.substring(0,100)}...</p>
                  {restaurant.michelinStars && (
                    <div className="flex items-center mb-3">
                      {[...Array(restaurant.michelinStars)].map((_, i) => (
                        <StarIcon key={i} className={`w-4 h-4 ${GOLD_ACCENT_TEXT}`} />
                      ))}
                       <span className="ml-2 text-xs text-gray-500 font-sans">({restaurant.michelinStars} Estrela{restaurant.michelinStars > 1 ? 's' : ''} Michelin)</span>
                    </div>
                  )}
                  <Button to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} variant="outline" size="sm" className="mt-auto shadow hover:shadow-sm">Ver Detalhes da Casa</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 animate-subtleFadeInUp" style={{animationDelay: "0.6s"}}>
            <Button to={RoutePath.TavoleDelGusto} variant="primary" size="lg" icon={<MapPinIcon className="w-5 h-5 mr-2"/>} className="shadow-lg hover:shadow-xl">
                Ver Todas as Tavole del Gusto
            </Button>
          </div>
        </div>
      </section>

      <section className="full-page-section bg-light-warm-grey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Il Diario del Sommelier" subtitle="Artigos, dicas de especialistas e histórias para aprofundar sua paixão pelo vinho e pela alta cultura enogastronômica." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12 max-w-4xl mx-auto">
            {featuredArticles.map((article: JournalArticle, index: number) => (
              <Link key={article.id} to={RoutePath.ArticleDetail.replace(':articleId', article.id)} className="group block animate-subtleFadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="overflow-hidden rounded-lg shadow-md mb-4 h-56 md:h-64">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-charcoal-gray mb-2 group-hover:text-burgundy-accent transition-colors">{article.title}</h3>
                <p className="text-xs text-gray-500 mb-1 font-sans">Por {article.author} - {new Date(article.publishDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                <p className="text-sm text-gray-700 mb-3 h-16 overflow-hidden text-ellipsis font-sans leading-relaxed">{article.summary}</p>
                <span className={`text-sm font-medium ${PRIMARY_COLOR_TEXT} group-hover:underline font-sans`}>Ler artigo completo &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 animate-subtleFadeInUp" style={{animationDelay: "0.4s"}}>
            <Button to={RoutePath.DiarioDelSommelier} variant="secondary" size="lg" icon={<BookOpenIcon className="w-5 h-5 mr-2"/>} className="shadow hover:shadow-md">
              Visitar o Diario Completo
            </Button>
          </div>
        </div>
      </section>
      
      <section className="full-page-section bg-ice-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={`Por que Tesori di Bacco?`} subtitle="Descubra os diferenciais que tornam nosso clube uma experiência única e incomparável no universo dos vinhos." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Curadoria Excepcional", description: "Vinhos selecionados a dedo por Luigi Frescobaldi, com foco em qualidade, autenticidade e histórias singulares.", icon: <WineGlassIcon className="w-10 h-10" /> },
              { title: "Conhecimento Aprofundado", description: "Acesso a perfis detalhados, notas de degustação interativas e narrativas fascinantes na La Collezione Frescobaldi.", icon: <BookOpenIcon className="w-10 h-10" /> },
              { title: "Experiências Exclusivas", description: "Conexões com alta gastronomia (Tavole del Gusto), eventos selecionados e uma comunidade de apaixonados por vinho.", icon: <MapPinIcon className="w-10 h-10" /> },
              { title: "Descoberta de Artesanais", description: "Descubra pequenos produtores e vinhos autênticos que você não encontra facilmente no mercado convencional.", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
              { title: "Conveniência Sofisticada", description: "Receba o melhor do mundo do vinho no conforto da sua casa, com elegância e sem complicações.", icon: <GiftIcon className="w-10 h-10" /> },
              { title: "Comunidade Vibrante", description: "Participe de degustações, conecte-se com outros membros e compartilhe sua paixão pelo vinho.", icon: <StarIcon className="w-10 h-10 text-gold-accent" /> },
            ].map((item, index) => (
              <div key={item.title} className="text-center p-6 bg-light-warm-grey rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-subtleFadeInUp" style={{animationDelay: `${index * 0.15}s`}}>
                 <div className="flex justify-center mb-4 text-burgundy-accent">{item.icon}</div>
                <h3 className="text-xl font-serif text-charcoal-gray mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="full-page-section bg-light-warm-grey">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Histórias dos Nossos Membros" subtitle={`O que nossos apreciadores dizem sobre a experiência ${APP_NAME}. Depoimentos reais, paixões compartilhadas.`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {MOCK_TESTIMONIALS.slice(0,3).map((testimonial, index) => (
              <div key={testimonial.id} className="bg-ice-white p-6 md:p-8 rounded-lg shadow-xl text-center animate-subtleFadeInUp flex flex-col" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex justify-center mb-4">
                    <StarIcon className={`w-7 h-7 ${GOLD_ACCENT_TEXT}`} />
                    <StarIcon className={`w-7 h-7 ${GOLD_ACCENT_TEXT} mx-1`} />
                    <StarIcon className={`w-7 h-7 ${GOLD_ACCENT_TEXT}`} />
                    <StarIcon className={`w-7 h-7 ${GOLD_ACCENT_TEXT} mr-1`} />
                    <StarIcon className={`w-7 h-7 ${GOLD_ACCENT_TEXT}`} />
                </div>
                <p className="text-gray-700 italic mb-5 text-base leading-relaxed font-sans flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                    <p className="font-semibold font-serif text-lg text-charcoal-gray">{testimonial.authorName}</p>
                    {testimonial.authorLocation && <p className="text-sm text-gray-500 font-sans">{testimonial.authorLocation}</p>}
                    {testimonial.memberTier && <p className="text-xs text-burgundy-accent mt-1 font-sans">{testimonial.memberTier}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;