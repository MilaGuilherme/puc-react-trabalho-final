import axios from "axios";

const URL = "https://www.dnd5eapi.co";
  
const getResource = async (url) => {
  //console.log(`${URL}${url}`);
  const response = await axios.get(`${URL}${url}`).then(data=> JSON.parse(JSON.stringify(data.data)));
  //console.log(response);
    return response;
}

const getResourceList = async () => {
  //console.log("getting resources")
    const response = await axios.get(`${URL}/api`).then(data=> JSON.parse(JSON.stringify(data.data)));
    return response;
  }

export { getResource , getResourceList }