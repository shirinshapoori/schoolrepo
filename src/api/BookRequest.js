import axios from "axios";

export async function GetPhotos() {
    const response =await axios.get('https://jsonplaceholder.typicode.com/photos')
    return response.data
}