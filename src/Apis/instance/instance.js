import axios from "axios";

const BASE_URL = "http://192.168.0.88:8282/japanego/"
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,//포트번호 다름으로 생기는 Cors 에러 에관한 문제 해결
  headers:{
    "Content-Type": "multipart/form-data",
  }
});

export default instance;
