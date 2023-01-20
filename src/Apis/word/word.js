import http from "../instance/instance";

export const wordList = (page,size,searchWord) => http.get("/word/wordList?page="+page+"&size="+size+"&search="+searchWord);

export const wordDetail = (wordNo) => http.get("/word?wordNo="+wordNo);
