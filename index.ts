import axios from "axios";

const url = "https://rus-ege.sdamgia.ru/";

const fetchHtml = async (url: string) => {
    const data = axios.get(url);
    console.log((await data).data);
}

console.log(fetchHtml(url));