import axios from "axios";

const BASE_URL = "http://localhost:8282/japanego/"
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true//포트번호 다름으로 생기는 Cors 에러 에관한 문제 해결
});

export default instance;
