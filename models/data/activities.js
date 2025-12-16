import "dotenv/config.js";
import "../../config/database.js";
import Activity from "../Activity.js";

const arrayActivities = [
    {
      name: "Canal Cruise",
      photo: "https://example.com/photo31.jpg",
      price: 3,
      city: "Amsterdam"
    },
    {
      name: "Visit Van Gogh Museum",
      photo: "https://example.com/photo32.jpg",
      price: 4,
      city: "Amsterdam"
    },
    {
      name: "Cycling Tour",
      photo: "https://example.com/photo33.jpg",
      price: 2,
      city: "Amsterdam"
    },
    {
      name: "Anne Frank House",
      photo: "https://example.com/photo34.jpg",
      price: 5,
      city: "Amsterdam"
    },
    {
      name: "Christ the Redeemer",
      photo: "https://example.com/photo35.jpg",
      price: 5,
      city: "Rio de Janeiro"
    },
    {
      name: "Sugarloaf Mountain",
      photo: "https://example.com/photo36.jpg",
      price: 4,
      city: "Rio de Janeiro"
    },
    {
      name: "Copacabana Beach",
      photo: "https://example.com/photo37.jpg",
      price: 1,
      city: "Rio de Janeiro"
    },
    {
      name: "Visit Ipanema",
      photo: "https://example.com/photo38.jpg",
      price: 3,
      city: "Rio de Janeiro"
    },
    {
      name: "Grand Palace Tour",
      photo: "https://example.com/photo39.jpg",
      price: 5,
      city: "Bangkok"
    },
    {
      name: "Wat Pho Temple",
      photo: "https://example.com/photo40.jpg",
      price: 3,
      city: "Bangkok"
    },
    {
      name: "Chatuchak Weekend Market",
      photo: "https://example.com/photo41.jpg",
      price: 2,
      city: "Bangkok"
    },
    {
      name: "Boat Ride along Chao Phraya River",
      photo: "https://example.com/photo42.jpg",
      price: 3,
      city: "Bangkok"
    },
    {
      name: "CN Tower SkyPod",
      photo: "https://example.com/photo43.jpg",
      price: 4,
      city: "Toronto"
    },
    {
      name: "St. Lawrence Market",
      photo: "https://example.com/photo44.jpg",
      price: 2,
      city: "Toronto"
    },
    {
      name: "Niagara Falls Day Trip",
      photo: "https://example.com/photo45.jpg",
      price: 5,
      city: "Toronto"
    },
    {
      name: "Royal Ontario Museum",
      photo: "https://example.com/photo46.jpg",
      price: 4,
      city: "Toronto"
    },
    {
      name: "Gyeongbokgung Palace",
      photo: "https://example.com/photo47.jpg",
      price: 3,
      city: "Seoul"
    },
    {
      name: "Myeongdong Shopping Street",
      photo: "https://example.com/photo48.jpg",
      price: 2,
      city: "Seoul"
    },
    {
      name: "Namsan Seoul Tower",
      photo: "https://example.com/photo49.jpg",
      price: 3,
      city: "Seoul"
    },
    {
      name: "Bukchon Hanok Village",
      photo: "https://example.com/photo50.jpg",
      price: 2,
      city: "Seoul"
    },
    {
      name: "Sagrada Familia",
      photo: "https://example.com/photo51.jpg",
      price: 5,
      city: "Barcelona"
    },
    {
      name: "Park Guell",
      photo: "https://example.com/photo52.jpg",
      price: 4,
      city: "Barcelona"
    },
    {
      name: "Beach Day at Barceloneta",
      photo: "https://example.com/photo53.jpg",
      price: 2,
      city: "Barcelona"
    },
    {
      name: "Montserrat Mountain Hike",
      photo: "https://example.com/photo54.jpg",
      price: 4,
      city: "Barcelona"
    },
    {
      name: "Golden Gate Bridge",
      photo: "https://example.com/photo55.jpg",
      price: 3,
      city: "San Francisco"
    },
    {
      name: "Alcatraz Island Tour",
      photo: "https://example.com/photo56.jpg",
      price: 5,
      city: "San Francisco"
    },
    {
      name: "Fisherman's Wharf",
      photo: "https://example.com/photo57.jpg",
      price: 2,
      city: "San Francisco"
    },
    {
      name: "Exploring Chinatown",
      photo: "https://example.com/photo58.jpg",
      price: 2,
      city: "San Francisco"
    },
    {
      name: "Victoria Peak",
      photo: "https://example.com/photo59.jpg",
      price: 5,
      city: "Hong Kong"
    },
    {
      name: "Hong Kong Disneyland",
      photo: "https://example.com/photo60.jpg",
      price: 5,
      city: "Hong Kong"
    },
    {
      name: "Temple Street Night Market",
      photo: "https://example.com/photo61.jpg",
      price: 2,
      city: "Hong Kong"
    },
    {
      name: "Tsim Sha Tsui Promenade",
      photo: "https://example.com/photo62.jpg",
      price: 3,
      city: "Hong Kong"
    },
    {
      name: "Colosseum Tour",
      photo: "https://example.com/photo63.jpg",
      price: 5,
      city: "Rome"
    },
    {
      name: "Vatican Museums",
      photo: "https://example.com/photo64.jpg",
      price: 5,
      city: "Rome"
    },
    {
      name: "Pantheon Visit",
      photo: "https://example.com/photo65.jpg",
      price: 3,
      city: "Rome"
    },
    {
      name: "Roman Forum Tour",
      photo: "https://example.com/photo66.jpg",
      price: 4,
      city: "Rome"
    },
    {
      name: "Desert Safari",
      photo: "https://example.com/photo67.jpg",
      price: 5,
      city: "Dubai"
    },
    {
      name: "Burj Khalifa Observation Deck",
      photo: "https://example.com/photo68.jpg",
      price: 5,
      city: "Dubai"
    },
    {
      name: "Dubai Marina Yacht Cruise",
      photo: "https://example.com/photo69.jpg",
      price: 4,
      city: "Dubai"
    },
    {
      name: "Jumeirah Beach",
      photo: "https://example.com/photo70.jpg",
      price: 3,
      city: "Dubai"
    }
  ]
  
  Activity.insertMany(arrayActivities);