import http from "../instance/instance";

/**
 * 유저 정보
 * @typedef {Object} authInfo
 * @property {string} email
 * @property {string} password
 */

 export const login = (userInfo) => http.post("/auth/login", userInfo);

 export const logout = () => http.post("/auth/logout")



