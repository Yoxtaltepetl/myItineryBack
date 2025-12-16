import "dotenv/config.js";
import "../../config/database.js";
import Itinerary from "../Itinerary.js";

const arrayItineraries = [
    {
      name: "Anna",
      photo: "https://example.com/photo1.jpg",
      city: "Amsterdam",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#VanGogh", "#Canals", "#Museums"],
      activities: '68a4424a0a625a1a4274e5f0'
    },
    {
      name: "Lucas",
      photo: "https://example.com/photo2.jpg",
      city: "Amsterdam",
      price: 2,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#Bicycles", "#Rijksmuseum"],
      activities:'68a4424a0a625a1a4274e5f2'
    },
    {
      name: "Eva",
      photo: "https://example.com/photo3.jpg",
      city: "Amsterdam",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#Art", "#AnneFrankHouse", "#Vondelpark"],
      activities:'68a4424a0a625a1a4274e5f1'
    },
    {
      name: "John",
      photo: "https://example.com/photo4.jpg",
      city: "Amsterdam",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Amsterdam", "#CoffeeShops", "#Biking"],
      activities:'68a4424a0a625a1a4274e5f3'
    },
    {
      name: "Maria",
      photo: "https://example.com/photo5.jpg",
      city: "Rio de Janeiro",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#ChristTheRedeemer", "#Copacabana", "#Carnival"],
      activities:'68a4424a0a625a1a4274e5f4'
    },
    {
      name: "José",
      photo: "https://example.com/photo6.jpg",
      city: "Rio de Janeiro",
      price: 5,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#Ipanema", "#Samba", "#Beaches"],
      activities:'68a4424a0a625a1a4274e5f7'
    },
    {
      name: "Sofia",
      photo: "https://example.com/photo7.jpg",
      city: "Rio de Janeiro",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#RioDeJaneiro", "#Lapa", "#SugarloafMountain"],
      activities:'68a4424a0a625a1a4274e5f5'
    },
    {
      name: "Carlos",
      photo: "https://example.com/photo8.jpg",
      city: "Bangkok",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Bangkok", "#GrandPalace", "#ThaiFood"],
      activities:'68a4424a0a625a1a4274e5f8'
    },
    {
      name: "Sofia",
      photo: "https://example.com/photo9.jpg",
      city: "Bangkok",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Bangkok", "#Temples", "#Markets", "#Thailand"],
      activities:'68a4424a0a625a1a4274e5f9'
    },
    {
      name: "Liam",
      photo: "https://example.com/photo10.jpg",
      city: "Toronto",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Toronto", "#CNtower", "#Ontario", "#Canada"],
      activities:'68a4424a0a625a1a4274e5fc'
    },
    {
      name: "David",
      photo: "https://example.com/photo11.jpg",
      city: "Toronto",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Toronto", "#NiagaraFalls", "#Multiculturalism"],
      activities:'68a4424a0a625a1a4274e5fe'
    },
    {
      name: "Emily",
      photo: "https://example.com/photo12.jpg",
      city: "Toronto",
      price: 5,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Toronto", "#OntarioLake", "#The6ix"],
      activities:'68a4424a0a625a1a4274e5ff'
    },
    {
      name: "Minho",
      photo: "https://example.com/photo13.jpg",
      city: "Seoul",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Seoul", "#Palaces", "#KoreanFood", "#NamsanTower"],
      activities:'68a4424a0a625a1a4274e600'
    },
    {
      name: "Jiwon",
      photo: "https://example.com/photo14.jpg",
      city: "Seoul",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Seoul", "#Shopping", "#KPop", "#KoreanTemples"],
      activities:'68a4424a0a625a1a4274e602'
    },
    {
      name: "Lucía",
      photo: "https://example.com/photo15.jpg",
      city: "Barcelona",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Barcelona", "#SagradaFamilia", "#Gaudí", "#PlazaCatalunya"],
      activities:'68a4424a0a625a1a4274e604'
    },
    {
      name: "Carlos",
      photo: "https://example.com/photo16.jpg",
      city: "Barcelona",
      price: 2,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#Barcelona", "#Beaches", "#ParcGuell"],
      activities:'68a4424a0a625a1a4274e606'
    },
    {
      name: "Sarah",
      photo: "https://example.com/photo17.jpg",
      city: "San Francisco",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#SanFrancisco", "#GoldenGate", "#Alcatraz", "#SiliconValley"],
      activities:'68a4424a0a625a1a4274e608'
    },
    {
      name: "Michael",
      photo: "https://example.com/photo18.jpg",
      city: "San Francisco",
      price: 5,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#SanFrancisco", "#BayArea", "#LombardStreet"],
      activities:'68a4424a0a625a1a4274e60a'
    },
    {
      name: "Xiaoyu",
      photo: "https://example.com/photo19.jpg",
      city: "Hong Kong",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#HongKong", "#VictoriaPeak", "#Temples", "#ChineseFood"],
      activities:'68a4424a0a625a1a4274e60c'
    },
    {
      name: "Li Wei",
      photo: "https://example.com/photo20.jpg",
      city: "Hong Kong",
      price: 3,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Shopping", "#Skyscrapers"],
      activities:'68a4424a0a625a1a4274e60d'
    },
    {
      name: "Chen",
      photo: "https://example.com/photo21.jpg",
      city: "Hong Kong",
      price: 4,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Foodie", "#Markets", "#MongKok"],
      activities:'68a4424a0a625a1a4274e60e'
    },
    {
      name: "Mei Ling",
      photo: "https://example.com/photo22.jpg",
      city: "Hong Kong",
      price: 5,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Skyline", "#VictoriaHarbour"],
      activities:'68a4424a0a625a1a4274e60f'
    },
    {
      name: "Jia",
      photo: "https://example.com/photo23.jpg",
      city: "Hong Kong",
      price: 3,
      duration: "48 hours",
      likes: 0,
      hashtags: ["#HongKong", "#Shopping", "#Temples"],
      activities:'68a4424a0a625a1a4274e60e'
    },
    {
      name: "Giulia",
      photo: "https://example.com/photo24.jpg",
      city: "Rome",
      price: 2,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Rome", "#Colosseum", "#TreviFountain", "#Vatican"],
      activities:'68a4424a0a625a1a4274e610'
    },
    {
      name: "Antonio",
      photo: "https://example.com/photo25.jpg",
      city: "Rome",
      price: 3,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Rome", "#Pantheon", "#PiazzaNavona", "#History"],
      activities:'68a4424a0a625a1a4274e612'
    },
    {
      name: "Simone",
      photo: "https://example.com/photo26.jpg",
      city: "Rome",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Rome", "#RomanForum", "#Tiber"],
      activities:'68a4424a0a625a1a4274e613'
    },
    {
      name: "Sophia",
      photo: "https://example.com/photo27.jpg",
      city: "Rome",
      price: 5,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Rome", "#VaticanMuseums", "#Pantheon"],
      activities:'68a4424a0a625a1a4274e611'
    },
    {
      name: "Aisha",
      photo: "https://example.com/photo28.jpg",
      city: "Dubai",
      price: 5,
      duration: "96 hours",
      likes: 0,
      hashtags: ["#Dubai", "#BurjKhalifa", "#Desert", "#Shopping"],
      activities:'68a4424a0a625a1a4274e614'
    },
    {
      name: "Omar",
      photo: "https://example.com/photo29.jpg",
      city: "Dubai",
      price: 4,
      duration: "72 hours",
      likes: 0,
      hashtags: ["#Dubai", "#Luxury", "#SkiDubai", "#PalmIsland"],
      activities:'68a4424a0a625a1a4274e615'
    },
    {
      name: "Emily",
      photo: "https://example.com/photo30.jpg",
      city: "Dubai",
      price: 4,
      duration: "120 hours",
      likes: 0,
      hashtags: ["#Dubai", "#Luxury", "#ShoppingMall", "#Marina"],
      activities:'68a4424a0a625a1a4274e617'
    }
  ]
  
  Itinerary.insertMany(arrayItineraries);