
import { Wine, SubscriptionTier, Restaurant, JournalArticle, FAQItem, Testimonial, RoutePath, User, WineProducer } from './types';

export const APP_NAME = "Tesori di Bacco"; 
export const APP_FULL_NAME = "Tesori di Bacco";
export const APP_MOTTO = "L'Anima del Vino, Goccia a Goccia.";
export const DRINK_RESPONSIBLY_MSG = "Beba com moderação. Se beber, não dirija. Venda e consumo proibidos para menores de 18 anos.";

export const PRIMARY_COLOR_BG = 'bg-burgundy-accent'; 
export const PRIMARY_COLOR_TEXT = 'text-burgundy-accent';
export const GOLD_ACCENT_TEXT = 'text-gold-accent'; 
export const GOLD_ACCENT_BG = 'bg-gold-accent';
export const GOLD_ACCENT_BORDER = 'border-gold-accent';

export const ICE_WHITE_BG = 'bg-ice-white'; 
export const LIGHT_WARM_GREY_BG = 'bg-light-warm-grey'; 
export const TEXT_COLOR = 'text-charcoal-gray'; 

export const NAVIGATION_LINKS = [
  { name: "Home", path: RoutePath.Home },
  { name: "La Collezione Frescobaldi", path: RoutePath.CollezioneFrescobaldi },
  { name: "Nossos Planos", path: RoutePath.MembershipPlans },
  { name: "Tavole del Gusto", path: RoutePath.TavoleDelGusto },
  { name: "Il Diario del Sommelier", path: RoutePath.DiarioDelSommelier },
  { name: "FAQ", path: RoutePath.FAQ },
];

export const FOOTER_NAVIGATION_LINKS_SUPPORT = [
    { name: "Perguntas Frequentes", path: RoutePath.FAQ },
    { name: "Termos e Condições", path: RoutePath.TermsAndConditions }, 
    { name: "Política de Privacidade", path: RoutePath.PrivacyPolicy }, 
    { name: "Contato", path: RoutePath.Contact },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
  { name: "Facebook", url: "https://facebook.com", icon: "fab fa-facebook-f" },
];

export const MOCK_PRODUCERS: WineProducer[] = [
  { id: "p1", name: "Vinícola Aurora", region: "Serra Gaúcha", country: "Brasil", story: "Uma das mais tradicionais vinícolas do Brasil, com foco em qualidade e inovação.", logoUrl: "images/producers/vinicola_aurora_logo.png" },
  { id: "p2", name: "Château Margaux", region: "Bordeaux", country: "França", story: "Um Premier Grand Cru Classé, sinônimo de elegância e longevidade.", logoUrl: "https://picsum.photos/seed/margaux/100/100" },
  { id: "p3", name: "Bodega Catena Zapata", region: "Mendoza", country: "Argentina", story: "Pioneira na produção de Malbec de altitude, mundialmente reconhecida.", logoUrl: "https://picsum.photos/seed/catena/100/100" },
  { id: "p4", name: "Domaine de la Romanée-Conti", region: "Borgonha", country: "França", story: "Produtor lendário dos vinhos mais cobiçados do mundo.", logoUrl: "https://picsum.photos/seed/drc/100/100" },
  { id: "p5", name: "Vega Sicilia", region: "Ribera del Duero", country: "Espanha", story: "Um ícone espanhol, conhecido por sua complexidade e longevidade.", logoUrl: "https://picsum.photos/seed/vega/100/100" },
  { id: "p6", name: "Guaspari", region: "Espírito Santo do Pinhal", country: "Brasil", story: "Vinícola boutique brasileira com vinhos premiados e foco em Syrah.", logoUrl: "https://picsum.photos/seed/guaspari/100/100" },
  { id: "p7", name: "Luigi Bosca", region: "Mendoza", country: "Argentina", story: "Tradição e inovação em vinhos argentinos de alta qualidade.", logoUrl: "https://picsum.photos/seed/luigibosca/100/100" },
  { id: "p8", name: "Cloudy Bay", region: "Marlborough", country: "Nova Zelândia", story: "Pioneira na produção de Sauvignon Blanc de alta qualidade em Marlborough.", logoUrl: "https://picsum.photos/seed/cloudybay/100/100"},
  { id: "p9", name: "Château d'Esclans", region: "Provence", country: "França", story: "Referência mundial em rosés de Provence de alta gama.", logoUrl: "https://picsum.photos/seed/esclans/100/100"},
  { id: "p10", name: "Veuve Clicquot Ponsardin", region: "Champagne", country: "França", story: "Uma das Maisons de Champagne mais reconhecidas, famosa por sua consistência e qualidade.", logoUrl: "https://picsum.photos/seed/veuve/100/100"},
  { id: "p11", name: "Fundação Eugénio de Almeida", region: "Alentejo", country: "Portugal", story: "Produtora do Pêra-Manca, um dos vinhos mais icônicos e cobiçados de Portugal.", logoUrl: "https://picsum.photos/seed/peramanca/100/100"},
  { id: "p12", name: "Antinori", region: "Toscana", country: "Itália", story: "Uma dinastia vinícola com mais de 600 anos de história, pioneira nos Supertoscanos.", logoUrl: "https://picsum.photos/seed/antinori/100/100"},
  { id: "p13", name: "Tenuta San Guido", region: "Toscana", country: "Itália", story: "Produtora do lendário Sassicaia, o primeiro Supertoscano.", logoUrl: "https://picsum.photos/seed/sassicaia/100/100"},
  { id: "p14", name: "Gaja", region: "Piemonte", country: "Itália", story: "Referência em Barbaresco e Barolo, sinônimo de qualidade e inovação.", logoUrl: "https://picsum.photos/seed/gaja/100/100"},
  { id: "p15", name: "Viña Errazuriz", region: "Aconcágua", country: "Chile", story: "Vinícola chilena de prestígio, conhecida por seus vinhos elegantes e de terroir.", logoUrl: "https://picsum.photos/seed/errazuriz/100/100"},
  { id: "p16", name: "Dr. Loosen", region: "Mosel", country: "Alemanha", story: "Um dos produtores mais renomados da Alemanha, famoso por seus Rieslings elegantes e longevos.", logoUrl: "https://picsum.photos/seed/loosen/100/100" },
  { id: "p17", name: "Domaine Zind-Humbrecht", region: "Alsácia", country: "França", story: "Referência em vinhos biodinâmicos na Alsácia, com Gewürztraminers e Rieslings excepcionais.", logoUrl: "https://picsum.photos/seed/zindhumbrecht/100/100" },
  { id: "p18", name: "Ferrari Trento", region: "Trentino", country: "Itália", story: "Produtor líder de espumantes método clássico na Itália, sinônimo de elegância e qualidade.", logoUrl: "https://picsum.photos/seed/ferrari/100/100" },
  { id: "p19", name: "Gramona", region: "Penedès", country: "Espanha", story: "Produtor de Cavas de longa maturação, com foco em biodinâmica e complexidade.", logoUrl: "https://picsum.photos/seed/gramona/100/100" },
  { id: "p20", name: "Château d'Yquem", region: "Sauternes, Bordeaux", country: "França", story: "O mais lendário produtor de vinhos de sobremesa do mundo, com vinhos de complexidade e longevidade incomparáveis.", logoUrl: "https://picsum.photos/seed/yquem/100/100" },
  { id: "p21", name: "Taylor Fladgate", region: "Douro", country: "Portugal", story: "Uma das casas de Vinho do Porto mais antigas e respeitadas, conhecida por seus Vintages e Tawnies.", logoUrl: "https://picsum.photos/seed/taylor/100/100" },
  { id: "p22", name: "Château Pétrus", region: "Pomerol, Bordeaux", country: "França", story: "Um dos vinhos mais raros e caros do mundo, ícone de Pomerol, elaborado predominantemente com Merlot.", logoUrl: "https://picsum.photos/seed/petrus/100/100"},
  { id: "p23", name: "Miraval", region: "Provence", country: "França", story: "Famoso rosé de Provence, conhecido por sua qualidade e associação com celebridades, mas com sólida base enológica.", logoUrl: "https://picsum.photos/seed/miraval/100/100"},
  { id: "p24", name: "Krug", region: "Champagne", country: "França", story: "Uma Maison de Champagne de prestígio extremo, focada em cuvées de alta complexidade e potencial de envelhecimento.", logoUrl: "https://picsum.photos/seed/krug/100/100"},
  { id: "p25", name: "Inniskillin", region: "Niagara Peninsula", country: "Canadá", story: "Pioneiro e referência mundial na produção de Icewine, especialmente a partir da uva Vidal.", logoUrl: "https://picsum.photos/seed/inniskillin/100/100"},
];

export const MOCK_WINES: Wine[] = [
  {
    id: "wine001",
    name: "Aurora Millésime Cabernet Sauvignon",
    producer: MOCK_PRODUCERS[0],
    vintage: 2018,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Cabernet Sauvignon", percentage: 100 }],
    regionOfOrigin: { country: "Brasil", region: "Serra Gaúcha", terroirDetails: "Solos argilosos com boa drenagem, noites frescas.", mapImageUrl: "images/regions/serra_gaucha_mapa.jpg" },
    vinificationProcess: "Colheita manual, fermentação controlada, maceração prolongada.",
    maturation: "12 meses em barricas de carvalho francês e americano.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas negras maduras", "Tabaco", "Chocolate"], palate: "Encorpado, taninos presentes e maduros, final longo e complexo.", guardPotential: "8-10 anos" },
    perceivedQuality: { score: "91 pts - Guia Descorchados" },
    harmonization: [{ 
      dish: "Costela assada lentamente com polenta cremosa", 
      reasoning: "O Aurora Millésime Cabernet Sauvignon, um tinto encorpado da Serra Gaúcha, apresenta taninos robustos e maduros, além de um bouquet complexo de frutas negras, tabaco e chocolate, provenientes de sua maturação em carvalho. Essas características fazem dele um par ideal para a costela assada lentamente. A estrutura tânica do vinho corta a riqueza e untuosidade da carne, limpando o paladar a cada garfada, enquanto suas notas de frutas negras e toques de chocolate complementam os sabores caramelizados da costela. A polenta cremosa, por sua vez, oferece um contraponto suave que é realçado pela acidez equilibrada do vinho. Pratos como um ossobuco com risoto de açafrão ou um robusto ragu de cordeiro com pappardelle também se beneficiariam imensamente desta harmonização, pois compartilham da intensidade e riqueza que este Cabernet Sauvignon pode abraçar e realçar.",
      recipeLink: RoutePath.ArticleDetail.replace(':articleId', 'art-chef-atala')
    }], 
    restaurantPartnerships: [{ restaurantName: "D.O.M.", chefName: "Alex Atala", profile: "Cozinha brasileira autoral e premiada.", servesThisWine: true, websiteUrl:"#", memberBenefit: "Cortesia do sommelier ao apresentar o cartão Tesori di Bacco."}],
    story: "Um ícone da Vinícola Aurora, expressando o melhor do terroir da Serra Gaúcha em safras excepcionais. Este vinho representa a tradição e a busca constante pela excelência que caracterizam a vinícola. Cada garrafa conta a história de um ano particular, um clima específico e o cuidado artesanal desde o vinhedo até a taça. Ideal para momentos especiais e para quem aprecia vinhos com personalidade e capacidade de envelhecimento.",
    imageUrl: "images/wines/aurora_millesime_garrafa.jpg",
    labelImageUrl: "images/wines/aurora_millesime_rotulo.jpg",
    wineColorInGlassUrl: "images/wines/taca_vinho.jpg",
    priceIndicator: "R$151-R$250",
  },
  {
    id: "wine002",
    name: "Pavillon Rouge du Château Margaux",
    producer: MOCK_PRODUCERS[1],
    vintage: 2019,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Cabernet Sauvignon", percentage: 76 }, { name: "Merlot", percentage: 18 }, { name: "Petit Verdot", percentage: 4 }, { name: "Cabernet Franc", percentage: 2 }],
    regionOfOrigin: { country: "França", region: "Bordeaux", subRegion: "Margaux", terroirDetails: "Solos de cascalho profundo, excelente drenagem.", mapImageUrl: "images/regions/"},
    vinificationProcess: "Seleção rigorosa das uvas, fermentação em cubas de carvalho e inox.",
    maturation: "18 meses em barricas de carvalho francês (60% novas).",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Cassis", "Violeta", "Cedro", "Notas minerais"], palate: "Elegante, taninos sedosos, acidez vibrante, final persistente e refinado.", guardPotential: "15-20 anos" },
    harmonization: [{ 
      dish: "Magret de pato com molho de frutas vermelhas e especiarias", 
      reasoning: "O Pavillon Rouge du Château Margaux, com sua predominância de Cabernet Sauvignon e Merlot de Margaux, exibe uma elegância clássica, taninos sedosos e uma acidez vibrante, com aromas de cassis, violeta e cedro. Essas características o tornam um parceiro excepcional para o magret de pato. A acidez do vinho corta a untuosidade da carne de pato, enquanto seus taninos finos complementam a textura da carne. As notas de frutas negras e o toque de cedro do vinho harmonizam lindamente com o molho de frutas vermelhas e as especiarias, criando uma sinfonia de sabores complexos. Outros pratos como um filé mignon ao molho poivre ou costeletas de cordeiro grelhadas com ervas de Provence também seriam enaltecidos por este vinho, graças ao seu equilíbrio e refinamento." 
    }],
    restaurantPartnerships: [{ restaurantName: "Le Bernardin", chefName: "Eric Ripert", profile: "Sofisticação francesa em frutos do mar, 3 estrelas Michelin (NY).", servesThisWine: true, websiteUrl:"#"}],
    story: "O segundo vinho do Château Margaux, oferece uma expressão mais acessível do terroir excepcional da propriedade, mantendo a elegância e complexidade. Uma introdução ao universo de um dos mais prestigiados châteaux do mundo, perfeito para apreciadores que buscam a fineza de Margaux com um perfil mais jovial.",
    imageUrl: "images/wines/pavillion_garrafa.jpg",
    priceIndicator: "R$1501-R$2500",
  },
  {
    id: "wine003",
    name: "Catena Zapata Malbec Argentino",
    producer: MOCK_PRODUCERS[2],
    vintage: 2020,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Malbec", percentage: 100 }],
    regionOfOrigin: { country: "Argentina", region: "Mendoza", subRegion: "Luján de Cuyo & Vale de Uco", terroirDetails: "Vinhedos de altitude, solos aluviais e pedregosos.", mapImageUrl: "images/regions/lujan_de_cuyo_y_valle_de_ucomapa.jpg"},
    vinificationProcess: "Fermentação em pequenos barris e tanques de concreto, leveduras indígenas.",
    maturation: "18 meses em barricas de carvalho francês.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Ameixa preta", "Amora", "Violeta", "Notas de cacau"], palate: "Concentrado, taninos aveludados, grande profundidade de sabor, final longo e prazeroso.", guardPotential: "10-15 anos" },
    harmonization: [{ 
      dish: "Bife de Chorizo na parrilla com chimichurri", 
      reasoning: "O Catena Zapata Malbec Argentino é a personificação da potência e elegância da Malbec de altitude. Seus taninos aveludados, concentração de frutas negras (ameixa, amora) e notas de cacau, resultantes da combinação de vinhedos históricos e maturação em carvalho francês, são um contraponto perfeito para a suculência e sabor intenso do bife de chorizo grelhado. A estrutura do vinho envolve a carne, enquanto sua acidez equilibra a gordura. O toque herbáceo e picante do chimichurri encontra eco nas notas de especiarias sutis do Malbec. Esta harmonização é um clássico argentino, mas pratos como cordeiro patagônico assado ou um cassoulet robusto também seriam magníficos com este vinho." 
    }],
    story: "Uma homenagem à uva Malbec, este vinho é elaborado a partir de um corte de uvas de vinhedos históricos da família Catena, representando a essência da Argentina. Um vinho que combina riqueza, estrutura e elegância, demonstrando o potencial máximo da Malbec em Mendoza.",
    imageUrl: "images/wines/catena_zapata_garrafa.jpg",
    priceIndicator: "R$351-R$500",
  },
   {
    id: "wine004",
    name: "Explorador Chardonnay Reserva",
    producer: MOCK_PRODUCERS[0],
    vintage: 2021,
    wineStyle: "Branco Encorpado",
    grapeVarieties: [{ name: "Chardonnay", percentage: 100 }],
    regionOfOrigin: { country: "Brasil", region: "Campanha Gaúcha", terroirDetails: "Clima mais quente e seco, ideal para Chardonnay.", mapImageUrl: "https://picsum.photos/seed/map4/600/400" },
    vinificationProcess: "Prensagem direta, fermentação parcial em barricas de carvalho.",
    maturation: "6 meses em barricas de carvalho francês com bâtonnage.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Abacaxi maduro", "Pêssego", "Notas amanteigadas", "Baunilha"], palate: "Bom volume de boca, acidez refrescante, final cremoso.", guardPotential: "3-5 anos" },
    harmonization: [{ 
        dish: "Salmão grelhado com molho de maracujá e purê de batata doce", 
        reasoning: "O Explorador Chardonnay Reserva, com sua fermentação parcial e maturação em carvalho francês, exibe notas de frutas tropicais maduras como abacaxi, um toque amanteigado e de baunilha, aliados a uma acidez refrescante. Esta complexidade e cremosidade harmonizam perfeitamente com a textura rica do salmão grelhado. A acidez do vinho corta a gordura do peixe, enquanto suas notas frutadas e amanteigadas complementam tanto o salmão quanto o adocicado do purê de batata doce. O molho de maracujá, com sua acidez e exotismo, encontra um belo contraponto na vivacidade do Chardonnay. Pratos como frango assado com ervas ou uma moqueca de peixe mais leve também seriam excelentes combinações." 
    }],
    story: "Um Chardonnay que explora o potencial da Campanha Gaúcha, oferecendo complexidade e frescor. Perfeito para quem busca um branco brasileiro com caráter e versatilidade gastronômica.",
    imageUrl: "images/wines/explorador_chardonnay_reserva_garrafa.jpg",
    priceIndicator: "R$80-R$150",
  },
  {
    id: "wine008",
    name: "Cloudy Bay Sauvignon Blanc",
    producer: MOCK_PRODUCERS[7], 
    vintage: 2022,
    wineStyle: "Branco Leve",
    grapeVarieties: [{ name: "Sauvignon Blanc", percentage: 100 }],
    regionOfOrigin: { country: "Nova Zelândia", region: "Marlborough", terroirDetails: "Solos aluviais, dias ensolarados e noites frescas.", mapImageUrl: "images/regions/marlborough_nova_zelandia_mapa.jpg"},
    vinificationProcess: "Fermentação em tanques de inox com temperatura controlada para preservar os aromas.",
    maturation: "Curto período sobre as lias finas.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Maracujá", "Grapefruit", "Pimentão verde", "Notas herbáceas"], palate: "Vibrante, acidez crocante, intensidade aromática marcante, final refrescante.", guardPotential: "2-4 anos" },
    harmonization: [{ 
        dish: "Salada de queijo de cabra com aspargos frescos e vinagrete de limão siciliano", 
        reasoning: "O Cloudy Bay Sauvignon Blanc é um ícone de Marlborough, conhecido por sua acidez vibrante e perfil aromático intenso de maracujá, grapefruit e notas herbáceas/pimentão verde, fruto do terroir único e da vinificação cuidadosa. Estas características o tornam perfeito para a salada de queijo de cabra. A acidez 'crocante' do vinho corta a gordura e a riqueza do queijo de cabra, limpando o paladar. Suas notas herbáceas espelham e complementam o sabor dos aspargos frescos, enquanto os toques cítricos do vinho e do vinagrete se unem em uma explosão de frescor. Outras opções seriam ostras frescas, ceviche de peixe branco ou sushi e sashimi, onde sua acidez e pureza brilhariam." 
    }],
    story: "Um ícone do Sauvignon Blanc neozelandês, conhecido por sua explosão aromática e frescor contagiante. Perfeito para dias quentes e pratos leves.",
    imageUrl: "images/wines/cloudy_bay_sauvignon_blanc_garrafa.jpg",
    priceIndicator: "R$151-R$250",
  },
  {
    id: "wine010",
    name: "Veuve Clicquot Brut Yellow Label",
    producer: MOCK_PRODUCERS[9], 
    vintage: 0, 
    wineStyle: "Espumante",
    grapeVarieties: [{ name: "Pinot Noir", percentage: 50-55 }, { name: "Chardonnay", percentage: 28-33 }, {name: "Meunier", percentage: 15-20}],
    regionOfOrigin: { country: "França", region: "Champagne", terroirDetails: "Solos calcários da região de Champagne.", mapImageUrl: "https://picsum.photos/seed/mapChampagne/600/400"},
    vinificationProcess: "Método tradicional (Champenoise), com segunda fermentação na garrafa.",
    maturation: "Mínimo de 3 anos sobre as lias.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Maçã verde", "Pera", "Brioche", "Notas tostadas"], palate: "Fresco, boa estrutura, perlage fina e persistente, final equilibrado.", guardPotential: "2-3 anos (para manter frescor)" },
    harmonization: [
        { 
            dish: "Ostras frescas ao natural com gotas de limão", 
            reasoning: "O Veuve Clicquot Brut Yellow Label, um Champagne clássico dominado pela Pinot Noir, oferece uma estrutura firme, acidez refrescante e notas de brioche e frutas cítricas. Essa combinação é divinamente complementar às ostras frescas. A acidez pronunciada e a efervescência do Champagne cortam a salinidade e a textura das ostras, enquanto suas notas minerais e cítricas realçam o sabor marinho delicado. O toque de brioche adiciona uma camada de complexidade que eleva a experiência. Esta é uma harmonização clássica por uma razão: é simplesmente perfeita. Também acompanha brilhantemente canapés variados, como blinis com salmão defumado e cream cheese, ou gougères (pãezinhos de queijo)."
        }, 
        {
            dish: "Seleção de canapés e finger foods (ex: mini quiches, espetinhos caprese, bruschettas)", 
            reasoning: "A versatilidade do Veuve Clicquot Brut Yellow Label, com seu equilíbrio entre fruta, acidez e notas de panificação, o torna um coringa para uma ampla gama de aperitivos. Sua acidez limpa o paladar entre diferentes sabores, e sua estrutura é suficiente para acompanhar desde vegetais frescos até preparações mais ricas como mini quiches ou patês. As notas frutadas complementam ingredientes como tomate e manjericão, enquanto os toques de brioche harmonizam bem com massas folhadas e queijos leves."
        }
    ],
    story: "Um clássico atemporal do Champagne, o Yellow Label da Veuve Clicquot é reconhecido mundialmente por seu equilíbrio, frescor e notas de brioche. Ideal para celebrações e momentos especiais, sua consistência é fruto de uma arte de assemblage que inclui vinhos de reserva de diversas safras.",
    imageUrl: "images/wines/veuve_garrafa.jpg",
    priceIndicator: "R$351-R$500",
  },
  {
    id: "wine005",
    name: "DRC Romanée-Conti Grand Cru",
    producer: MOCK_PRODUCERS[3],
    vintage: 2017,
    wineStyle: "Tinto Leve",
    grapeVarieties: [{ name: "Pinot Noir", percentage: 100 }],
    regionOfOrigin: { country: "França", region: "Borgonha", subRegion: "Vosne-Romanée", terroirDetails: "Solo argilo-calcário, exposição leste.", mapImageUrl: "images/regions/borgonha_franca_mapa.jpg"},
    vinificationProcess: "Fermentação tradicional em cubas de madeira, pisa a pé.",
    maturation: "18-20 meses em barricas de carvalho francês 100% novas.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas vermelhas silvestres", "Rosas", "Especiarias exóticas", "Sous-bois"], palate: "Textura etérea, complexidade transcendental, taninos de seda pura, final interminável.", guardPotential: "30-50+ anos" },
    harmonization: [{ dish: "Contemplação Silenciosa e Queijo Époisses", reasoning: "O Romanée-Conti é uma experiência sensorial tão profunda que muitas vezes pede apenas contemplação. Se for acompanhar com algo, um queijo Époisses de Bourgogne, com sua casca lavada e interior cremoso e pungente, pode criar um contraste fascinante com a etérea complexidade do vinho, onde a potência do queijo é domada pela elegância transcendental da Pinot Noir." }],
    story: "Considerado por muitos o maior vinho do mundo. Uma expressão sublime da Pinot Noir, de um terroir lendário. Produção minúscula e demanda global fazem deste um vinho para os anais da história pessoal de quem o prova. A epítome da elegância, complexidade e longevidade.",
    imageUrl: "images/wines/drc_garrafa.jpg",
    priceIndicator: "R$25000+",
  },
  {
    id: "wine006",
    name: "Vega Sicilia Único",
    producer: MOCK_PRODUCERS[4],
    vintage: 2010,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Tempranillo", percentage: 95 }, { name: "Cabernet Sauvignon", percentage: 5 }],
    regionOfOrigin: { country: "Espanha", region: "Ribera del Duero", terroirDetails: "Solos calcários e aluviais, clima continental extremo.", mapImageUrl: "https://picsum.photos/seed/mapVega/600/400"},
    vinificationProcess: "Fermentação em carvalho, longa maturação em diferentes tipos de barricas e em garrafa.",
    maturation: "Mínimo de 10 anos entre barrica e garrafa antes do lançamento.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas negras confitadas", "Couro", "Tabaco de charuto", "Balsâmico"], palate: "Potente e elegante, taninos polidos, acidez vivaz, profundidade imensa, final aristocrático.", guardPotential: "20-40+ anos" },
    harmonization: [{ dish: "Lechazo assado (cordeiro de leite) com batatas ao murro", reasoning: "O Vega Sicilia Único, um Tempranillo majestoso com um toque de Cabernet, é um monumento de complexidade e elegância. Sua longa maturação confere notas de frutas confitadas, couro e tabaco, com taninos polidos e uma acidez que promete longevidade. O lechazo, prato tradicional espanhol, com sua carne tenra e sabor delicado, porém rico, é elevado pela profundidade do Único. A estrutura do vinho complementa a carne sem sobrepujá-la, e suas notas terciárias criam uma ponte com os sabores tostados do assado. As batatas ao murro, com azeite e alho, encontram um par na acidez e corpo do vinho." }],
    story: "O vinho mais emblemático da Espanha. Uma lenda que combina poder e finesse, com uma capacidade de envelhecimento extraordinária. Cada safra é uma obra de arte, refletindo a dedicação secular da vinícola à excelência.",
    imageUrl: "images/wines/vega_sicilia_unico_garrafa.jpg",
    priceIndicator: "R$2501-R$5000",
  },
  {
    id: "wine007",
    name: "Guaspari Vista da Serra Syrah",
    producer: MOCK_PRODUCERS[5],
    vintage: 2019,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Syrah", percentage: 100 }],
    regionOfOrigin: { country: "Brasil", region: "Espírito Santo do Pinhal", subRegion: "Serra da Mantiqueira", terroirDetails: "Vinhedos de altitude, colheita de inverno.", mapImageUrl: "https://picsum.photos/seed/mapGuaspari/600/400"},
    vinificationProcess: "Seleção manual, fermentação com leveduras selecionadas, maceração cuidadosa.",
    maturation: "12 meses em barricas de carvalho francês.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Amora", "Pimenta preta", "Notas defumadas", "Violeta"], palate: "Estruturado, taninos firmes e maduros, acidez refrescante, final persistente e condimentado.", guardPotential: "7-10 anos" },
    harmonization: [{ dish: "Pato confitado com purê de mandioquinha e molho de jabuticaba", reasoning: "O Guaspari Vista da Serra Syrah, proveniente de vinhedos de altitude com colheita de inverno, oferece um perfil aromático complexo de amoras, pimenta preta e notas defumadas, com taninos firmes e acidez vibrante. Essas características fazem dele um excelente parceiro para o pato confitado. A intensidade do Syrah e suas notas condimentadas complementam a riqueza da carne de pato, enquanto a acidez equilibra a gordura. O purê de mandioquinha, com sua doçura terrosa, e o molho de jabuticaba, com sua acidez frutada, criam camadas de sabor que dialogam com a complexidade do vinho." }],
    story: "Um Syrah brasileiro de classe mundial, cultivado em terroir de altitude com colheita de inverno, técnica que permite a maturação ideal das uvas. Expressa o potencial da Serra da Mantiqueira para vinhos tintos de alta qualidade.",
    imageUrl: "images/wines/syrah_garrafa.jpg",
    priceIndicator: "R$251-R$350",
  },
  {
    id: "wine009",
    name: "Whispering Angel Rosé",
    producer: MOCK_PRODUCERS[8], 
    vintage: 2022,
    wineStyle: "Rosé",
    grapeVarieties: [{ name: "Grenache" }, { name: "Cinsault" }, { name: "Rolle (Vermentino)"}],
    regionOfOrigin: { country: "França", region: "Provence", terroirDetails: "Solos argilo-calcários e arenosos, clima mediterrâneo.", mapImageUrl: "https://picsum.photos/seed/mapProvence/600/400"},
    vinificationProcess: "Colheita noturna, prensagem direta suave, fermentação a baixa temperatura.",
    maturation: "Em tanques de inox sobre as lias.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas vermelhas frescas (morango, framboesa)", "Pêssego", "Notas florais"], palate: "Seco, elegante, acidez refrescante, final delicado e mineral.", guardPotential: "1-3 anos" },
    harmonization: [{ dish: "Salada Niçoise com atum fresco selado", reasoning: "O Whispering Angel, um rosé provençal clássico, é sinônimo de elegância e frescor, com notas de frutas vermelhas delicadas, pêssego e um toque floral. Sua acidez refrescante e final mineral o tornam ideal para a Salada Niçoise. O vinho complementa a leveza dos vegetais frescos, o sabor do atum selado (sem sobrepujá-lo) e as azeitonas Niçoise. É um vinho que evoca o Mediterrâneo, perfeito para pratos leves e ensolarados como este. Também seria excelente com camarões grelhados, carpaccio de salmão ou simplesmente como aperitivo." }],
    story: "Um dos rosés mais famosos e desejados do mundo. Sinônimo de elegância provençal, é perfeito para momentos descontraídos e celebrações.",
    imageUrl: "images/wines/whispering_angel_rose_garrafa.jpg",
    priceIndicator: "R$251-R$350",
  },
  {
    id: "wine011",
    name: "Luigi Bosca De Sangre Malbec D.O.C",
    producer: MOCK_PRODUCERS[6],
    vintage: 2020,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Malbec", percentage: 100 }],
    regionOfOrigin: { country: "Argentina", region: "Mendoza", subRegion: "Luján de Cuyo", terroirDetails: "Vinhedos com certificação D.O.C. Luján de Cuyo.", mapImageUrl: "https://picsum.photos/seed/mapLuigiDOC/600/400"},
    vinificationProcess: "Seleção manual de cachos, maceração pré-fermentativa a frio, fermentação em tanques de inox.",
    maturation: "12 meses em barricas de carvalho francês.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Ameixa madura", "Cereja preta", "Violeta", "Baunilha e especiarias doces"], palate: "Volumoso, taninos redondos e doces, acidez equilibrada, final longo e elegante.", guardPotential: "8-12 anos" },
    harmonization: [{ dish: "Empanadas argentinas de carne com massa amanteigada", reasoning: "O Luigi Bosca De Sangre Malbec, um D.O.C. Luján de Cuyo, oferece um perfil frutado intenso de ameixas e cerejas, com taninos redondos e um toque de baunilha do carvalho. Esta combinação é perfeita para as empanadas argentinas. A fruta do vinho complementa o recheio saboroso da carne, enquanto seus taninos macios e acidez equilibrada harmonizam com a textura da massa, especialmente se for levemente amanteigada. Um Locro (guisado tradicional argentino) ou massas com molhos de carne ricos também seriam ótimas opções." }],
    story: "Este Malbec representa a primeira Denominação de Origem Controlada (D.O.C.) da Argentina para a Malbec, Luján de Cuyo. Luigi Bosca De Sangre é um vinho que expressa a tipicidade e a elegância desta região histórica, com grande concentração de fruta e um toque sofisticado do carvalho.",
    imageUrl: "images/wines/bosca_de_sangre_garrafa.jpg",
    priceIndicator: "R$151-R$250",
  },
  {
    id: "wine012",
    name: "Pêra-Manca Branco",
    producer: MOCK_PRODUCERS[10], 
    vintage: 2019,
    wineStyle: "Branco Encorpado",
    grapeVarieties: [{ name: "Antão Vaz" }, { name: "Arinto" }],
    regionOfOrigin: { country: "Portugal", region: "Alentejo", terroirDetails: "Solos graníticos e xistosos, clima quente e seco.", mapImageUrl: "https://picsum.photos/seed/mapAlentejo/600/400"},
    vinificationProcess: "Fermentação em barricas de carvalho francês e húngaro.",
    maturation: "12 meses em barricas de carvalho sobre as borras finas, com bâtonnage periódica.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas brancas maduras (pêssego, damasco)", "Notas minerais", "Baunilha", "Tosta sutil"], palate: "Complexo, untuoso, acidez vibrante que confere frescor, final longo e persistente.", guardPotential: "10-15 anos" },
    harmonization: [{ dish: "Bacalhau à Brás ou Bacalhau com Natas", reasoning: "O Pêra-Manca Branco é um vinho alentejano icônico, conhecido por sua complexidade, untuosidade e acidez vibrante, resultado da combinação das uvas Antão Vaz e Arinto e da maturação em carvalho. Estas características o tornam um par soberbo para pratos ricos de bacalhau. Sua estrutura e corpo sustentam a intensidade do bacalhau, enquanto a acidez corta a gordura e a cremosidade (especialmente do Bacalhau com Natas). As notas de fruta madura e tosta sutil do vinho complementam os sabores do prato. Arroz de marisco ou peixes assados mais gordurosos também seriam excelentes." }],
    story: "Pêra-Manca é uma marca lendária do Alentejo, produzida apenas em anos de excepcional qualidade. Este branco é uma referência de elegância e longevidade, mostrando a capacidade dos vinhos brancos portugueses de evoluírem nobremente em garrafa.",
    imageUrl: "images/wines/pera_manca_garrafa.jpg",
    priceIndicator: "R$501-R$800",
  },
  {
    id: "wine013",
    name: "Tignanello",
    producer: MOCK_PRODUCERS[11], 
    vintage: 2018,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Sangiovese", percentage: 80 }, { name: "Cabernet Sauvignon", percentage: 15 }, { name: "Cabernet Franc", percentage: 5 }],
    regionOfOrigin: { country: "Itália", region: "Toscana", subRegion: "IGT Toscana", terroirDetails: "Solos calcários e marga, vinhedos de altitude na zona do Chianti Classico.", mapImageUrl: "https://picsum.photos/seed/mapTignanello/600/400"},
    vinificationProcess: "Fermentação separada por variedade, maceração longa.",
    maturation: "12-14 meses em barricas de carvalho francês e húngaro (parcialmente novas), seguido de 12 meses em garrafa.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Cereja preta", "Amora", "Tabaco", "Notas balsâmicas", "Especiarias"], palate: "Estruturado e elegante, taninos finos, acidez vibrante, final longo e complexo.", guardPotential: "15-25 anos" },
    harmonization: [{ dish: "Bistecca alla Fiorentina mal passada com azeite extra virgem e pimenta do reino", reasoning: "O Tignanello, um Supertoscano pioneiro, combina a espinha dorsal da Sangiovese com a estrutura da Cabernet Sauvignon e Cabernet Franc. Sua acidez vibrante, taninos finos e notas de cereja preta, tabaco e especiarias são um complemento clássico para a Bistecca alla Fiorentina. A acidez do vinho corta a riqueza da carne marmorizada, enquanto seus taninos firmes se equilibram com as proteínas. Os sabores complexos do vinho realçam o sabor puro da carne de alta qualidade. Pappardelle com ragu de javali ou ossobuco alla milanese também seriam parceiros à altura." }],
    story: "Um dos primeiros e mais famosos Supertoscanos, Tignanello revolucionou a vinicultura italiana. Foi o primeiro Sangiovese a ser envelhecido em barricas pequenas, o primeiro vinho tinto moderno misturado com variedades não tradicionais (como Cabernet) e um dos primeiros vinhos tintos na região de Chianti Classico a não usar uvas brancas. Um ícone de inovação e qualidade.",
    imageUrl: "images/wines/tignanello_garrafa.jpg",
    priceIndicator: "R$801-R$1500",
  },
  {
    id: "wine014",
    name: "Sassicaia Bolgheri",
    producer: MOCK_PRODUCERS[12], 
    vintage: 2017,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Cabernet Sauvignon", percentage: 85 }, { name: "Cabernet Franc", percentage: 15 }],
    regionOfOrigin: { country: "Itália", region: "Toscana", subRegion: "Bolgheri DOC Sassicaia", terroirDetails: "Solos pedregosos ricos em argila e calcário, similar ao de Graves em Bordeaux.", mapImageUrl: "https://picsum.photos/seed/mapSassicaia/600/400"},
    vinificationProcess: "Fermentação em tanques de aço inoxidável com controle de temperatura.",
    maturation: "24 meses em barricas de carvalho francês (um terço novas), seguido de afinamento em garrafa.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Cassis", "Amora silvestre", "Cedro", "Ervas mediterrâneas", "Grafite"], palate: "Elegante e poderoso, taninos refinados, excelente equilíbrio, final longo e aristocrático.", guardPotential: "20-30+ anos" },
    harmonization: [{ dish: "Cordeiro assado com crosta de ervas da Provence e batatas gratinadas", reasoning: "Sassicaia, o Supertoscano original de Bolgheri, é um blend bordalês de extrema elegância e poder, com notas de cassis, cedro e ervas mediterrâneas. Sua estrutura tânica refinada e complexidade aromática são um par divino para o cordeiro assado. As ervas da Provence na crosta do cordeiro espelham as notas herbáceas do vinho, enquanto a riqueza da carne é equilibrada pela estrutura e acidez do Sassicaia. As batatas gratinadas adicionam uma textura cremosa que é bem complementada pelo corpo do vinho. Um filé Rossini ou um pato selvagem assado seriam igualmente suntuosos." }],
    story: "O Sassicaia é o Supertoscano original e um dos vinhos mais influentes da Itália. Nascido de uma visão de criar um vinho de estilo Bordeaux na costa da Toscana, estabeleceu a reputação da região de Bolgheri e inspirou uma geração de produtores. Possui sua própria DOC (Bolgheri Sassicaia DOC), um testemunho de sua singularidade e importância.",
    imageUrl: "images/wines/sassicaia_bolgheri_garrafa.jpg",
    priceIndicator: "R$1501-R$2500",
  },
  {
    id: "wine015",
    name: "Gaja Barbaresco",
    producer: MOCK_PRODUCERS[13], 
    vintage: 2018,
    wineStyle: "Tinto Encorpado", 
    grapeVarieties: [{ name: "Nebbiolo", percentage: 100 }],
    regionOfOrigin: { country: "Itália", region: "Piemonte", subRegion: "Barbaresco DOCG", terroirDetails: "Solos calcários e argilosos, vinhedos com excelente exposição solar.", mapImageUrl: "https://picsum.photos/seed/mapBarbaresco/600/400"},
    vinificationProcess: "Fermentação tradicional com maceração prolongada.",
    maturation: "Mínimo de 26 meses, dos quais pelo menos 9 em madeira (Gaja usa barricas e botti grandi), seguido de envelhecimento em garrafa.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Rosas secas", "Alcatrão", "Cereja", "Alcaçuz", "Notas terrosas"], palate: "Elegante e austero na juventude, taninos firmes mas refinados, acidez pronunciada, enorme potencial de envelhecimento, final complexo e persistente.", guardPotential: "15-30+ anos" },
    harmonization: [{ dish: "Risoto al tartufo bianco (com trufas brancas frescas) ou Tajarin com ragu de cogumelos porcini", reasoning: "O Barbaresco de Gaja, uma expressão pura da Nebbiolo, é um vinho de grande elegância, com aromas etéreos de rosas, alcatrão e notas terrosas. Seus taninos firmes e acidez pronunciada pedem pratos com riqueza e complexidade. O risoto com trufas brancas é uma harmonização celestial, onde os aromas terrosos e pungentes da trufa se entrelaçam com a complexidade do vinho. O Tajarin (massa fina de ovos típica do Piemonte) com ragu de cogumelos porcini também é uma excelente escolha, pois os sabores umami e terrosos dos cogumelos são realçados pelo vinho." }],
    story: "Angelo Gaja é uma figura lendária no Piemonte, conhecido por modernizar a produção de Barbaresco e Barolo, introduzindo técnicas como o uso de barricas francesas e a produção de vinhos de vinhedo único. Seus Barbarescos são sinônimo de elegância, complexidade e longevidade, verdadeiras expressões do terroir piemontês.",
    imageUrl: "images/wines/gaja_barbaresco_garrafa.jpg",
    priceIndicator: "R$1501-R$2500",
  },
  {
    id: "wine016",
    name: "Errazuriz Don Maximiano Founder's Reserve",
    producer: MOCK_PRODUCERS[14], 
    vintage: 2017,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Cabernet Sauvignon", percentage: 67 }, { name: "Carmenere", percentage: 15 }, { name: "Malbec", percentage: 8 }, {name: "Petit Verdot", percentage: 7}, {name: "Cabernet Franc", percentage: 3}],
    regionOfOrigin: { country: "Chile", region: "Vale do Aconcágua", terroirDetails: "Solos aluviais e coluviais, clima mediterrâneo com influência dos Andes e do Pacífico.", mapImageUrl: "images/regions/vale_do_aconcagua_chile_mapa.jpg"},
    vinificationProcess: "Colheita manual, seleção dupla de cachos e bagas, fermentação em tanques de aço inoxidável.",
    maturation: "22 meses em barricas de carvalho francês (70% novas).",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Cassis", "Amora", "Figo seco", "Chocolate amargo", "Notas de especiarias doces"], palate: "Concentrado e rico, taninos maduros e aveludados, excelente estrutura e equilíbrio, final longo e persistente com notas de frutas e carvalho.", guardPotential: "15-20+ anos" },
    harmonization: [{ dish: "Entrecôte com molho bordalês e batatas gratin dauphinoise", reasoning: "O Don Maximiano Founder's Reserve é um blend bordalês chileno de grande estatura, com Cabernet Sauvignon liderando em concentração e notas de cassis, complementado pela especiaria da Carmenere e fruta da Malbec. Sua riqueza, taninos aveludados e maturação em carvalho pedem pratos igualmente robustos. O entrecôte com molho bordalês é um par clássico, onde a estrutura do vinho sustenta a intensidade da carne e do molho rico. As batatas gratinadas, com sua cremosidade, são um contraponto delicioso ao corpo do vinho." }],
    story: "Don Maximiano Founder's Reserve é o vinho ícone da Viña Errazuriz, uma homenagem ao seu fundador. Representa o melhor do Vale do Aconcágua, combinando a potência da Cabernet Sauvignon com a complexidade de outras variedades bordalesas. Um vinho que consistentemente demonstra a capacidade do Chile de produzir tintos de classe mundial.",
    imageUrl: "images/wines/errazuriz_don_maximiano_founder_reserve_garrafa.jpg",
    priceIndicator: "R$501-R$800",
  },
  {
    id: "wine017",
    name: "Dr. Loosen Riesling Kabinett Wehlener Sonnenuhr",
    producer: MOCK_PRODUCERS[15], 
    vintage: 2021,
    wineStyle: "Branco Leve",
    grapeVarieties: [{ name: "Riesling", percentage: 100 }],
    regionOfOrigin: { country: "Alemanha", region: "Mosel", subRegion: "Wehlen", terroirDetails: "Vinhedo íngreme com solo de ardósia azul, exposição sul.", mapImageUrl: "images/regions/mosel_alemanha_mapa.jpg"},
    vinificationProcess: "Prensagem suave, fermentação lenta com leveduras naturais em grandes foudres de carvalho.",
    maturation: "Em foudres de carvalho sobre as lias finas.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Pêssego branco", "Maçã verde", "Flor de laranjeira", "Mel sutil", "Mineralidade (pedra molhada)"], palate: "Delicado e elegante, doçura residual equilibrada por acidez vibrante, final longo e refrescante.", guardPotential: "10-20 anos" },
    harmonization: [{ dish: "Cozinha asiática levemente condimentada (ex: Pad Thai com camarões ou frango)", reasoning: "O Dr. Loosen Wehlener Sonnenuhr Riesling Kabinett é um exemplo clássico da delicadeza e equilíbrio do Mosel. Sua doçura residual sutil, acidez vibrante e baixo teor alcoólico, combinados com aromas de pêssego, maçã verde e uma marcante mineralidade da ardósia, o tornam incrivelmente versátil com pratos asiáticos. Ele não compete com os temperos, mas os complementa, e sua acidez refresca o paladar de pratos com um toque de pimenta ou gordura (como do leite de coco). O adocicado leve do vinho harmoniza com os elementos agridoces comuns na culinária tailandesa ou vietnamita." }],
    story: "Um clássico Riesling Kabinett do Mosel, proveniente de um dos vinhedos mais famosos da região. Leveza, elegância e um equilíbrio perfeito entre doçura e acidez definem este vinho, ideal para apreciadores de brancos delicados e complexos.",
    imageUrl: "images/wines/sonnenuhr_garrafa.jpg",
    priceIndicator: "R$151-R$250",
  },
  {
    id: "wine018",
    name: "Zind-Humbrecht Gewürztraminer Grand Cru Hengst",
    producer: MOCK_PRODUCERS[16], 
    vintage: 2019,
    wineStyle: "Branco Encorpado",
    grapeVarieties: [{ name: "Gewürztraminer", percentage: 100 }],
    regionOfOrigin: { country: "França", region: "Alsácia", subRegion: "Grand Cru Hengst", terroirDetails: "Solo calcário-margoso, excelente exposição solar.", mapImageUrl: "https://picsum.photos/seed/mapAlsaceGC/600/400"},
    vinificationProcess: "Prensagem lenta, fermentação longa com leveduras indígenas em grandes tonéis de carvalho.",
    maturation: "Sobre as lias finas em tonéis de carvalho por 8-12 meses.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Lichia", "Pétalas de rosa", "Gengibre", "Maracujá", "Especiarias doces"], palate: "Exuberante e opulento, textura untuosa, acidez equilibrada que previne peso, final intensamente aromático e persistente.", guardPotential: "15-25 anos" },
    harmonization: [{ dish: "Queijo Munster com cominho e pão de especiarias", reasoning: "O Gewürztraminer Grand Cru Hengst da Zind-Humbrecht é um vinho exuberante e aromático, com notas intensas de lichia, rosas e especiarias, e uma textura rica e untuosa. Esta opulência é um par clássico para o queijo Munster, um queijo alsaciano de casca lavada, forte e pungente. A intensidade aromática do vinho não se intimida pelo queijo, e sua riqueza complementa a cremosidade do Munster. O cominho, frequentemente servido com Munster, encontra eco nas notas especiadas do vinho. Também é uma harmonização divina com foie gras ou pratos da culinária indiana ou tailandesa que sejam ricos e aromáticos."}],
    story: "Um Gewürztraminer de um dos Grand Crus mais prestigiados da Alsácia, elaborado por um mestre da biodinâmica. Explosão aromática, riqueza e complexidade definem este vinho gastronômico e de longa guarda.",
    imageUrl: "images/wines/gewürztraminer_garrafa.jpg",
    priceIndicator: "R$351-R$500",
  },
   {
    id: "wine019",
    name: "Miraval Rosé",
    producer: MOCK_PRODUCERS[22], 
    vintage: 2022,
    wineStyle: "Rosé",
    grapeVarieties: [{ name: "Cinsault" }, { name: "Grenache" }, { name: "Syrah" }, { name: "Rolle" }],
    regionOfOrigin: { country: "França", region: "Provence", terroirDetails: "Vinhedos em socalcos argilo-calcários.", mapImageUrl: "https://picsum.photos/seed/mapMiraval/600/400"},
    vinificationProcess: "Colheita manual, prensagem direta, fermentação em inox com controle de temperatura.",
    maturation: "Parte em inox, parte em barricas (5%) com bâtonnage.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas vermelhas frescas", "Pêssego branco", "Flores brancas", "Toque mineral"], palate: "Elegante e vibrante, boa acidez, final refrescante e persistente.", guardPotential: "2-3 anos" },
    harmonization: [{ dish: "Salada de verão com camarões grelhados, abacate e grapefruit", reasoning: "O Miraval Rosé é um vinho provençal elegante e vibrante, com notas de frutas vermelhas frescas, pêssego e um toque mineral. Sua acidez refrescante e corpo leve são ideais para pratos de verão. A salada com camarões grelhados é um excelente par, pois a doçura sutil dos camarões e do abacate é realçada pela fruta do vinho, enquanto a acidez da grapefruit e do próprio vinho limpam o paladar. É uma harmonização que evoca o frescor e a leveza da Riviera Francesa." }],
    story: "Um rosé de Provence que se tornou um ícone, combinando elegância, frescor e uma pitada de glamour. Produzido com uvas de alta qualidade, é um vinho que encanta pelo seu equilíbrio e versatilidade.",
    imageUrl: "images/wines/miraval_rose_garrafa.jpg",
    priceIndicator: "R$151-R$250",
  },
  {
    id: "wine020",
    name: "Ferrari Perlé Nero Riserva Brut",
    producer: MOCK_PRODUCERS[17], 
    vintage: 2015,
    wineStyle: "Espumante",
    grapeVarieties: [{ name: "Pinot Noir", percentage: 100 }],
    regionOfOrigin: { country: "Itália", region: "Trentodoc", terroirDetails: "Vinhedos de altitude nos Alpes Trentinos.", mapImageUrl: "https://picsum.photos/seed/mapTrento/600/400"},
    vinificationProcess: "Método clássico, com segunda fermentação na garrafa.",
    maturation: "Mínimo de 6 anos sobre as lias.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas vermelhas pequenas", "Crosta de pão", "Amêndoas torradas", "Notas minerais"], palate: "Estruturado e complexo, perlage finíssima, acidez vibrante, final longo e saboroso.", guardPotential: "5-10 anos" },
    harmonization: [{ dish: "Risoto de cogumelos porcini com lascas de parmesão envelhecido", reasoning: "O Ferrari Perlé Nero Riserva, um Blanc de Noirs de Pinot Noir, é um espumante de grande estrutura e complexidade, com notas de frutas vermelhas, autólise (crosta de pão) e um toque mineral. Sua acidez vibrante e corpo elegante são um par sofisticado para o risoto de cogumelos porcini. Os sabores terrosos e umami dos cogumelos são realçados pela complexidade do espumante, enquanto sua acidez corta a riqueza do risoto e do parmesão, criando um equilíbrio delicioso." }],
    story: "Um Blanc de Noirs de exceção da Ferrari, este espumante demonstra a incrível capacidade da Pinot Noir em Trentino para produzir vinhos borbulhantes de classe mundial. Complexidade, elegância e longevidade em cada taça.",
    imageUrl: "images/wines/perle_nero_garrafa.jpg",
    priceIndicator: "R$501-R$800",
  },
  {
    id: "wine021",
    name: "Gramona Imperial Brut Gran Reserva",
    producer: MOCK_PRODUCERS[18], 
    vintage: 2017, 
    wineStyle: "Espumante",
    grapeVarieties: [{ name: "Xarel·lo", percentage: 50 }, { name: "Macabeu", percentage: 30 }, { name: "Chardonnay", percentage: 15 }, { name: "Parellada", percentage: 5 }],
    regionOfOrigin: { country: "Espanha", region: "Penedès (Cava)", terroirDetails: "Solos argilo-calcários, influência mediterrânea.", mapImageUrl: "https://picsum.photos/seed/mapPenedes/600/400"},
    vinificationProcess: "Método tradicional, uso de licor de expedição de soleras centenárias.",
    maturation: "Mínimo de 60 meses sobre as lias.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Maçã madura", "Frutas secas (figo, damasco)", "Brioche", "Mel", "Notas de autólise (levedura)"], palate: "Cremoso e complexo, acidez bem integrada, perlage fina, final longo e elegante com toques oxidativos nobres.", guardPotential: "3-7 anos após disgorgement" },
    harmonization: [{ dish: "Jamón Ibérico de Bellota e queijo Manchego curado", reasoning: "O Gramona Imperial é um Cava de longa maturação, exibindo grande complexidade com notas de frutas secas, brioche e um toque oxidativo nobre, resultado do uso de licor de expedição de soleras. Esta complexidade e sua textura cremosa são um acompanhamento perfeito para a riqueza do Jamón Ibérico de Bellota e a intensidade do queijo Manchego curado. As notas amendoadas e de frutos secos do Cava espelham os sabores do presunto e do queijo, enquanto sua acidez equilibra a gordura." }],
    story: "Um dos Cavas mais prestigiados, Gramona Imperial é famoso por sua longa maturação e complexidade. Utiliza um licor de expedição de soleras familiares, conferindo um caráter único e uma profundidade notável.",
    imageUrl: "images/wines/gramona_garrafa.jpg",
    priceIndicator: "R$251-R$350",
  },
  {
    id: "wine022",
    name: "Château d'Yquem Sauternes",
    producer: MOCK_PRODUCERS[19], 
    vintage: 2015,
    wineStyle: "Sobremesa",
    grapeVarieties: [{ name: "Sémillon", percentage: 75 }, { name: "Sauvignon Blanc", percentage: 25 }],
    regionOfOrigin: { country: "França", region: "Bordeaux", subRegion: "Sauternes", terroirDetails: "Solos argilo-cascalhosos, microclima favorável à Botrytis Cinerea.", mapImageUrl: "images/regions/sauternes_bordeaux_mapa.jpg"},
    vinificationProcess: "Colheita manual seletiva (várias passagens), prensagem suave, fermentação em barricas de carvalho.",
    maturation: "30-36 meses em barricas de carvalho francês 100% novas.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Damasco seco", "Mel de acácia", "Casca de laranja cristalizada", "Açafrão", "Baunilha"], palate: "Opulento e untuoso, doçura perfeitamente equilibrada por acidez vibrante, complexidade infinita, final inacreditavelmente longo.", guardPotential: "50-100+ anos" },
    harmonization: [{ dish: "Roquefort com nozes e figos frescos", reasoning: "Château d'Yquem, o rei dos Sauternes, é um vinho de sobremesa de opulência e complexidade incomparáveis. Sua doçura rica, com notas de damasco, mel e açafrão, é perfeitamente equilibrada por uma acidez vibrante. O contraste clássico com o queijo Roquefort é lendário: a doçura e riqueza do Yquem envolvem a salinidade e pungência do queijo azul, criando uma harmonia sublime. As nozes e figos adicionam texturas e sabores que complementam ambos. Também é magnífico com foie gras poêlé ou uma tarte tatin." }],
    story: "O rei dos vinhos de sobremesa. Château d'Yquem é uma lenda, um vinho de complexidade, riqueza e longevidade extraordinárias, produzido apenas em anos excepcionais. Uma experiência transcendental.",
    imageUrl: "images/wines/sauternes_garrafa.jpg",
    priceIndicator: "R$2501-R$5000",
  },
  {
    id: "wine023",
    name: "Taylor's Vintage Port",
    producer: MOCK_PRODUCERS[20], 
    vintage: 2011, 
    wineStyle: "Sobremesa", 
    grapeVarieties: [{ name: "Touriga Nacional" }, { name: "Touriga Franca" }, { name: "Tinta Roriz" }, { name: "Tinto Cão" }], 
    regionOfOrigin: { country: "Portugal", region: "Douro", terroirDetails: "Vinhedos em socalcos íngremes de xisto.", mapImageUrl: "https://picsum.photos/seed/mapDouro/600/400"},
    vinificationProcess: "Fermentação tradicional em lagares com pisa a pé, interrompida pela adição de aguardente vínica.",
    maturation: "Cerca de 2 anos em grandes tonéis de carvalho antes de ser engarrafado sem filtração.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Frutas negras concentradas (amora, cassis)", "Violeta", "Alcaçuz", "Chocolate amargo", "Notas de especiarias"], palate: "Encorpado e poderoso, taninos massivos mas maduros, doçura equilibrada, enorme profundidade e final longo e persistente.", guardPotential: "20-50+ anos" },
    harmonization: [{ dish: "Queijo Stilton e nozes caramelizadas", reasoning: "O Taylor's Vintage Port é um vinho fortificado de grande poder e complexidade, com notas intensas de frutas negras, chocolate e especiarias, e taninos robustos. A harmonização clássica com queijo Stilton é um casamento feito no céu: a doçura e a potência do Porto equilibram a salinidade e a intensidade do queijo azul, enquanto suas notas de fruta e chocolate complementam os sabores do queijo. As nozes caramelizadas adicionam uma doçura crocante que ecoa a riqueza do vinho. Sobremesas de chocolate amargo intenso também são uma excelente escolha." }],
    story: "Os Vintage Ports da Taylor's são ícones de poder, estrutura e longevidade. Produzidos apenas nas melhores safras, representam a expressão máxima do terroir do Douro e da tradição da casa.",
    imageUrl: "images/wines/taylor_garrafa.jpg",
    priceIndicator: "R$501-R$800",
  },
  {
    id: "wine024",
    name: "Château Pétrus Pomerol",
    producer: MOCK_PRODUCERS[21], 
    vintage: 2009,
    wineStyle: "Tinto Encorpado",
    grapeVarieties: [{ name: "Merlot", percentage: 95 }, { name: "Cabernet Franc", percentage: 5 }],
    regionOfOrigin: { country: "França", region: "Bordeaux", subRegion: "Pomerol", terroirDetails: "Solo único de argila azul ('boutonnière d'argile bleue').", mapImageUrl: "images/regions/pomerol_bordeaux_mapa.jpg"},
    vinificationProcess: "Colheita manual, fermentação em cubas de cimento.",
    maturation: "18-20 meses em barricas de carvalho francês 100% novas.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Amora", "Ameixa preta", "Trufas", "Violeta", "Notas terrosas e de especiarias exóticas"], palate: "Incrivelmente rico e concentrado, textura aveludada, taninos perfeitamente integrados, profundidade e complexidade extraordinárias, final interminável.", guardPotential: "30-75+ anos" },
    harmonization: [{ dish: "Pombo assado com trufas negras frescas e purê de aipo-rábano", reasoning: "Château Pétrus, um Merlot quase puro de Pomerol, é um vinho de opulência e complexidade lendárias, com notas de frutas negras, trufas e uma textura aveludada inconfundível. Pratos de caça delicada como o pombo assado, especialmente quando acompanhados de trufas negras, espelham a riqueza e as notas terrosas do vinho. A intensidade do Pétrus, embora imensa, é equilibrada por uma elegância que não sobrecarrega a carne delicada. O purê de aipo-rábano oferece um contraponto terroso e levemente adocicado. Esta é uma harmonização para ocasiões verdadeiramente especiais." }],
    story: "Pétrus é mais que um vinho; é um mito. Proveniente de um pequeno vinhedo com um terroir excepcional em Pomerol, é um dos vinhos mais raros, cobiçados e caros do mundo. Uma expressão sublime da Merlot que atinge níveis de riqueza e complexidade inigualáveis.",
    imageUrl: "images/wines/petrus_garrafa.jpg",
    priceIndicator: "R$30000+", 
  },
  {
    id: "wine025",
    name: "Krug Grande Cuvée Brut",
    producer: MOCK_PRODUCERS[23], 
    vintage: 0, 
    wineStyle: "Espumante",
    grapeVarieties: [{ name: "Pinot Noir" }, { name: "Chardonnay" }, { name: "Meunier" }], 
    regionOfOrigin: { country: "França", region: "Champagne", terroirDetails: "Uvas de diversos vinhedos de alta qualidade em Champagne.", mapImageUrl: "https://picsum.photos/seed/mapKrug/600/400"},
    vinificationProcess: "Fermentação primária em pequenos barris de carvalho, assemblage de mais de 120 vinhos de mais de 10 safras diferentes.",
    maturation: "Mínimo de 6 anos sobre as lias.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Brioche tostado", "Nozes", "Mel", "Maçã madura", "Gengibre cristalizado", "Cítricos confitados"], palate: "Rico, complexo e cremoso, com acidez vibrante, perlage fina e persistente, profundidade e persistência notáveis.", guardPotential: "10-20+ anos (pode evoluir lindamente)" },
    harmonization: [{ dish: "Lagosta Thermidor ou Vieiras grelhadas com purê de couve-flor trufado", reasoning: "Krug Grande Cuvée é um Champagne de extraordinária complexidade e riqueza, resultado de um assemblage de múltiplas safras e vinificações em carvalho. Suas notas de brioche tostado, nozes e mel, aliadas a uma acidez vibrante, pedem pratos igualmente suntuosos. A Lagosta Thermidor, com sua riqueza e cremosidade, é um par clássico. As vieiras grelhadas, especialmente com um purê trufado, também se beneficiam da complexidade e da capacidade do Krug de limpar o paladar, enquanto suas notas de frutos secos e tostados complementam os sabores do prato. Queijos como Comté envelhecido ou Brie trufado também são excelentes." }],
    story: "Krug Grande Cuvée é a expressão máxima da filosofia da Maison Krug: recriar a cada ano um Champagne de plenitude e elegância incomparáveis, independentemente das variações climáticas. Um feito de assemblage que resulta em uma complexidade e profundidade únicas.",
    imageUrl: "images/wines/krug_garrafa.jpg",
    priceIndicator: "R$1501-R$2500",
  },
  {
    id: "wine026",
    name: "Inniskillin Vidal Icewine",
    producer: MOCK_PRODUCERS[24], 
    vintage: 2019,
    wineStyle: "Sobremesa", 
    grapeVarieties: [{ name: "Vidal Blanc", percentage: 100 }],
    regionOfOrigin: { country: "Canadá", region: "Niagara Peninsula", terroirDetails: "Uvas colhidas congeladas naturalmente na videira a -8°C ou menos.", mapImageUrl: "https://picsum.photos/seed/mapNiagara/600/400"},
    vinificationProcess: "Prensagem das uvas congeladas para extrair um mosto altamente concentrado, fermentação lenta em tanques de inox.",
    maturation: "Em tanques de inox para preservar a pureza da fruta.",
    tastingNotes: { by: "Luigi Frescobaldi", aromaticProfile: ["Pêssego maduro", "Damasco", "Lichia", "Mel", "Manga"], palate: "Doçura intensa e luxuosa, equilibrada por uma acidez vibrante, textura untuosa, final longo e persistente com notas de frutas tropicais.", guardPotential: "10-20 anos" },
    harmonization: [{ dish: "Cheesecake de frutas tropicais (maracujá, manga) ou Tarte Tatin de pêssego", reasoning: "O Inniskillin Vidal Icewine é um néctar doce e concentrado, com aromas exuberantes de pêssego, damasco e frutas tropicais, equilibrado por uma acidez vibrante. Esta doçura e perfil aromático o tornam um par perfeito para sobremesas à base de frutas. Um cheesecake de frutas tropicais ecoa as notas do vinho, enquanto sua acidez corta a riqueza do cream cheese. Uma Tarte Tatin de pêssego, com sua caramelização e fruta cozida, também seria deliciosa. Fora das sobremesas, é clássico com patê de foie gras, onde a doçura e acidez contrastam com a untuosidade do patê." }],
    story: "Inniskillin é um pioneiro na produção de Icewine de classe mundial. Este Vidal Icewine é um exemplo clássico, com sua doçura exuberante, acidez refrescante e um perfil aromático intenso de frutas tropicais. Uma verdadeira iguaria líquida.",
    imageUrl: "images/wines/inniskillin_garrafa.jpg",
    priceIndicator: "R$351-R$500",
  },
];


export const MOCK_SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "tier1",
    name: "O Explorador",
    tagline: "A porta de entrada para o universo Tesori di Bacco.",
    pricePerMonth: 249,
    bottleCountDescription: "2 garrafas selecionadas por mês",
    wineValueRange: "Vinhos entre R$80-R$150 por garrafa",
    curationConcept: "Ideal para quem inicia sua jornada no mundo dos vinhos ou deseja descobrir novas uvas, regiões e produtores artesanais com excelente relação qualidade-prazer.",
    benefits: {
      general: ["Curadoria especializada por Luigi Frescobaldi", "Fichas técnicas detalhadas de cada vinho", "Sugestões de harmonização personalizadas"],
      cellarAccess: "Acesso básico à La Collezione Frescobaldi (visualização de todos os vinhos, detalhes limitados para vinhos de tiers superiores)",
      journalAccess: "Acesso aos artigos gerais do Il Diario del Sommelier",
      gastronomyPerks: "Notificações sobre eventos e parcerias gastronômicas Tesori di Bacco",
    },
    representativeWines: [
      { id: "wine004", name: MOCK_WINES.find(w=>w.id === "wine004")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine004")!.imageUrl },
      { id: "wine011", name: MOCK_WINES.find(w=>w.id === "wine011")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine011")!.imageUrl },
    ]
  },
  {
    id: "tier2",
    name: "O Curioso",
    tagline: "Aprofunde seus sentidos e conhecimentos.",
    pricePerMonth: 479,
    bottleCountDescription: "3 garrafas premium por mês",
    wineValueRange: "Vinhos entre R$120-R$250 por garrafa",
    curationConcept: "Para entusiastas que buscam vinhos com maior complexidade, de produtores renomados ou terroirs distintos, ampliando o repertório sensorial e o conhecimento.",
    benefits: {
      general: ["Todos os benefícios do Explorador", "Vinhos de maior complexidade e valor agregado"],
      cellarAccess: "Acesso ampliado à La Collezione Frescobaldi (detalhes completos da maioria dos vinhos, notas de produtores)",
      journalAccess: "Acesso a artigos gerais e selecionados artigos premium do Il Diario del Sommelier",
      gastronomyPerks: "Acesso antecipado a reservas em eventos gastronômicos Tesori di Bacco",
      exclusiveEvents: "Convites para degustações online temáticas com Luigi Frescobaldi (ocasionais)",
    },
    isPopular: true,
    representativeWines: [
       { id: "wine001", name: MOCK_WINES.find(w=>w.id === "wine001")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine001")!.imageUrl },
       { id: "wine008", name: MOCK_WINES.find(w=>w.id === "wine008")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine008")!.imageUrl },
    ]
  },
  {
    id: "tier3",
    name: "Seleção Sob Medida",
    tagline: "Sua paixão, nossa curadoria personalizada.",
    pricePerMonth: 799,
    bottleCountDescription: "4 garrafas, com escolhas personalizadas",
    wineValueRange: "Vinhos entre R$200-R$400 por garrafa (média)",
    curationConcept: "Uma experiência flexível e premium. Escolha parte de sua seleção na La Collezione Frescobaldi e receba complementos surpreendentes curados por Luigi, alinhados ao seu perfil de gosto.",
    benefits: {
      general: ["Todos os benefícios do Curioso", "Flexibilidade na escolha de 2-3 vinhos mensalmente (de uma seleção pré-aprovada)"],
      cellarAccess: "Acesso completo à La Collezione Frescobaldi (todos os detalhes, análises aprofundadas)",
      journalAccess: "Acesso irrestrito a todo o conteúdo do Il Diario del Sommelier, incluindo artigos premium e entrevistas",
      gastronomyPerks: "Assistência para reservas em restaurantes parceiros (sujeito a disponibilidade)",
      exclusiveEvents: "Acesso prioritário a degustações online e Q&A com Luigi Frescobaldi",
      personalization: "Perfil de preferências para guiar as surpresas da curadoria",
    },
     representativeWines: [
      { id: "wine007", name: MOCK_WINES.find(w=>w.id === "wine007")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine007")!.imageUrl },
      { id: "wine009", name: MOCK_WINES.find(w=>w.id === "wine009")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine009")!.imageUrl },
    ]
  },
  {
    id: "tier4",
    name: "O Colecionador",
    tagline: "Raridades e ícones para sua adega particular.",
    pricePerMonth: 1399,
    bottleCountDescription: "3-4 garrafas excepcionais/raras por mês",
    wineValueRange: "Vinhos entre R$400-R$800+ por garrafa",
    curationConcept: "Para o conhecedor sério que busca vinhos de guarda, edições limitadas, produtores de culto e exemplares que contam histórias únicas. Foco em potencial de envelhecimento e exclusividade.",
    benefits: {
      general: ["Todos os benefícios da Seleção Sob Medida", "Prioridade na alocação de vinhos de produção limitada"],
      cellarAccess: "Acesso VIP à La Collezione Frescobaldi, incluindo notas de safras antigas e contato direto para aquisições especiais",
      journalAccess: "Acesso irrestrito, incluindo conteúdo exclusivo para Colecionadores",
      gastronomyPerks: "Benefícios exclusivos em restaurantes parceiros selecionados (e.g., welcome drink, menu especial)",
      exclusiveEvents: "Convites para eventos presenciais Tesori di Bacco (degustações exclusivas, jantares harmonizados)",
      conciergeServices: "Sessão de consultoria de adega com Luigi Frescobaldi (anual)",
    },
    representativeWines: [
      { id: "wine003", name: MOCK_WINES.find(w=>w.id === "wine003")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine003")!.imageUrl },
      { id: "wine012", name: MOCK_WINES.find(w=>w.id === "wine012")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine012")!.imageUrl },
    ]
  },
  {
    id: "tier5",
    name: "O Conoscitore Supremo",
    tagline: "O ápice da experiência Tesori di Bacco.",
    pricePerMonth: 2499,
    bottleCountDescription: "2-3 garrafas icônicas/de culto por mês",
    wineValueRange: "Vinhos entre R$800-R$1500+ por garrafa",
    curationConcept: "A mais alta expressão da curadoria Tesori di Bacco. Vinhos de prestígio mundial, safras raras, grandes formatos ou descobertas extraordinárias que definem o luxo no mundo do vinho.",
    benefits: {
      general: ["Todos os benefícios do Colecionador", "Alocação garantida dos vinhos mais raros e disputados"],
      cellarAccess: "Acesso total e prioritário, incluindo pré-lançamentos e 'off-market finds'",
      journalAccess: "Acesso irrestrito, incluindo relatórios de safras e artigos de colecionador",
      gastronomyPerks: "Experiências gastronômicas personalizadas e acesso a mesas do chef em parceiros selecionados",
      exclusiveEvents: "Convites VIP para todos os eventos Tesori di Bacco, incluindo encontros com produtores",
      conciergeServices: "Linha direta com Luigi Frescobaldi para consultoria enológica e de harmonização ilimitada; Presente anual exclusivo de alto valor.",
    },
     representativeWines: [
        { id: "wine002", name: MOCK_WINES.find(w=>w.id === "wine002")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine002")!.imageUrl },
        { id: "wine006", name: MOCK_WINES.find(w=>w.id === "wine006")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine006")!.imageUrl },
    ]
  },
  {
    id: "tier6",
    name: "L'Elite di Bacco", 
    tagline: "O santuário da exclusividade máxima.",
    pricePerMonth: 7999, 
    bottleCountDescription: "1-2 garrafas 'once-in-a-lifetime' + itens gourmet de luxo",
    wineValueRange: "Vinhos de valor inestimável ou R$5000+ por garrafa",
    curationConcept: "Apenas por convite. Uma imersão no pináculo do luxo enogastronômico, com os vinhos mais raros do mundo, acompanhados por produtos gourmet de exceção e experiências inigualáveis.",
    benefits: {
      general: ["Todos os benefícios do Conoscitore Supremo, elevados a um novo patamar de personalização e exclusividade."],
      cellarAccess: "Acesso 'chave da adega' com Luigi para seleções sob medida e aquisições de coleções.",
      journalAccess: "Conteúdo sob medida, incluindo relatórios de investimento em vinhos.",
      gastronomyPerks: "Organização de jantares privados em restaurantes estrelados ou com chefs renomados.",
      exclusiveEvents: "Convites para viagens enológicas internacionais exclusivas com os fundadores.",
      conciergeServices: "Serviço de concierge de lifestyle completo focado em enogastronomia.",
    },
    isInviteOnly: true,
    gourmetItemsIncluded: "Queijos italianos artesanais raros, Prosciutto di Parma Riserva Oro, azeite extra virgem de olivas centenárias, trufas brancas de Alba (na estação).",
    representativeWines: [
        { id: "wine005", name: MOCK_WINES.find(w=>w.id === "wine005")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine005")!.imageUrl },
        { id: "wine024", name: MOCK_WINES.find(w=>w.id === "wine024")!.name, imageUrl: MOCK_WINES.find(w=>w.id === "wine024")!.imageUrl },
    ]
  },
];

const updateRestaurantWines = (restaurantId: string, wineIds: string[]): Pick<Wine, 'id' | 'name'>[] => {
    return wineIds.map(wineId => {
        const wine = MOCK_WINES.find(w => w.id === wineId);
        return { id: wineId, name: wine ? wine.name : "Vinho não encontrado" };
    }).filter(wine => wine.name !== "Vinho não encontrado");
};

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "rest1", name: "D.O.M.", chef: "Alex Atala", cuisineType: "Brasileira Contemporânea", city: "São Paulo", country: "Brasil", michelinStars: 2,
    philosophy: "Valorização dos ingredientes brasileiros com técnica e criatividade, buscando a máxima expressão do terroir nacional.", 
    imageUrl: "images/restaurants/dom_restaurante.jpg", websiteUrl: "https://domrestaurante.com.br/",
    eclatWinesServed: updateRestaurantWines("rest1", ["wine001", "wine007", "wine017", "wine020"]), 
    memberBenefit: "Menu degustação harmonizado para membros 'O Conoscitore Supremo'.", 
    interviewLink: RoutePath.ArticleDetail.replace(':articleId', 'art-chef-atala'),
    historyAndPrestige: "Fundado em 1999, o D.O.M. rapidamente se tornou uma referência mundial pela sua abordagem inovadora aos ingredientes amazônicos e brasileiros. Consistentemente listado entre os melhores restaurantes do mundo pelo The World's 50 Best Restaurants, Alex Atala e o D.O.M. foram pioneiros em colocar a culinária brasileira no mapa da alta gastronomia global.",
    signatureDishes: [
        { name: "Aligot de Mandioquinha com Queijo da Serra da Canastra", description: "Uma reinterpretação brasileira do clássico francês, utilizando mandioquinha no lugar da batata, resultando em uma textura incrivelmente cremosa e sabor único." },
        { name: "Formiga Saúva Amazônica", description: "Um dos pratos mais emblemáticos e ousados, onde a formiga saúva, com seu sabor cítrico que lembra capim-limão, é servida sobre um pequeno merengue, desafiando percepções e celebrando a biodiversidade." },
        { name: "Filhote com Tucupi e Açaí", description: "Um peixe amazônico nobre, o filhote, preparado com tucupi (caldo amarelo extraído da mandioca brava) e acompanhado de pérolas de açaí, mostrando a riqueza de sabores da Amazônia." }
    ],
    culinaryHighlights: "Utilização extensiva de ingredientes amazônicos raros e pouco conhecidos, pesquisa constante de novos sabores e texturas da biodiversidade brasileira, técnicas de cozinha contemporânea aplicadas a produtos nativos, forte compromisso com a sustentabilidade e pequenos produtores.",
    ambianceDescription: "Ambiente sofisticado e elegante, com decoração minimalista que valoriza a arte e o design brasileiros. A atmosfera é intimista e o serviço é impecável, focado em proporcionar uma experiência gastronômica memorável e imersiva."
  },
  {
    id: "rest2", name: "Maní", chef: "Helena Rizzo", cuisineType: "Brasileira Orgânica", city: "São Paulo", country: "Brasil", michelinStars: 1,
    philosophy: "Ingredientes orgânicos e sazonais em pratos que surpreendem pela simplicidade aparente e profundidade de sabor, valorizando o pequeno produtor.", 
    imageUrl: "images/restaurants/mani_restaurante.jpg", websiteUrl: "https://manimanioca.com.br/",
    eclatWinesServed: updateRestaurantWines("rest2", ["wine004", "wine008", "wine019", "wine011"]),
    historyAndPrestige: "Desde sua inauguração em 2006, o Maní, sob o comando da chef Helena Rizzo (eleita Melhor Chef Mulher do Mundo em 2014 pelo The World's 50 Best Restaurants), conquistou paladares com sua cozinha criativa, saborosa e focada em ingredientes orgânicos. O restaurante é um oásis de tranquilidade em São Paulo, conhecido por seu ambiente charmoso e pratos que são ao mesmo tempo reconfortantes e inovadores.",
    signatureDishes: [
        { name: "Ovo Perfeito com Espuma de Pupunha", description: "Um ovo cozido em baixa temperatura até atingir a perfeição, servido com uma delicada e aerada espuma de palmito pupunha, um clássico do Maní." },
        { name: "Moqueca de Caju", description: "Uma surpreendente versão vegetariana da moqueca, onde o caju assume o papel principal, cozido em leite de coco com dendê e especiarias, resultando em um prato rico e aromático." },
        { name: "Bolo de Chocolate da Helena", description: "Uma sobremesa icônica, conhecida por sua textura perfeita e sabor intenso de chocolate, frequentemente citada como um dos melhores bolos de chocolate da cidade." }
    ],
    culinaryHighlights: "Foco em ingredientes orgânicos e de pequenos produtores, cozinha criativa com forte base técnica, releituras surpreendentes de pratos tradicionais brasileiros, valorização da sazonalidade, pratos vegetarianos e veganos de destaque.",
    ambianceDescription: "Ambiente acolhedor e charmoso, com um jardim interno que traz a natureza para dentro do restaurante. A decoração é rústico-chique, com muita luz natural durante o dia e uma atmosfera romântica à noite. Ideal para refeições especiais e encontros descontraídos."
  },
  {
    id: "rest3", name: "Glouton", chef: "Leo Paixão", cuisineType: "Mineira Contemporânea", city: "Belo Horizonte", country: "Brasil",
    philosophy: "Reinterpretação moderna da cozinha mineira de raiz, com técnica apurada, ingredientes locais frescos e uma pitada de ousadia.", 
    imageUrl: "images/restaurants/glouton_restaurante.jpg", websiteUrl: "#",
    eclatWinesServed: updateRestaurantWines("rest3", ["wine001", "wine007", "wine004", "wine010"]),
    memberBenefit: "Welcome drink especial para membros Tesori di Bacco 'O Colecionador' e superiores.",
    historyAndPrestige: "O Glouton rapidamente se estabeleceu como um dos principais destinos gastronômicos de Belo Horizonte, com o chef Leo Paixão sendo reconhecido por sua habilidade em modernizar a rica culinária mineira sem perder sua essência. O restaurante coleciona prêmios locais e nacionais, destacando-se pela criatividade e pela qualidade dos ingredientes.",
    signatureDishes: [
        { name: "Barriga de Porco Crocante com Canjiquinha Cremosa e Ora-pro-nóbis", description: "Um clássico do Glouton, onde a barriga de porco é cozida lentamente até ficar macia por dentro e com a pele incrivelmente crocante, acompanhada de uma canjiquinha rica e da tradicional ora-pro-nóbis." },
        { name: "Língua Defumada com Jiló Caramelizado", description: "Um prato que desafia e encanta, mostrando a versatilidade da língua bovina, defumada e macia, contrastando com o amargor adocicado do jiló." },
        { name: "Pudim de Leite Queimado", description: "Uma sobremesa que eleva o tradicional pudim a outro nível, com uma calda de caramelo intensa e textura impecável." }
    ],
    culinaryHighlights: "Técnicas francesas aplicadas a ingredientes mineiros, valorização de produtos da horta própria e de produtores locais, pratos que equilibram tradição e inovação, menu degustação que oferece uma jornada pela cozinha do chef.",
    ambianceDescription: "Ambiente elegante e contemporâneo, com um toque de rusticidade charmosa que remete a Minas Gerais. O salão é bem iluminado e o serviço é atencioso, proporcionando uma experiência sofisticada mas acolhedora."
  },
  {
    id: "rest4", name: "Xapuri", chef: "Nelsa Trombino (Fundadora)", cuisineType: "Mineira Tradicional", city: "Belo Horizonte", country: "Brasil",
    philosophy: "Autêntica comida mineira de fazenda, em um ambiente rústico e acolhedor, preservando receitas e tradições familiares.", 
    imageUrl: "images/restaurants/xapuri_restaurante.jpg", websiteUrl: "#",
    historyAndPrestige: "Fundado em 1987 por Dona Nelsa Trombino, o Xapuri é uma instituição em Belo Horizonte, conhecido por servir a mais autêntica e farta comida mineira. É um local que preserva as tradições da cozinha de roça, com pratos feitos no fogão a lenha e um ambiente que transporta os clientes para uma fazenda mineira.",
    signatureDishes: [
        { name: "Frango ao Molho Pardo", description: "Um prato emblemático da culinária mineira, preparado com maestria no Xapuri, com frango caipira cozido lentamente em seu próprio sangue, resultando em um molho rico e saboroso." },
        { name: "Costelinha de Porco na Lata com Tutu à Mineira", description: "Costelinha de porco conservada na banha, uma técnica tradicional, servida com o clássico tutu de feijão, couve e torresmo." },
        { name: "Doce de Leite Cremoso com Queijo Minas Frescal", description: "A combinação perfeita para finalizar uma refeição mineira, com doce de leite caseiro e queijo fresco da região." }
    ],
    culinaryHighlights: "Cozinha tradicional mineira feita no fogão a lenha, utilização de ingredientes frescos e de qualidade, porções generosas, preservação de receitas e técnicas ancestrais, ambiente familiar e acolhedor.",
    ambianceDescription: "Ambiente rústico e espaçoso, decorado como uma grande casa de fazenda, com amplas varandas, jardins e até um pequeno lago. Ideal para refeições em família e para quem busca uma experiência autêntica da cultura mineira."
  },
   {
    id: "rest5", name: "A Casa do Porco Bar", chef: "Jefferson Rueda", cuisineType: "Brasileira (Foco em Porco)", city: "São Paulo", country: "Brasil",
    philosophy: "Celebração da carne suína em todas as suas formas, do focinho ao rabo, com criatividade, técnica e um toque de irreverência.", 
    imageUrl: "images/restaurants/porco_restaurante.jpg", websiteUrl: "#",
    historyAndPrestige: "Inaugurada em 2015, A Casa do Porco Bar rapidamente se tornou um fenômeno em São Paulo e no Brasil, figurando em listas de melhores restaurantes da América Latina. O chef Jefferson Rueda demonstra um profundo conhecimento e respeito pela carne suína, apresentando-a em pratos inovadores e deliciosos, com um ótimo custo-benefício.",
    signatureDishes: [
        { name: "Porco San Zé", description: "O prato principal da casa, um porco inteiro assado lentamente por horas até ficar com a pele pururucada e a carne desmanchando, servido com acompanhamentos variados." },
        { name: "Sushi de Bochecha de Porco com Tucupi Preto", description: "Uma criação surpreendente que combina a delicadeza da bochecha de porco com a intensidade do tucupi preto, em formato de sushi." },
        { name: "Torresmo de Pancetta com Goiabada", description: "Um torresmo de barriga executado à perfeição, crocante e carnudo, acompanhado de uma goiabada picante que equilibra os sabores." }
    ],
    culinaryHighlights: "Utilização de todas as partes do porco (nose-to-tail), produção própria de embutidos e charcutaria, pratos criativos e bem executados, ambiente descontraído e democrático, excelente relação qualidade-preço.",
    ambianceDescription: "Ambiente vibrante, colorido e descontraído, com uma atmosfera de bar animado. Frequentemente há filas, o que atesta sua popularidade. O serviço é ágil e informal, combinando com a proposta da casa."
  },
  {
    id: "rest8", name: "Mirazur", chef: "Mauro Colagreco", cuisineType: "Mediterrânea Criativa", city: "Menton", country: "França", michelinStars: 3,
    philosophy: "Cozinha baseada nos ciclos da natureza, com ingredientes do próprio jardim biodinâmico e do mar Mediterrâneo, refletindo a identidade única da fronteira franco-italiana.", 
    imageUrl: "images/restaurants/mirazur_restaurante.jpg", websiteUrl: "#",
    memberBenefit: "Prioridade na lista de espera para membros 'L'Elite di Bacco'.", 
    interviewLink: RoutePath.ArticleDetail.replace(':articleId', 'art-chef-colagreco'),
    historyAndPrestige: "Localizado em Menton, na Côte d'Azur, o Mirazur, sob a batuta do chef argentino Mauro Colagreco, alcançou o topo da gastronomia mundial, sendo eleito o Melhor Restaurante do Mundo em 2019 pelo The World's 50 Best Restaurants e ostentando três estrelas Michelin. Sua cozinha é uma celebração do terroir local, com forte influência dos seus cinco jardins biodinâmicos e da proximidade com o mar.",
    signatureDishes: [
        { name: "Ostra com Pera, Chalota e Flor de Borragem", description: "Uma combinação emblemática que reflete a filosofia do chef: a ostra traz o frescor do mar, a pera adiciona uma doçura sutil, a chalota um toque picante e a flor de borragem um delicado sabor de pepino e beleza visual." },
        { name: "Beterraba do Jardim em Crosta de Sal com Caviar Oscietra", description: "A beterraba, cultivada no jardim do Mirazur, é assada em crosta de sal para concentrar seu sabor adocicado e terroso, contrastando com a salinidade luxuosa do caviar." },
        { name: "Pão Compartilhado com Poema de Pablo Neruda", description: "Mais que um prato, uma experiência. Um pão artesanal, feito com grãos ancestrais, servido com azeite de oliva da região e um poema, simbolizando a partilha e a conexão com a terra." }
    ],
    culinaryHighlights: "Cozinha de autor baseada em ingredientes biodinâmicos dos próprios jardins, frescor absoluto dos produtos do mar e da montanha, criatividade que respeita a sazonalidade e os ciclos lunares, pratos visualmente deslumbrantes com sabores puros e intensos.",
    ambianceDescription: "Ambiente elegante e luminoso, com uma arquitetura modernista dos anos 30 e vistas panorâmicas espetaculares do Mar Mediterrâneo. O serviço é atencioso e sofisticado, proporcionando uma experiência imersiva e memorável, onde a natureza é a protagonista."
  },
  {
    id: "rest9", name: "Osteria Francescana", chef: "Massimo Bottura", cuisineType: "Italiana Moderna", city: "Modena", country: "Itália", michelinStars: 3,
    philosophy: "Tradição italiana revisitada com vanguarda, arte e pensamento crítico, contando histórias através dos pratos.", 
    imageUrl: "images/restaurants/francescana_restaurante.jpg", websiteUrl: "#",
     historyAndPrestige: "A Osteria Francescana, do chef Massimo Bottura, em Modena, é um dos restaurantes mais influentes e aclamados do mundo, tendo sido eleito por duas vezes o Melhor Restaurante do Mundo. Bottura é conhecido por sua abordagem filosófica e artística à culinária italiana, desafiando tradições enquanto as homenageia profundamente.",
    signatureDishes: [
        { name: "Le Cinque Stagionature del Parmigiano Reggiano", description: "Uma obra-prima que explora o Parmigiano Reggiano em cinco diferentes texturas e temperaturas, cada uma representando uma diferente maturação do queijo, mostrando a profundidade e complexidade de um ingrediente simples." },
        { name: "Oops! Mi è Caduta la Crostata di Limone (Oops! Deixei Cair a Torta de Limão)", description: "Uma sobremesa desconstruída que simula um 'acidente' na cozinha, transformando um erro em uma bela e deliciosa obra de arte, com sabores cítricos vibrantes." },
        { name: "Memory of a Mortadella Sandwich", description: "Uma releitura nostálgica e sofisticada do sanduíche de mortadela da infância do chef, transformada em uma espuma etérea de mortadela com gnocco fritto crocante." }
    ],
    culinaryHighlights: "Reinterpretação artística e intelectual da culinária italiana, profundo respeito pelos ingredientes e produtores locais da Emilia-Romagna, pratos que contam histórias e provocam emoções, combinação de técnica impecável com criatividade ilimitada.",
    ambianceDescription: "Ambiente íntimo e elegante, decorado com obras de arte contemporânea selecionadas pelo próprio chef. Cada um dos poucos lugares oferece uma experiência exclusiva e pessoal, onde a comida é o centro de uma narrativa cultural e sensorial."
  },
];


export const MOCK_ARTICLES: JournalArticle[] = [
  {
    id: "art1",
    title: "Os Segredos da Harmonização com Queijos Finos e Vinhos Tesori di Bacco",
    author: "Luigi Frescobaldi", 
    publishDate: "2024-07-15",
    category: "Harmonização",
    summary: "Descubra como combinar vinhos e queijos para uma experiência sensorial inesquecível, explorando texturas, sabores e os rótulos selecionados pela Tesori di Bacco que elevam essa união. Uma jornada de 1000 palavras pelos queijos artesanais e vinhos surpreendentes.",
    content: `
<p>A arte de harmonizar vinhos e queijos é uma jornada deliciosa, capaz de despertar sensações surpreendentes e sofisticadas. Na Tesori di Bacco, acreditamos que a escolha certa pode transformar uma simples degustação em um momento memorável. Vamos explorar alguns princípios e sugestões com os vinhos de nossa curadoria.</p>
<h3 class="text-2xl font-serif mt-6 mb-3">Princípios Fundamentais da Harmonização Queijo-Vinho</h3>
<p class="mb-2"><strong>Equilíbrio de Intensidade:</strong> Este é o pilar central. Queijos delicados, como um chèvre fresco ou uma mozzarella de búfala, pedem vinhos igualmente sutis – pense em um Sauvignon Blanc vibrante como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine008')}" class="text-burgundy-accent hover:underline">Cloudy Bay Sauvignon Blanc</a> ou um Pinot Grigio leve. Sua acidez cortante e perfil aromático limpo respeitam a delicadeza do queijo sem sobrepujá-lo. Por outro lado, queijos potentes e curados, como um Parmigiano-Reggiano envelhecido (com suas notas umami e cristais de tirosina) ou um Roquefort intenso e salgado, harmonizam melhor com vinhos mais encorpados e aromáticos. Um Cabernet Sauvignon robusto como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine001')}" class="text-burgundy-accent hover:underline">Aurora Millésime Cabernet Sauvignon</a>, com seus taninos estruturados e notas de frutas negras, ou um vinho de sobremesa fortificado, como um Porto Vintage (<a href="${RoutePath.WineDetail.replace(':wineId', 'wine023')}" class="text-burgundy-accent hover:underline">Taylor's Vintage Port</a>), podem ser excelentes parceiros, oferecendo um contraponto de força ou doçura, respectivamente.</p>
<p class="mb-2"><strong>Contraste ou Semelhança (Complementaridade):</strong> Podemos buscar harmonizações por contraste ou por afinidade. O contraste pode ser mágico: um vinho doce como um Sauternes (<a href="${RoutePath.WineDetail.replace(':wineId', 'wine022')}" class="text-burgundy-accent hover:underline">Château d'Yquem</a>) ou um Porto Tawny com um queijo azul salgado e picante cria uma explosão de sabores. A doçura do vinho equilibra o sal e a intensidade do queijo, enquanto sua acidez refresca o paladar. Já a afinidade busca complementar características: um queijo de cabra fresco, com sua acidez e notas herbáceas, casa perfeitamente com um Sauvignon Blanc que compartilhe dessas características (novamente, o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine008')}" class="text-burgundy-accent hover:underline">Cloudy Bay</a> é um exemplo perfeito). Um Chardonnay barricado com notas amanteigadas pode encontrar um par em um queijo cheddar envelhecido, que também possui essa riqueza.</p>
<p class="mb-2"><strong>Texturas e Regionalidade:</strong> A textura do queijo também importa. Queijos cremosos como um Brie ou Camembert vão bem com vinhos que tenham boa acidez para limpar o paladar e efervescência para contrastar com a untuosidade, como um Champagne Brut (<a href="${RoutePath.WineDetail.replace(':wineId', 'wine010')}" class="text-burgundy-accent hover:underline">Veuve Clicquot Brut</a>) ou um Cava de longa maturação como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine021')}" class="text-burgundy-accent hover:underline">Gramona Imperial</a>. Um Chardonnay sem muita madeira, mas com boa acidez, também pode funcionar. A regionalidade é outra dica valiosa: muitas vezes, vinhos e queijos da mesma região evoluíram juntos e formam pares naturais. Pense no Sancerre com queijo de cabra do Loire, ou um Pecorino Toscano com Chianti.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Sugestões Detalhadas com a Seleção Tesori di Bacco</h3>

<p class="mb-2"><strong>Queijos Azuis (Gorgonzola, Roquefort, Stilton):</strong> A intensidade e o salgado pungente desses queijos pedem vinhos com doçura para equilibrar ou tintos muito potentes.</p>
    <ul class="list-disc list-inside ml-4 mb-4 space-y-1">
        <li><em>Clássico Doce:</em> Um Porto Vintage como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine023')}" class="text-burgundy-accent hover:underline">Taylor's Vintage Port</a>, com sua doçura concentrada de frutas negras e estrutura tânica, é um par divino para o Stilton. Um Sauternes como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine022')}" class="text-burgundy-accent hover:underline">Château d'Yquem</a>, com sua riqueza de mel e damasco e acidez vibrante, eleva o Roquefort a outro nível. O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine026')}" class="text-burgundy-accent hover:underline">Inniskillin Vidal Icewine</a>, com sua doçura tropical intensa, também oferece um contraste delicioso.</li>
        <li><em>Tinto Ousado:</em> Para quem prefere tintos, um Malbec argentino concentrado como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine003')}" class="text-burgundy-accent hover:underline">Catena Zapata Malbec Argentino</a>, com sua fruta madura e taninos presentes, pode criar um contraste interessante, especialmente com queijos azuis mais suaves como um Gorgonzola dolce. Um Amarone della Valpolicella também seria uma escolha intrigante.</li>
    </ul>

<p class="mb-2"><strong>Queijos Curados e Duros (Parmesão, Gruyère, Comté, Manchego, Canastra Curado):</strong> Estes queijos, com sabores complexos, notas amendoadas, salgadas e, por vezes, picantes, vão bem com tintos estruturados e brancos encorpados.</p>
    <ul class="list-disc list-inside ml-4 mb-4 space-y-1">
        <li><em>Tintos Estruturados:</em> O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine001')}" class="text-burgundy-accent hover:underline">Aurora Millésime Cabernet Sauvignon</a> é uma excelente escolha para um Canastra curado ou um Parmesão. Seus taninos e complexidade aromática encontram par na intensidade do queijo. Um Syrah potente como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine007')}" class="text-burgundy-accent hover:underline">Guaspari Vista da Serra Syrah</a> também seria magnífico com um Manchego curado. Para um Comté de maturação longa, um Barbaresco como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine015')}" class="text-burgundy-accent hover:underline">Gaja Barbaresco</a>, com seus taninos finos e notas terrosas, pode ser surpreendente.</li>
        <li><em>Brancos Encorpados:</em> Um Chardonnay barricado, como nosso <a href="${RoutePath.WineDetail.replace(':wineId', 'wine004')}" class="text-burgundy-accent hover:underline">Explorador Chardonnay Reserva</a>, pode ser surpreendente com um Comté ou Gruyère, especialmente se o queijo tiver notas amanteigadas. O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine018')}" class="text-burgundy-accent hover:underline">Zind-Humbrecht Gewürztraminer Grand Cru Hengst</a>, com sua opulência e perfil aromático intenso, oferece uma opção rica e ousada para queijos curados mais aromáticos.</li>
    </ul>

<p class="mb-2"><strong>Queijos de Mofo Branco (Brie, Camembert, Coulommiers):</strong> A cremosidade e as notas terrosas e de cogumelos destes queijos pedem vinhos com boa acidez.</p>
    <ul class="list-disc list-inside ml-4 mb-4 space-y-1">
        <li><em>Espumantes:</em> O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine010')}" class="text-burgundy-accent hover:underline">Veuve Clicquot Brut</a> é uma escolha clássica e infalível. Sua acidez e efervescência limpam o paladar da gordura do queijo, e as notas de brioche complementam os sabores. Um espumante mais complexo como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine025')}" class="text-burgundy-accent hover:underline">Krug Grande Cuvée</a> ou o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine020')}" class="text-burgundy-accent hover:underline">Ferrari Perlé Nero Riserva</a> elevam a experiência a um nível de luxo.</li>
        <li><em>Brancos Leves e Aromáticos:</em> Um Pinot Blanc da Alsácia ou um Chenin Blanc seco do Loire. Evite brancos muito tânicos ou com muita madeira, que podem competir com a delicadeza do queijo.</li>
    </ul>

<p class="mb-2"><strong>Queijos Frescos (Ricota, Cottage, Chèvre fresco, Mozzarella de Búfala):</strong> Delicados e muitas vezes ácidos.</p>
    <ul class="list-disc list-inside ml-4 mb-4 space-y-1">
        <li><em>Brancos Leves e Cítricos:</em> O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine008')}" class="text-burgundy-accent hover:underline">Cloudy Bay Sauvignon Blanc</a>, com sua vivacidade e notas herbáceas, é perfeito para um queijo de cabra fresco. Um Vinho Verde português também seria uma ótima pedida. O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine017')}" class="text-burgundy-accent hover:underline">Dr. Loosen Riesling Kabinett</a>, com sua doçura sutil e alta acidez, oferece uma alternativa interessante para uma ricota fresca com mel e frutas.</li>
        <li><em>Rosés Secos:</em> Um rosé provençal elegante como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine009')}" class="text-burgundy-accent hover:underline">Whispering Angel Rosé</a> ou o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine019')}" class="text-burgundy-accent hover:underline">Miraval Rosé</a> acompanha maravilhosamente uma burrata cremosa com tomates frescos e manjericão, ou uma mozzarella de búfala com pêssegos grelhados.</li>
    </ul>

<p class="mt-4">Lembre-se, a melhor harmonização é aquela que agrada ao seu paladar. A Tesori di Bacco encoraja a experimentação. Utilize estas diretrizes como ponto de partida, mas não tenha medo de ousar e descobrir suas próprias combinações celestiais. Abra uma garrafa de nossa seleção, prepare uma bela tábua de queijos e embarque nesta deliciosa aventura sensorial. Salute!</p>
`,
    imageUrl: "images/articles/harmonizacao_queijos.jpg",
    featuredWineIds: ["wine001", "wine004", "wine003", "wine010", "wine008", "wine009", "wine022", "wine018", "wine025", "wine017", "wine020", "wine021", "wine023", "wine026", "wine015", "wine019"],
    isPremium: false,
  },
  {
    id: "art2",
    title: "Roteiro Enológico pela Toscana: Vinhos, Paisagens e Sabores Clássicos e Modernos",
    author: "Luigi Frescobaldi", 
    publishDate: "2024-06-28",
    category: "Regiões Vinícolas",
    summary: "Embarque em uma viagem virtual de 1500 palavras pela Toscana, conhecendo suas principais denominações de origem, vinícolas icônicas como Antinori e Tenuta San Guido, e as novas tendências que estão redefinindo esta região clássica, do Chianti ao Brunello e os Supertoscanos.",
    content: `
<p>A Toscana é, para muitos, o coração pulsante da Itália vinícola, uma terra onde a história, a arte e a enologia se entrelaçam de forma mágica. Suas colinas onduladas, ciprestes altivos e vinhedos ancestrais são o berço de alguns dos vinhos mais renomados do mundo. Mas a Toscana não é apenas tradição; é também inovação e uma busca constante pela expressão máxima de seu terroir. Nesta jornada de aproximadamente 1500 palavras, exploraremos desde os clássicos Chianti e Brunello até os revolucionários Supertoscanos que colocaram a região no mapa mundial da alta qualidade, sem esquecer das joias brancas e dos vinhos de sobremesa que completam o panorama desta região fascinante.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Chianti Classico: A Alma da Sangiovese</h3>
<p class="mb-2">No coração da Toscana, entre Florença e Siena, a região do Chianti Classico, demarcada pelo selo do Gallo Nero (galo preto), é o lar por excelência da uva Sangiovese. Vinhos como o Chianti Classico, Riserva e Gran Selezione demonstram a versatilidade, a complexidade e a notável capacidade de envelhecimento desta casta. Aromas de cerejas ácidas, violetas, tabaco, couro e notas terrosas são característicos, acompanhados por uma acidez vibrante e taninos elegantes que pedem comida. A Sangiovese aqui encontra um equilíbrio perfeito entre fruta, acidez e estrutura, resultando em vinhos que são gastronomicamente versáteis e podem evoluir lindamente em garrafa. Produtores históricos como <a href="#" class="text-burgundy-accent hover:underline">Antinori</a> (produtora do <a href="${RoutePath.WineDetail.replace(':wineId', 'wine013')}" class="text-burgundy-accent hover:underline">Tignanello</a>, que transcende a DOCG Chianti Classico mas tem suas raízes lá) e Ricasoli (Castello di Brolio, uma das mais antigas vinícolas do mundo) convivem com uma miríade de vinícolas menores e artesanais que exploram microterroirs únicos, resultando em vinhos cheios de personalidade. A legislação moderna do Chianti Classico exige um mínimo de 80% de Sangiovese, permitindo o complemento com outras uvas tintas locais (como Canaiolo e Colorino) ou internacionais (como Cabernet Sauvignon e Merlot), embora muitos produtores puristas optem por 100% Sangiovese ou blends apenas com uvas autóctones para ressaltar a tipicidade.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Brunello di Montalcino: Potência, Longevidade e Prestígio</h3>
<p class="mb-2">Ao sul de Siena, a pequena e pitoresca cidade de Montalcino é o epicentro de um dos vinhos mais potentes, longevos e prestigiados da Itália: o Brunello di Montalcino. Elaborado 100% com uma clone específico da Sangiovese, localmente chamado Brunello (ou Sangiovese Grosso), este vinho passa por um longo e obrigatório período de envelhecimento – no mínimo dois anos em carvalho (tradicionalmente grandes botti de carvalho eslavo, embora barricas francesas também sejam usadas) e quatro meses em garrafa para o Brunello normale (cinco anos de envelhecimento total, sendo dois e meio em madeira, e seis para o Riserva, com três em madeira) antes de ser lançado no mercado. O resultado é um tinto robusto, com aromas complexos de frutas escuras maduras (ameixa, cereja preta), notas de tabaco, couro, alcaçuz, especiarias e um toque balsâmico ou de sub-bosque com a idade. No paladar, é encorpado, com taninos presentes e uma acidez marcante que garante seu incrível potencial de guarda, que pode facilmente ultrapassar décadas nas melhores safras. Marcas como Biondi Santi (considerada a criadora do Brunello no século XIX), Altesino (pioneira no uso de barricas e na introdução do conceito de 'cru' com o vinhedo Montosoli) e Soldera (produtor de culto com vinhos de extrema pureza e longevidade) são referências incontornáveis, produzindo vinhos que são verdadeiras joias para colecionadores.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Supertoscanos: A Revolução Inovadora de Bolgheri e Além</h3>
<p class="mb-2">A partir da década de 1970, uma onda de inovação varreu a Toscana com o surgimento dos "Supertoscanos". Produtores visionários, muitas vezes descontentes com as rígidas regras das denominações tradicionais (DOC/DOCG) que, na época, limitavam a criatividade e, em alguns casos, a qualidade (por exemplo, exigindo a inclusão de uvas brancas no Chianti), começaram a experimentar com castas internacionais como Cabernet Sauvignon, Merlot, Cabernet Franc e Syrah. Frequentemente, esses vinhos eram classificados como simples "Vino da Tavola" (vinho de mesa), apesar de sua qualidade excepcional e preços elevados. O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine014')}" class="text-burgundy-accent hover:underline">Sassicaia</a>, da <a href="#" class="text-burgundy-accent hover:underline">Tenuta San Guido</a> em Bolgheri, é considerado o pioneiro, um blend bordalês (predominantemente Cabernet Sauvignon com Cabernet Franc) que demonstrou o potencial da costa toscana, com seu clima mais quente e solos pedregosos, para vinhos de classe mundial. Logo seguiram outros ícones como o já mencionado <a href="${RoutePath.WineDetail.replace(':wineId', 'wine013')}" class="text-burgundy-accent hover:underline">Tignanello</a> (um blend de Sangiovese, Cabernet Sauvignon e Cabernet Franc) e o Solaia (predominantemente Cabernet Sauvignon, com Sangiovese e Cabernet Franc), ambos de Antinori, e Ornellaia (outro grande nome de Bolgheri, com um blend bordalês). Esses vinhos não apenas alcançaram aclamação global, mas também impulsionaram uma revisão das leis de denominação, levando à criação da IGT Toscana (Indicazione Geografica Tipica), que oferece maior flexibilidade, e até mesmo DOCs específicas para alguns deles, como a DOC Bolgheri Sassicaia (a única na Itália concedida a uma única propriedade). O <a href="${RoutePath.WineDetail.replace(':wineId', 'wine002')}" class="text-burgundy-accent hover:underline">Pavillon Rouge du Château Margaux</a>, embora francês, compartilha dessa filosofia de excelência e inovação em blends bordaleses, algo que certamente inspirou muitos produtores toscanos que buscavam criar vinhos de classe mundial fora das amarras tradicionais.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Vinho Nobile di Montepulciano e Outras Joias Tintas</h3>
<p class="mb-2">Outra denominação importante é o Vinho Nobile di Montepulciano, produzido nos arredores da cidade renascentista de Montepulciano. Também é predominantemente Sangiovese (localmente chamada Prugnolo Gentile, com mínimo de 70%), podendo ser complementada com outras uvas locais ou internacionais. O Vinho Nobile oferece vinhos elegantes e estruturados, muitas vezes um meio-termo entre a vivacidade do Chianti Classico e a potência do Brunello, com um bom potencial de envelhecimento. Carmignano, uma das mais antigas DOCs da Toscana (datando do século XVIII), é única por permitir tradicionalmente a Cabernet Sauvignon (até 20%) no blend com Sangiovese, resultando em vinhos com um toque de complexidade internacional. Morellino di Scansano, na costa sul da Maremma toscana, produz Sangiovese (mínimo 85%) mais macia, frutada e acessível na juventude, refletindo o clima mais quente e marítimo da região.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Além dos Tintos: Vernaccia di San Gimignano e Vin Santo</h3>
<p class="mb-2">Embora famosa por seus tintos, a Toscana também brilha com seus vinhos brancos e de sobremesa. A Vernaccia di San Gimignano é o branco mais notável, um vinho seco, fresco e mineral, com uma história que remonta à Idade Média – foi o primeiro vinho italiano a receber o status de DOC em 1966 e, posteriormente, DOCG em 1993. Produzido nos arredores da cidade medieval de San Gimignano, com suas famosas torres, este vinho feito da uva Vernaccia oferece notas cítricas, florais e um característico toque amendoado no final, especialmente quando envelhecido. Sua acidez o torna um excelente acompanhamento para pratos locais, como peixes, aves e saladas. Já o Vin Santo ("vinho santo") é um vinho de sobremesa tradicional e icônico, produzido com uvas brancas (tipicamente Trebbiano e Malvasia) que são deixadas para secar (passificação) em esteiras ou penduradas em locais bem ventilados por vários meses para concentrar seus açúcares. O mosto resultante, rico e denso, é fermentado e envelhecido lentamente por longos anos (geralmente de 3 a 10 anos ou mais) em pequenas barricas de madeira (castanho, cerejeira, carvalho) seladas chamadas caratelli, que não são completamente cheias, permitindo uma oxidação controlada. O resultado é um néctar âmbar, rico e complexo, com notas de nozes, mel, damasco seco, figo, caramelo e especiarias, tradicionalmente servido com cantucci (biscoitos de amêndoa) para serem mergulhados no vinho. Existe também o Vin Santo Occhio di Pernice, uma versão tinta e ainda mais rara, feita com uvas Sangiovese.</p>

<p class="mt-4">Explorar a Toscana é mergulhar em um universo de sabores, aromas e tradições que se renovam a cada safra. Desde os vinhedos históricos do Chianti Classico até as inovações de Bolgheri, a região oferece uma diversidade impressionante. A Tesori di Bacco se orgulha de trazer aos seus membros exemplares que capturam a essência desta região mágica, como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine013')}" class="text-burgundy-accent hover:underline">Tignanello</a> e o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine014')}" class="text-burgundy-accent hover:underline">Sassicaia</a>, convidando a uma contínua descoberta da alma vinícola italiana.</p>
`,
    imageUrl: "images/articles/toscana.jpg",
    isPremium: true,
    featuredWineIds: ["wine013", "wine014", "wine002"],
    featuredRestaurantIds: ["rest9"] 
  },
  {
    id: "art3",
    title: "Por Dentro da Adega: Entrevista com Flávio Pizzato, da Pizzato Vinhas e Vinhos",
    author: "Tesori di Bacco",
    publishDate: "2024-07-05",
    category: "Produtores Brasileiros",
    summary: "Conversamos com Flávio Pizzato, um dos nomes mais respeitados da vitivinicultura brasileira, sobre seus desafios, a filosofia da Pizzato, o terroir do Vale dos Vinhedos e o futuro dos vinhos brasileiros de qualidade. Uma visão íntima de uma vinícola familiar que é referência em Merlot e outras castas.",
    content: `
<p>A Pizzato Vinhas e Vinhos, localizada no coração do Vale dos Vinhedos, na Serra Gaúcha, é uma vinícola familiar que se tornou sinônimo de qualidade e expressão de terroir no Brasil. Conhecida por seus Merlots premiados, mas também por explorar com maestria outras castas como Chardonnay, Cabernet Sauvignon e Tannat, a Pizzato é um exemplo de dedicação e paixão pela viticultura. Tivemos o prazer de conversar com Flávio Pizzato, enólogo e diretor da vinícola, para desvendar os segredos por trás de seus vinhos notáveis e entender sua visão sobre o vinho brasileiro.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">A Filosofia Pizzato: Terroir e Mínima Intervenção</h3>
<p><strong>Tesori di Bacco:</strong> Flávio, a Pizzato é reconhecida por vinhos que expressam muito bem o terroir. Qual é a filosofia central da vinícola?</p>
<p><strong>Flávio Pizzato:</strong> Nossa filosofia é bastante direta: acreditamos que grandes vinhos nascem no vinhedo. Por isso, dedicamos atenção máxima ao manejo das vinhas, buscando o equilíbrio natural da planta e a maturação ótima das uvas. Queremos que nossos vinhos reflitam o local de onde vêm, o terroir específico de nossas parcelas no Vale dos Vinhedos e também em Doutor Fausto de Castro, em Dois Lajeados. Na cantina, a intervenção é a mínima possível. Usamos a tecnologia a nosso favor para preservar a qualidade da uva, mas evitamos manipulações excessivas. A ideia é deixar a uva se expressar, com suas características de safra e localidade. Buscamos vinhos que tenham identidade, que contem uma história sobre o ano, o solo e o clima.</p>
<p>Para exemplificar, nosso <a href="${RoutePath.WineDetail.replace(':wineId', 'wine001')}" class="text-burgundy-accent hover:underline">Aurora Millésime Cabernet Sauvignon</a>, embora de outro produtor, compartilha desse ideal de expressar o melhor de uma safra e terroir específico, algo que buscamos em nossos próprios rótulos de Cabernet Sauvignon como o Pizzato DNA99 Cabernet Sauvignon. Acreditamos que cada garrafa deve ser uma fotografia líquida de seu momento e local de origem.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Merlot: A Estrela da Casa</h3>
<p><strong>Tesori di Bacco:</strong> A Pizzato é especialmente famosa por seus Merlots. O que faz desta uva um destaque no terroir de vocês?</p>
<p><strong>Flávio Pizzato:</strong> O Merlot se adaptou incrivelmente bem ao Vale dos Vinhedos. Nossos solos argilo-calcários e o microclima da região, com boa amplitude térmica entre dia e noite, permitem que o Merlot atinja uma maturação fenólica excelente. Isso resulta em vinhos com boa estrutura, taninos macios e aveludados, e aromas complexos de frutas vermelhas e negras maduras, muitas vezes com notas de especiarias e chocolate. O Pizzato DNA99 Merlot é um exemplo disso, um vinho que busca mostrar a pureza e a elegância desta casta em nosso terroir. Trabalhamos com clones selecionados e um manejo cuidadoso para controlar o vigor da planta, o que é crucial para o Merlot, visando sempre a qualidade em detrimento da quantidade. O potencial de guarda de nossos Merlots também tem se mostrado notável.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Inovação e Tradição: O Equilíbrio na Pizzato</h3>
<p><strong>Tesori di Bacco:</strong> Sendo uma vinícola familiar com tradição, como a inovação se encaixa no dia a dia da Pizzato?</p>
<p><strong>Flávio Pizzato:</strong> A tradição nos dá a base, o conhecimento acumulado por gerações de nossa família, que está ligada à viticultura desde a chegada da Itália no final do século XIX. A inovação é a ferramenta que nos permite aprimorar e buscar novas expressões. Isso se reflete tanto no vinhedo, com estudos de solo, mapeamento de parcelas, seleção de porta-enxertos e clones mais adaptados, quanto na cantina, com o uso de diferentes técnicas de vinificação e amadurecimento. Por exemplo, exploramos o potencial do Chardonnay em diferentes estilos, desde o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine004')}" class="text-burgundy-accent hover:underline">Explorador Chardonnay Reserva</a>, que é um exemplo de branco com passagem por madeira que também apreciamos, até nossos próprios Chardonnays que podem variar de frescos e frutados, vinificados em inox, a mais complexos e amanteigados, fermentados e amadurecidos em barricas de carvalho francês. Estamos sempre aprendendo e experimentando, mas sem perder nossa identidade, que é a de vinhos elegantes, equilibrados e que representem fielmente seu terroir.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">O Futuro do Vinho Brasileiro de Qualidade</h3>
<p><strong>Tesori di Bacco:</strong> Qual sua visão para o futuro do vinho brasileiro de qualidade?</p>
<p><strong>Flávio Pizzato:</strong> O futuro é extremamente promissor. O consumidor brasileiro está cada vez mais curioso, informado e exigente, o que é um grande motor para a elevação constante do padrão de qualidade. A diversidade de terroirs no Brasil, da Serra Gaúcha à Campanha, do Nordeste a regiões mais altas como a Serra da Mantiqueira (onde o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine007')}" class="text-burgundy-accent hover:underline">Guaspari Vista da Serra Syrah</a> é um belo exemplo), é imensa e ainda temos muito a explorar e entender. Acredito que veremos cada vez mais vinhos brasileiros autênticos, com identidade própria, que expressem a singularidade de seu local de origem, conquistando reconhecimento não apenas no Brasil, mas também no exterior. A Pizzato se orgulha de fazer parte dessa história e de contribuir para o fortalecimento da imagem do vinho brasileiro como um produto de alta qualidade e personalidade. O foco deve continuar sendo na qualidade e na consistência, e em comunicar as histórias por trás de cada vinho.</p>

<p class="mt-4">Agradecemos imensamente a Flávio Pizzato pela conversa franca e inspiradora. É evidente que, por trás de cada garrafa da Pizzato Vinhas e Vinhos, há um trabalho árduo, uma dedicação familiar profunda, muita paixão e um profundo respeito pela uva, pelo terroir e pelo vinho. Uma verdadeira joia da vitivinicultura brasileira que a Tesori di Bacco tem orgulho de acompanhar e, quando possível, apresentar aos seus membros.</p>
<p style="font-size:0.8em; font-style:italic; margin-top: 2em; border-top: 1px solid #eee; padding-top: 1em;">
  *Nota: Este artigo é uma representação ficcional inspirada no trabalho e filosofia de Flávio Pizzato e da Pizzato Vinhas e Vinhos, com base em informações publicamente disponíveis e no conhecimento geral sobre a vinícola. As citações são elaboradas para fins ilustrativos neste projeto educacional.*
</p>
`,
    imageUrl: "images/articles/flaviopizzato.jpg",
    featuredWineIds: ["wine001", "wine004", "wine007"], 
    isPremium: true,
  },
  {
    id: "art-chef-atala",
    title: "Alex Atala: A Alma Amazônica na Alta Gastronomia e a Harmonia com Vinhos Selecionados",
    author: "Luigi Frescobaldi", 
    publishDate: "2024-08-01",
    category: "Gastronomia",
    summary: "Uma conversa exclusiva de 1200 palavras com o chef Alex Atala sobre a filosofia do D.O.M., a importância dos ingredientes brasileiros, e como vinhos cuidadosamente selecionados podem complementar sua cozinha autoral, explorando harmonizações com rótulos como o Guaspari Syrah.",
    content: `
<p>Alex Atala não é apenas um chef; é um embaixador da gastronomia brasileira, um pesquisador incansável dos sabores autênticos do Brasil, especialmente da Amazônia. Seu restaurante, D.O.M., em São Paulo, ostenta duas estrelas Michelin e figura consistentemente entre os melhores do mundo. Conversamos com Atala sobre sua jornada, a filosofia que norteia sua cozinha e a complexa, porém fascinante, arte de harmonizar seus pratos únicos com vinhos.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">A Essência do D.O.M.: Ingredientes Brasileiros, Técnica Global</h3>
<p><strong>Tesori di Bacco:</strong> Chef, o D.O.M. é célebre por sua abordagem inovadora aos ingredientes brasileiros. Qual é a filosofia que define sua cozinha?</p>
<p><strong>Alex Atala (simulado):</strong> A filosofia do D.O.M. (Domus Optimus Maximus – Lar Ótimo Máximo) é simples em seu conceito, mas complexa em sua execução: apresentar os ingredientes brasileiros, muitos deles desconhecidos até para os próprios brasileiros, sob uma nova perspectiva, utilizando técnicas clássicas e contemporâneas da alta gastronomia. Queremos mostrar a riqueza e a diversidade de nosso país no prato. A Amazônia, em particular, é uma fonte inesgotável de inspiração, com suas frutas, ervas, peixes e até formigas como a saúva-limão, que traz uma acidez cítrica surpreendente. Nosso objetivo é criar uma experiência que seja ao mesmo tempo familiar e surpreendente, conectando as pessoas com as raízes do Brasil de uma forma sofisticada e moderna.</p>
<p>A busca pela autenticidade do ingrediente é primordial. Trabalhamos em estreita colaboração com pequenos produtores, comunidades ribeirinhas e indígenas para garantir não apenas a qualidade, mas também a sustentabilidade e o respeito pela origem de cada produto. Cada prato conta uma história, a história de um ingrediente, de uma região, de uma cultura.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Desafios e Delícias da Harmonização</h3>
<p><strong>Tesori di Bacco:</strong> Harmonizar vinhos com ingredientes tão únicos como os da Amazônia deve ser um desafio. Como você e sua equipe de sommeliers abordam essa questão?</p>
<p><strong>Alex Atala (simulado):</strong> É um desafio delicioso! Muitos de nossos ingredientes têm sabores intensos, ácidos, amargos ou texturas incomuns que não se encaixam facilmente nos paradigmas clássicos de harmonização. Não buscamos o óbvio. Muitas vezes, a harmonização ideal não vem de um vinho que se sobrepõe, mas de um que respeita e realça as nuances do prato, ou que cria um contraste intrigante. Um prato com tucupi, por exemplo, com sua acidez e umami marcantes, pede vinhos com boa estrutura e acidez, talvez um branco mais encorpado e mineral, ou até um espumante nature que possa limpar o paladar e complementar a complexidade do tucupi sem competir com ele.</p>
<p>Para pratos de caça brasileira, como um jacaré ou um pirarucu de manejo sustentável, com preparações mais intensas, um tinto brasileiro elegante e com personalidade pode ser uma excelente escolha. Penso, por exemplo, no <a href="${RoutePath.WineDetail.replace(':wineId', 'wine007')}" class="text-burgundy-accent hover:underline">Guaspari Vista da Serra Syrah</a>, com suas notas de especiarias, pimenta preta e boa estrutura tânica, que poderia dialogar lindamente com a complexidade dessas carnes, especialmente se houver elementos defumados ou terrosos no prato. Um <a href="${RoutePath.WineDetail.replace(':wineId', 'wine001')}" class="text-burgundy-accent hover:underline">Aurora Millésime Cabernet Sauvignon</a>, com sua estrutura e notas de tabaco, também poderia ser considerado para carnes vermelhas mais robustas com molhos intensos.</p>
<p>Outro exemplo seria um prato com jambu, que causa uma dormência característica na boca. Um vinho com acidez vibrante e talvez um toque de doçura residual, como um Riesling Kabinett (<a href="${RoutePath.WineDetail.replace(':wineId', 'wine017')}" class="text-burgundy-accent hover:underline">Dr. Loosen Riesling Kabinett</a>), poderia criar uma sensação muito interessante, limpando o paladar e preparando para a próxima garfada, enquanto a doçura sutil pode acalmar a sensação do jambu. A experimentação é chave, e nossa equipe de sommeliers, liderada por Gabriela Monteleone, está constantemente pesquisando e testando novas possibilidades.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Vinhos Brasileiros na Alta Gastronomia</h3>
<p><strong>Tesori di Bacco:</strong> Como você vê o papel dos vinhos brasileiros na alta gastronomia nacional e internacional?</p>
<p><strong>Alex Atala (simulado):</strong> O vinho brasileiro evoluiu enormemente nas últimas décadas. Temos hoje produtores fazendo vinhos de altíssima qualidade, com identidade e que expressam nossos diferentes terroirs. No D.O.M., temos orgulho de apresentar rótulos brasileiros em nossa carta, lado a lado com grandes vinhos do mundo. Acredito que o vinho brasileiro tem um papel fundamental na valorização de nossa gastronomia como um todo. Quando um estrangeiro vem ao Brasil e prova um prato com ingredientes locais harmonizado com um excelente vinho brasileiro, a experiência se torna completa e autêntica. O desafio é continuar investindo em qualidade, pesquisa e na promoção de nossos vinhos lá fora. Ainda há um certo preconceito a ser quebrado, mas a qualidade crescente fala por si.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">A Experiência D.O.M.: Mais que uma Refeição</h3>
<p><strong>Tesori di Bacco:</strong> O que um cliente pode esperar de uma experiência no D.O.M.?</p>
<p><strong>Alex Atala (simulado):</strong> Esperamos que seja mais do que uma refeição; que seja uma jornada de descobertas, uma imersão nos sabores do Brasil. Queremos provocar, instigar a curiosidade e, acima de tudo, proporcionar prazer. A harmonização com vinhos é parte integral dessa experiência, e nossa equipe de sommeliers está sempre pronta para guiar nossos clientes nessa exploração sensorial, oferecendo desde pairings clássicos até sugestões mais ousadas e surpreendentes. Acreditamos que a mesa é um lugar de encontro, de partilha, e queremos que cada visita ao D.O.M. seja uma celebração da riqueza cultural e natural do nosso país.</p>
<p class="mt-4">A conversa com Alex Atala reforça a ideia de que a gastronomia e a enologia são formas de arte que se complementam e se enriquecem mutuamente. A ousadia e o respeito pelos ingredientes que caracterizam sua cozinha são uma inspiração para todos nós que buscamos a alma em cada prato e em cada taça.</p>
<p style="font-size:0.8em; font-style:italic; margin-top: 2em; border-top: 1px solid #eee; padding-top: 1em;">
  *Nota: Este artigo é uma representação ficcional inspirada no trabalho e filosofia do renomado chef Alex Atala. Informações referentes a pratos e conceitos podem ser baseadas em entrevistas publicamente disponíveis, artigos de crítica gastronômica e outras fontes, compiladas para fins ilustrativos neste projeto educacional.*
</p>
`,
    imageUrl: "images/articles/alexatala.jpg",
    featuredRestaurantIds: ["rest1"],
    featuredWineIds: ["wine007", "wine001", "wine017"],
    isPremium: true,
  },
  {
    id: "art-chef-colagreco",
    title: "Mauro Colagreco: A Sinfonia do Terroir no Mirazur e a Pureza no Prato e na Taça",
    author: "Luigi Frescobaldi", 
    publishDate: "2024-08-15",
    category: "Gastronomia Internacional",
    summary: "Uma entrevista de 1500 palavras com o Chef Mauro Colagreco, do aclamado Mirazur (3 estrelas Michelin), sobre sua filosofia de 'cozinha sem fronteiras', o respeito pelos ciclos da natureza, e como a pureza dos ingredientes se reflete em seus pratos e na escolha de vinhos como um elegante rosé de Provence.",
    content: `
<p>Mauro Colagreco, chef argentino de alma italiana e coração francês, comanda o Mirazur, restaurante aninhado nas colinas de Menton, na Côte d'Azur, com vistas deslumbrantes para o Mediterrâneo. Coroado com três estrelas Michelin e eleito o Melhor Restaurante do Mundo em 2019 pelo The World's 50 Best Restaurants, o Mirazur é um templo da gastronomia que celebra o terroir em sua forma mais pura. Conversamos com o chef sobre sua filosofia única, sua conexão com a naturez_policya e a arte da harmonização.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Mirazur: Uma Cozinha Sem Fronteiras, Ditada pela Natureza</h3>
<p><strong>Tesori di Bacco:</strong> Chef Colagreco, o Mirazur é conhecido por sua "cozinha sem fronteiras". O que isso significa e como o terroir de Menton influencia sua criação?</p>
<p><strong>Mauro Colagreco (simulado):</strong> Menton é um lugar mágico, na fronteira entre a França e a Itália, entre os Alpes Marítimos e o Mediterrâneo. Essa dualidade cultural e geográfica é a essência do Mirazur. Minha cozinha reflete essa ausência de fronteiras, buscando inspiração tanto na tradição francesa quanto na italiana, com toques da minha herança argentina. Mas a maior influência vem da natureza. Temos cinco jardins biodinâmicos que fornecem grande parte de nossos vegetais, frutas e ervas. Trabalhamos com um calendário lunar e planetário para o plantio e a colheita, respeitando os ciclos da terra. O menu do Mirazur é, portanto, uma expressão direta do que nossos jardins e o mar nos oferecem a cada dia, a cada estação. É uma cozinha viva, em constante evolução. Não estamos presos a um único estilo ou tradição; estamos abertos a todas as influências que podem enriquecer nossa expressão do terroir.</p>
<p>A proximidade com o mar nos presenteia com peixes e frutos do mar de frescor incomparável. As montanhas atrás de nós oferecem ervas selvagens, cogumelos e caça. E nossos jardins são nosso laboratório, onde cultivamos variedades raras e exploramos novos sabores. É uma sinfonia de elementos que tentamos traduzir em cada prato.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">A Pureza no Prato e a Escolha dos Vinhos</h3>
<p><strong>Tesori di Bacco:</strong> Sua cozinha é marcada pela pureza e pela exaltação do ingrediente. Como essa filosofia se traduz na escolha dos vinhos que acompanham seus pratos?</p>
<p><strong>Mauro Colagreco (simulado):</strong> A mesma busca pela pureza e pela expressão autêntica do terroir que temos nos ingredientes se reflete na nossa seleção de vinhos. Priorizamos vinhos de produtores que trabalham de forma sustentável, orgânica ou biodinâmica, vinhos que contam uma história, que têm alma. Não se trata de ter os rótulos mais caros ou famosos, mas sim vinhos que dialoguem com a delicadeza e a intensidade de nossos pratos. Um prato com peixe fresco do Mediterrâneo, talvez com cítricos de nossos jardins, pede um vinho branco mineral e vibrante da Ligúria ou um Vermentino da Sardenha ou da Córsega. Estes vinhos, com sua salinidade e frescor, parecem capturar a brisa do mar.</p>
<p>Para pratos mais herbáceos ou florais, um elegante rosé de Provence, como o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine009')}" class="text-burgundy-accent hover:underline">Whispering Angel</a> ou o <a href="${RoutePath.WineDetail.replace(':wineId', 'wine019')}" class="text-burgundy-accent hover:underline">Miraval Rosé</a>, pode ser uma harmonização sublime, com seu frescor e notas delicadas que complementam sem sobrecarregar. Se temos um prato com cordeiro dos Alpes Marítimos, com ervas locais, um tinto elegante da Provence, talvez um Bandol com alguns anos de garrafa, ou um Syrah do norte do Rhône, pode ser uma escolha fantástica. A complexidade aromática de um <a href="${RoutePath.WineDetail.replace(':wineId', 'wine018')}" class="text-burgundy-accent hover:underline">Gewürztraminer Grand Cru</a> da Alsácia pode ser surpreendente com pratos que tenham elementos exóticos ou picantes.</p>
<p>Nossa equipe de sommeliers trabalha em estreita colaboração com a cozinha para encontrar esses pares perfeitos. Às vezes, a harmonização é por afinidade, realçando notas semelhantes; outras vezes, por contraste, criando uma nova dimensão de sabor. O importante é que o vinho respeite o prato e vice-versa, em uma dança equilibrada. Buscamos vinhos que tenham "energia", que sejam vibrantes e que expressem seu lugar de origem com honestidade.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">Sustentabilidade: Um Compromisso Integral</h3>
<p><strong>Tesori di Bacco:</strong> A sustentabilidade é um pilar do Mirazur, desde os jardins até a gestão de resíduos. Como essa preocupação se estende à adega?</p>
<p><strong>Mauro Colagreco (simulado):</strong> Absolutamente. A sustentabilidade não é uma tendência para nós, é um compromisso fundamental. Isso se reflete na escolha de produtores que compartilham dessa visão, que cuidam de suas terras e de suas comunidades. Damos preferência a vinhos naturais, orgânicos e biodinâmicos. Além disso, buscamos reduzir nossa pegada de carbono, privilegiando vinhos de regiões próximas sempre que possível, e gerenciando nossa adega de forma consciente, minimizando o desperdício. Fomos o primeiro restaurante do mundo a obter a certificação "Plastic Free". Acreditamos que o luxo verdadeiro hoje está intrinsecamente ligado à responsabilidade ambiental e social. Um grande vinho, para nós, também é um vinho que respeita o planeta.</p>

<h3 class="text-2xl font-serif mt-6 mb-3">A Experiência Mirazur: Uma Imersão Sensorial</h3>
<p><strong>Tesori di Bacco:</strong> O que define a experiência de jantar no Mirazur?</p>
<p><strong>Mauro Colagreco (simulado):</strong> Queremos que seja uma imersão sensorial completa. Desde a chegada, com a vista espetacular do Mediterrâneo, passando pelo serviço atencioso e discreto, até, claro, a comida e o vinho. Cada detalhe é pensado para criar uma atmosfera de bem-estar e descoberta. Não se trata apenas de alimentar o corpo, mas de nutrir a alma, de criar memórias duradouras. O vinho, nesse contexto, é um fio condutor essencial, que eleva a experiência e conecta as pessoas à história e ao terroir que estamos celebrando. Queremos que nossos convidados sintam a paixão e o respeito que temos pela natureza e pelos produtos que ela nos oferece.</p>
<p class="mt-4">A visão de Mauro Colagreco transcende a cozinha. É uma ode à natureza, um testemunho do poder transformador do respeito pelo terroir e pelos ciclos da vida. No Mirazur, cada prato, cada taça de vinho, é um convite a reconectar-se com a essência, com a beleza pura e vibrante do mundo ao nosso redor.</p>
<p style="font-size:0.8em; font-style:italic; margin-top: 2em; border-top: 1px solid #eee; padding-top: 1em;">
  *Nota: Este artigo é uma representação ficcional inspirada no trabalho e filosofia do renomado chef Mauro Colagreco. Informações referentes a pratos e conceitos podem ser baseadas em entrevistas publicamente disponíveis, artigos de crítica gastronômica e outras fontes, compiladas para fins ilustrativos neste projeto educacional.*
</p>
`,
    imageUrl: "images/articles/colagreco.jpg",
    featuredRestaurantIds: ["rest8"], 
    featuredWineIds: ["wine009", "wine019", "wine018"],
    isPremium: true,
  }
];

export const MOCK_FAQS: FAQItem[] = [
  { id: "faq1", question: "Como funciona a assinatura do Club Tesori di Bacco?", answer: "Você escolhe um dos nossos planos (O Explorador, O Curioso, Seleção Sob Medida, O Colecionador, ou O Conoscitore Supremo), cada um com diferentes níveis de vinhos e benefícios. Mensalmente, nosso especialista Luigi Frescobaldi cura uma seleção de vinhos que são entregues em sua casa, acompanhados de material educativo, fichas técnicas e sugestões de harmonização. O plano 'Seleção Sob Medida' oferece ainda a opção de personalizar parte de suas escolhas." },
  { id: "faq2", question: "Posso escolher os vinhos que vou receber?", answer: "A essência do clube é a descoberta curada por especialistas. Para a maioria dos planos, a seleção é surpresa, feita por Luigi Frescobaldi. O plano 'Seleção Sob Medida' permite que você escolha 2-3 vinhos de uma lista pré-aprovada (compatível com o valor do seu plano), com os demais sendo selecionados pela nossa equipe para complementar suas escolhas e perfil de gosto." },
  { id: "faq3", question: "Como é feita a entrega e qual o custo do frete?", answer: "Entregamos em todo o Brasil utilizando embalagens seguras e especializadas para o transporte de vinhos. O custo do frete varia de acordo com a sua localidade e o plano escolhido, sendo calculado e informado no momento da finalização da sua assinatura." },
  { id: "faq4", question: "Posso cancelar ou pausar minha assinatura a qualquer momento?", answer: "Sim, você pode gerenciar sua assinatura (cancelar ou pausar) através da sua 'Área de Membros' em nosso site. Solicitamos um aviso prévio de 30 dias para cancelamentos, conforme detalhado em nossos <a href='/termos' class='text-burgundy-accent hover:underline'>Termos e Condições</a>." },
  { id: "faq5", question: "O que é o tier 'L'Elite di Bacco'?", answer: "L'Elite di Bacco é nosso tier mais exclusivo, acessível apenas por convite. Ele é destinado a membros de longa data dos nossos planos mais altos ('O Conoscitore Supremo') que buscam uma experiência enogastronômica verdadeiramente excepcional, com vinhos ultra-raros, produtos gourmet de luxo e acesso a eventos e serviços personalizados incomparáveis." },
  { id: "faq6", question: "Quais são os benefícios em restaurantes parceiros?", answer: "Membros Tesori di Bacco, especialmente dos tiers mais altos, podem ter acesso a benefícios em restaurantes parceiros selecionados. Estes podem incluir desde um welcome drink cortesia, prioridade em reservas, até menus harmonizados exclusivos ou descontos especiais. Os benefícios específicos variam por restaurante e tier de assinatura, e são comunicados aos membros através de nossos canais e detalhados na página <a href='/tavole-del-gusto' class='text-burgundy-accent hover:underline'>Tavole del Gusto</a>." },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  { id: "test1", quote: "A Tesori di Bacco transformou minha maneira de apreciar vinho. As seleções são incríveis e aprendo muito com cada garrafa! A curadoria do Luigi é impecável.", authorName: "Ana Marchisio", authorLocation: "Belo Horizonte, MG", memberTier: "Membro O Curioso" },
  { id: "test2", quote: "Finalmente um clube de vinhos que entende de sofisticação e qualidade. As harmonizações sugeridas são sempre perfeitas e os vinhos do plano Colecionador são de outro nível.", authorName: "Ricardo Santoro", authorLocation: "Curitiba, PR", memberTier: "Membro O Colecionador" },
  { id: "test3", quote: "Os vinhos são excepcionais e o atendimento é impecável. Acesso a rótulos que eu jamais encontraria sozinha. Recomendo a todos os amantes de vinho que buscam algo especial.", authorName: "Sofia Meneghel", authorLocation: "Rio de Janeiro, RJ", memberTier: "Membro Seleção Sob Medida" },
  { id: "test4", quote: "A experiência 'Conoscitore Supremo' é indescritível. Cada entrega é um evento. O acesso direto ao Luigi para consultoria é um diferencial enorme.", authorName: "Fernando P.", authorLocation: "São Paulo, SP", memberTier: "Membro O Conoscitore Supremo"},
];

export const MOCK_USERS: User[] = [
    { id: "user1", name: "Pedro Miguel Tomazini Dos Santos", email: "explorador@gmail.com", password: "senha123", tierId: "tier1", address: "Rua do Explorador, 10, Vila da Serra, Nova Lima - MG", paymentMethod: "**** **** **** 1111" },
    { id: "user2", name: "Asif Fares Ashraf", email: "curioso@gmail.com", password: "senha123", tierId: "tier2", address: "Av. Curiosidade, 20, Savassi, Belo Horizonte - MG", paymentMethod: "**** **** **** 2222" },
    { id: "user3", name: "Vinicius Vasconcelos De Castro Domingues", email: "sobmedida@gmail.com", password: "senha123", tierId: "tier3", address: "Alameda Personalizada, 30, Rio de Janeiro - RJ", paymentMethod: "**** **** **** 3333" },
    { id: "user4", name: "Gerhard Schäfer Von Scheidt ", email: "colecionador@gmail.com", password: "senha123", tierId: "tier4", address: "Praça das Raridades, 40, Porto Alegre - RS", paymentMethod: "**** **** **** 4444" },
    { id: "user5", name: "Pedro Vaz Albuquerque De Noronha", email: "conoscitore@gmail.com", password: "senha123", tierId: "tier5", address: "Estrada do Olimpo, 50, Brasília - DF", paymentMethod: "**** **** **** 5555" },
    { id: "user6", name: "Angelo Medici Frescobaldi", email: "elitedibacco@gmail.com", password: "senha123", tierId: "tier6", address: "Sede Tesori di Bacco, Alameda das Vinhas, 1887, Vila da Serra, Nova Lima - MG", paymentMethod: "**** **** **** 0000"}, 
];

export const FOOTER_HQ_ADDRESS = "Sede: Alameda das Vinhas, 1887, Vila da Serra, Nova Lima - MG";
export const CONTACT_HQ_ADDRESS_LINE1 = "Alameda das Vinhas, 1887, Sala 101";
export const CONTACT_HQ_ADDRESS_LINE2 = "Vila da Serra, Nova Lima - MG";
export const CONTACT_HQ_ADDRESS_ZIP = "CEP: 34006-050";

export const CONTACT_OFFICE_ADDRESS_LINE1 = "Rua dos Sommelier, 700, Andar 5";
export const CONTACT_OFFICE_ADDRESS_LINE2 = "Savassi, Belo Horizonte - MG";
export const CONTACT_OFFICE_ADDRESS_ZIP = "CEP: 30130-174";

export const AGE_VERIFICATION_TITLE_STEP_1 = `Bem-vindo(a) ao ${APP_FULL_NAME}`;
export const AGE_VERIFICATION_TITLE_STEP_2 = `Como deseja prosseguir na ${APP_FULL_NAME}?`;
export const AGE_VERIFICATION_TERMS_LINK_TEXT = "Termos e Condições";
export const AGE_VERIFICATION_PRIVACY_LINK_TEXT = "Política de Privacidade";

export const TERMS_CONTENT_MODAL = `
  <h2 class="text-xl font-serif font-semibold text-charcoal-gray mb-4">Termos e Condições de Uso - ${APP_NAME}</h2>
  <p class="mb-3">Ao acessar e usar nossa plataforma, você concorda em cumprir os seguintes termos e condições.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">1. Aceitação dos Termos</h3>
  <p class="mb-3">Ao se registrar e utilizar os serviços do ${APP_NAME} ("Plataforma", "Nós"), você ("Usuário") concorda e se compromete a cumprir integralmente com estes Termos e Condições de Uso, bem como com nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não deverá utilizar nossos serviços.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">2. Elegibilidade e Idade Mínima</h3>
  <p class="mb-3">Os serviços do ${APP_NAME} são destinados exclusivamente a indivíduos maiores de 18 anos. Ao utilizar a Plataforma, você declara e garante que possui idade legal para consumir bebidas alcoólicas em seu país de residência e para celebrar um contrato vinculativo conosco. Reservamo-nos o direito de solicitar comprovação de idade e de recusar o serviço a qualquer pessoa que não cumpra este requisito.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">3. Serviços Oferecidos</h3>
  <p class="mb-3">O ${APP_NAME} é um clube de vinhos por assinatura que oferece curadoria e entrega de vinhos selecionados, acesso a conteúdo educacional e enogastronômico, e outros benefícios relacionados, conforme descrito nos diferentes planos de assinatura disponíveis na Plataforma.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">4. Contas de Usuário e Segurança</h3>
  <p class="mb-3">Para acessar determinados recursos da Plataforma, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrerem em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">5. Planos de Assinatura, Pagamentos e Cancelamento</h3>
  <p class="mb-3">Os detalhes sobre os planos de assinatura, preços, ciclos de faturamento, políticas de entrega, pausa e cancelamento são descritos na seção "Nossos Planos" e podem ser gerenciados na sua "Área de Membros". Os pagamentos são recorrentes e serão cobrados automaticamente de acordo com o plano escolhido. Você pode cancelar sua assinatura a qualquer momento, respeitando o aviso prévio estipulado.</p>
  <p class="text-xs mt-6 text-gray-500">Este é um resumo. Para o texto completo, visite nossa página de <a href="#${RoutePath.TermsAndConditions}" class="underline hover:text-burgundy-accent">Termos e Condições</a>.</p>
  <p class="text-xs mt-1 text-gray-500">Última atualização: 29 de Julho de 2024.</p>
`;

export const PRIVACY_POLICY_CONTENT_MODAL = `
  <h2 class="text-xl font-serif font-semibold text-charcoal-gray mb-4">Política de Privacidade - ${APP_NAME}</h2>
  
  <div class="bg-gold-accent/10 border-l-4 border-gold-accent text-gold-accent/90 p-3 mb-5 rounded-md" role="alert">
    <h3 class="font-bold">Nota Importante Sobre Este Projeto</h3>
    <p class="text-sm">
      A plataforma '${APP_NAME}' é um projeto pessoal de demonstração e estudo. <strong>Não coleta ou armazena dados pessoais de usuários além de simulações de funcionalidade interna (ex: dados de login salvos localmente no seu navegador para fins de demonstração)</strong>. Todas as informações são usadas de forma ilustrativa e educacional.
    </p>
  </div>

  <p class="mb-3">Sua privacidade é importante para ${APP_NAME}. Esta política descreve como (simulamos) coletar, usar e proteger suas informações.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">1. Introdução</h3>
  <p class="mb-3">Esta Política de Privacidade aplica-se a todas as informações (simuladas) coletadas ou processadas pela plataforma ${APP_NAME}. Entendemos a importância da privacidade e estamos comprometidos em proteger quaisquer dados (simulados) que você possa fornecer.</p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">2. Informações (Simuladas) que Coletamos</h3>
  <p class="mb-3">Para fins de demonstração, podemos simular a coleta de: nome, e-mail, senha (localmente), preferências de assinatura, e dados de navegação para verificação de idade (sessão do navegador). <strong>Nenhum dado é transmitido para um servidor externo.</strong></p>
  <h3 class="text-lg font-serif font-semibold text-charcoal-gray mt-4 mb-2">3. Como (Simulamos) Usar Suas Informações</h3>
  <p class="mb-3">As informações simuladas são usadas exclusivamente para permitir o funcionamento das funcionalidades de login, área de membros, e manter a verificação de idade.</p>
  <p class="text-xs mt-6 text-gray-500">Este é um resumo. Para o texto completo, visite nossa página de <a href="#${RoutePath.PrivacyPolicy}" class="underline hover:text-burgundy-accent">Política de Privacidade</a>.</p>
  <p class="text-xs mt-1 text-gray-500">Última atualização: 29 de Julho de 2024.</p>
`;
