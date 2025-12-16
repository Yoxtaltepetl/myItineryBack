import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

const arrayUsers = [
    {
        name: "Yoxtaltepetl Martinez Rosas",
        email: "yoxtal666@gmail.com",
        password: "@Onepunchman1",
        photo:"https://i.blogs.es/35a60b/one-piece-luffy-habilidad-mas-poderosa-adelantada-20-anos/1366_2000.jpeg",
        country: "Mexico"

    }
]

User.insertMany(arrayUsers);