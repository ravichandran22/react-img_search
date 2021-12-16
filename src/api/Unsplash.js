import axios from "axios";

 export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID A73coL_5f-C-g8LMUei3oMz1-aa3tQw-nmdqux2G4yM'
      }
});
