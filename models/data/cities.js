import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const arrayCities = [
    {
        name: "Amsterdam",
        photo: "https://vidanamala.com.br/wp-content/uploads/2023/04/tom-podmore-L2cZUpNXosY-unsplash.jpg",
        country: "Netherlands",
        continent: "Europe",
        description: "Known for its canals, museums, and vibrant cycling culture.",
        currency: "Euro",
        language: "Dutch"
    },
    {
        name: "Rio de Janeiro",
        photo: "https://zoomdestinos.es/wp-content/uploads/2021/05/destino-rio-de-janeiro-brazil-para-conocer-el-cerro-del-corcovado1.jpg",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its beaches, Carnival festival, and the Christ the Redeemer statue.",
        currency: "Brazilian Real",
        language: "Portuguese"
    },
    {
        name: "Lisbon",
        photo: "https://aboveusonlyskies.com/wp-content/uploads/2020/08/Lisbon-Coast-Azenhas-do-Mar...jpg",
        country: "Portugal",
        continent: "Europe",
        description: "Known for its historic neighborhoods, trams, and coastal views.",
        currency: "Euro",
        language: "Portuguese"
    },
    {
        name: "Singapore",
        photo: "https://www.thoughtco.com/thmb/C1Nbj1M6jZK9Xm_lgD1ndDPPAk4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/singapore--garden-by-the-bay--supertree-grove-638256268-fa59e7e78b6449aaa40f68eafe6ff1a1.jpg",
        country: "Singapore",
        continent: "Asia",
        description: "A global financial hub known for its cleanliness and modern architecture.",
        currency: "Singapore Dollar",
        language: "English, Malay, Mandarin, Tamil"
    },
    {
        name: "Bangkok",
        photo: "https://content.r9cdn.net/rimg/dimg/26/5b/01e97574-city-26166-1592813274a.jpg?width=1366&height=768&xhint=1038&yhint=725&crop=true",
        country: "Thailand",
        continent: "Asia",
        description: "Famous for its street food, cultural landmarks, and vibrant nightlife.",
        currency: "Thai Baht",
        language: "Thai"
    },
    {
        name: "Toronto",
        photo: "https://images.adsttc.com/media/images/650b/778f/b136/681e/6817/1ee7/large_jpg/toronto-architecture-city-guide-30-modern-and-contemporary-attractions-in-canadas-largest-city_37.jpg?1695250340",
        country: "Canada",
        continent: "North America",
        description: "Known for its multiculturalism, diverse food scene, and the CN Tower.",
        currency: "Canadian Dollar",
        language: "English, French"
    },
    {
        name: "Seoul",
        photo: "https://media.digitalnomads.world/wp-content/uploads/2021/02/20120634/seoul-digital-nomads.jpg",
        country: "South Korea",
        continent: "Asia",
        description: "A dynamic city blending modern technology with traditional culture.",
        currency: "South Korean Won",
        language: "Korean"
    },
    {
        name: "Barcelona",
        photo: "https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg",
        country: "Spain",
        continent: "Europe",
        description: "Famous for its architecture by Antoni Gaudí and vibrant culture.",
        currency: "Euro",
        language: "Spanish"
    },
    {
        name: "Budapest",
        photo: "https://fotografias.larazon.es/clipping/cmsimages02/2024/08/01/AF231129-7BDB-4897-BA12-D866BE9E43AA/budapest_98.jpg?crop=3566,2006,x0,y0&width=1900&height=1069&optimize=low&format=webply",
        country: "Hungary",
        continent: "Europe",
        description: "Known for its stunning architecture, thermal baths, and vibrant nightlife.",
        currency: "Hungarian Forint",
        language: "Hungarian"
    },
    {
        name: "San Francisco",
        photo: "https://static.standard.co.uk/2024/04/23/14/34/SanFranciscoGettyImages-1454694465.jpg.jpg?trim=60,0,60,0&quality=75&auto=webp&width=1000",
        country: "United States",
        continent: "North America",
        description: "Famous for the Golden Gate Bridge, hilly streets, and tech culture.",
        currency: "US Dollar",
        language: "English"
    },
    {
        name: "Copenhagen",
        photo: "https://www.telegraph.co.uk/content/dam/Travel/2023/tivoli-copenhagen-GettyImages-458432813.jpg?imwidth=680",
        country: "Denmark",
        continent: "Europe",
        description: "Known for its colorful harbor, historic architecture, and bike-friendly streets.",
        currency: "Danish Krone",
        language: "Danish"
    },
    {
        name: "Hong Kong",
        photo: "https://www.fundssociety.com/wp-content/uploads/2022/09/skyscrapers-g75588adb9_1920.jpg",
        country: "China",
        continent: "Asia",
        description: "A bustling city known for its skyline, shopping, and vibrant food scene.",
        currency: "Hong Kong Dollar",
        language: "Chinese (Cantonese)"
    },
    {
        name: "Prague",
        photo: "https://statemag.state.gov/wp-content/uploads/2023/10/1123pom-3-1.jpg",
        country: "Czech Republic",
        continent: "Europe",
        description: "Known for its medieval architecture and historic charm.",
        currency: "Czech Koruna",
        language: "Czech"
    },
    {
        name: "Dubai",
        photo: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/56000/56828-Dubai.jpg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "A city of luxury, known for its modern architecture and shopping experiences.",
        currency: "UAE Dirham",
        language: "Arabic"
    },
    {
        name: "Rome",
        photo: "https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg",
        country: "Italy",
        continent: "Europe",
        description: "The Eternal City, known for its rich history and stunning architecture.",
        currency: "Euro",
        language: "Italian"
    }
]

City.insertMany(arrayCities);