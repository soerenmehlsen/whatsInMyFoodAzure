export const exampleUrl =
  "https://jxkpmqteowxwaazridol.supabase.co/storage/v1/object/public/IngredientBucket/images/1733935128425_IMG_6153.png";

export const exampleIngredient = [
  {
    name: 'hvedemel',
    description: 'Hvedemel er fintmalet hvede, der primært bruges til bagning.',
    nova_classification: '1',
    reason: 'Hvedemel er en minimalt bearbejdet fødevare, da det blot er malet hvede.'
  },
  {
    name: 'palmeolie',
    description: 'Palmeolie er en vegetabilsk olie, der udvindes fra frugterne af oliepalmen.',
    nova_classification: '2',
    reason: 'Palmeolie er en forarbejdet kulinarisk ingrediens, da den er udvundet og raffineret fra en naturlig kilde.'
  },
  {
    name: 'salt',
    description: 'Salt er et mineral, der bruges til at give smag og konservere mad.',
    nova_classification: '2',
    reason: 'Salt er en forarbejdet kulinarisk ingrediens, da det er udvundet og raffineret fra naturlige kilder.'
  },
  {
    name: 'krydderier',
    description: 'Krydderier er aromatiske plantedele, der bruges til at give smag til mad.',
    nova_classification: '1',
    reason: 'Krydderier er typisk tørrede og malede plantedele, hvilket gør dem til minimalt bearbejdede fødevarer.'
  },
  {
    name: 'sukker',
    description: 'Sukker er et sødt stof, der primært bruges til at søde mad og drikke.',
    nova_classification: '2',
    reason: 'Sukker er en forarbejdet kulinarisk ingrediens, da det er udvundet og raffineret fra sukkerrør eller sukkerroer.'
  },
  {
    name: 'E621',
    description: 'E621 (Mononatriumglutamat) er en smagsforstærker, der giver en umami-smag.',
    nova_classification: '4',
    reason: 'E621 er et tilsætningsstof, der bruges til at forstærke smagen, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E635',
    description: "E635 (Dinatriuminosinat) er en smagsforstærker, der bruges i kombination med andre smagsforstærkere.",
    nova_classification: '4',
    reason: 'E635 er et tilsætningsstof, der bruges til at forstærke smagen, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'chilipulver',
    description: 'Chilipulver er tørrede og malede chilifrugter, der bruges til at give smag til mad.',
    nova_classification: '1',
    reason: 'Chilipulver er en minimalt bearbejdet fødevare, da det blot er tørrede og malede chilifrugter.'
  },
  {
    name: 'tørret forårsløg',
    description: 'Tørret forårsløg er forårsløg, der er blevet tørret for at forlænge holdbarheden.',
    nova_classification: '1',
    reason: 'Tørret forårsløg er en minimalt bearbejdet fødevare, da det blot er blevet tørret.'
  },
  {
    name: 'aroma',
    description: 'Aroma er et stof, der tilsættes for at give mad en bestemt smag eller duft.',
    nova_classification: '4',
    reason: 'Aroma er et tilsætningsstof, der bruges til at forbedre smagen eller duften, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E500(ii)',
    description: 'E500(ii) (Natriumhydrogencarbonat) bruges som et surhedsregulerende middel og hævemiddel.',
    nova_classification: '4',
    reason: 'E500(ii) er et tilsætningsstof, der bruges til at regulere surhedsgraden, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E501(i)',
    description: 'E501(i) (Kaliumcarbonat) bruges som et surhedsregulerende middel.',
    nova_classification: '4',
    reason: 'E501(i) er et tilsætningsstof, der bruges til at regulere surhedsgraden, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E451(i)',
    description: 'E451(i) (Penta-natriumtriphosphat) bruges som stabilisator og emulgator.',
    nova_classification: '4',
    reason: 'E451(i) er et tilsætningsstof, der bruges som stabilisator og emulgator, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E330',
    description: 'E330 (Citronsyre) bruges som et surhedsregulerende middel og antioxidant.',
    nova_classification: '4',
    reason: 'E330 er et tilsætningsstof, der bruges til at regulere surhedsgraden og som antioxidant, hvilket typisk findes i ultraforarbejdede fødevarer.'
  },
  {
    name: 'E466',
    description: 'E466 (Carboxymethylcellulose), et fortykningsmiddel, der giver en mere cremet konsistens.',
    nova_classification: '4',
    reason: 'E466 er et tilsætningsstof, der bruges som fortykningsmiddel, hvilket typisk findes i ultraforarbejdede fødevarer'
  },
  {
    name: 'farve (almindelig karamel)',
    description: 'Almindelig karamel bruges som farvestof.',
    nova_classification: '3',
    reason: 'Karamel er en forarbejdet fødevare, da det er sukker, der er blevet opvarmet og karamelliseret.'
  },
  {
    name: 'sojasauce',
    description: 'Sojasauce er en fermenteret sauce lavet af sojabønner, vand og salt.',
    nova_classification: '3',
    reason: 'Sojasauce er en forarbejdet fødevare, da den er fremstillet gennem en fermenteringsproces.'
  },
  {
    name: 'sojabønner',
    description: 'Sojabønner er en type bælgfrugt, der er rig på protein og bruges i mange fødevarer.',
    nova_classification: '1',
    reason: 'Sojabønner er en minimalt bearbejdet fødevare, da de blot er blevet høstet og tørret.'
  },
  {
    name: 'vand',
    description: 'Vand er en essentiel ingrediens i mange fødevarer.',
    nova_classification: '1',
    reason: 'Vand er en uforbearbejdet fødevare.'
  }
];

export interface Article {
  date: string;
  title: string;
  content: string;
  Image: string;
  link: string;
  logo: string;
}

export const posts: Article[] = [
  {
    date: '2024-11-30',
    title: 'Forskere advarer mod udbredt gruppe af fødevarer',
    content: 'Forskere vil have os til at kigge på ingredienslisten, når vi køber ind. Hvis der er mere end fem ingredienser i en vare, bør vi være på vagt.',
    Image: '/hotdog.png',
    link: 'https://nyheder.tv2.dk/samfund/2024-11-30-forskere-advarer-mod-udbredt-gruppe-af-foedevarer',
    logo: '/tv2.png'
  },
  {
    date: '2024-6-12',
    title: 'Forskere om ultraforarbejdede fødevarer: Sådan styrer du udenom supermarkedets sundhedsskadelige produkter',
    content: 'Køb rigtig mad og lad de ultraforarbejdede fødevarer stå, siger to eksperter.',
    Image: '/kodpaalaeg.png',
    link: 'https://www.cancer.dk/nyheder-og-fortaellinger/2024/forskere-om-ultraforarbejdede-foedevarer-saadan-styrer-du-udenom-supermarkedets-sundhedsskadelige-produkter/',
    logo: '/kraeftensBekaempelse.png'
  },
  {
    date: '2024-7-11',
    title: 'Sådan spotter du ultraforarbejdede fødevarer',
    content: 'Du står i supermarkedet og vil gerne undgå at komme hjem med – alt for meget – ultraforarbejdet mad i dine indkøbsposer. Hvad gør du? Vi foreslår, du starter med denne guide.',
    Image: '/supermarket.png',
    link: 'https://iform.dk/sund-mad/kostraad/saadan-spotter-du-ultraforarbejdede-foedevarer',
    logo: '/videnskabdk.png'
  },
  {
    date: '2024-3-16',
    title: 'Kæmpe studie kobler ultraforarbejdet mad til mange sygdomme – men hvad betyder det?',
    content: 'Forskere er uenige om, hvordan resultaterne skal tolkes, og der er stadig meget, vi ikke ved om ultraforarbejdede fødevarer.',
    Image: '/is.png',
    link: 'https://videnskab.dk/krop-sundhed/kaempe-studie-kobler-ultraforarbejdet-mad-til-mange-sygdomme-men-hvad-betyder-det/',
    logo: '/iform.png'
  }
];
