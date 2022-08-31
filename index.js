import axios from "axios";

async function playerStats() {
  try {
    const data = await axios({
      baseURL: "https://free-nba.p.rapidapi.com/players/237",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ba0720ec70mshb18d3153ed7911fp1c776bjsn9904be790bcf",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

playerStats();
