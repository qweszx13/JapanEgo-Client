import http from "../instance/instance";

export const wordList = (searchWord) => http.get("/word/list?page=1&size=10&search="+searchWord);

export const wordDetail = (wordNo) => http.get("/word?wordNo="+wordNo);
