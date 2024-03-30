import axios from "axios";

export async function GetUsers() {
  const response =await axios.get("https://jsonplaceholder.typicode.com/users");
  return response;

}
