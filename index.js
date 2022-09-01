import axios from "axios";
import dotenv from "dotenv";


dotenv.config({ path: "./src/config/.env" });

async function playerStats() {
  try {
    const data = await axios({
      baseURL: "https://free-nba.p.rapidapi.com/players/237",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.TOKEN_KEY,
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

playerStats();
