import axios from "axios";
import parse from "node-html-parser";

const url = "https://rus-ege.sdamgia.ru/test?id=46230713";

const fetchHtml = async (url: string) => {
    const promise = axios.get(url);
    const data = (await promise).data;
    const parsedHtml = parse(data);
    const textElements = parsedHtml.querySelectorAll('p .left_margin');
    console.log(textElements[0])
    const content = textElements.map((elem) => {
        return elem.text;
    });

    console.log(content);

    return parsedHtml;
}

console.log(fetchHtml(url));