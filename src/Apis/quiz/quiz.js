import http from "../instance/instance";

export const requestQuiz = (wordBankNo) => http.get("/quiz?wordbank_no="+wordBankNo);

export const wellcomeQuiz = () => http.get("/quiz");
