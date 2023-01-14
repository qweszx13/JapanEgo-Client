import http from "../instance/instance";

/**
 * 비밀번호 수정 정보
 * @typedef {Object} passowrdRestInfo
 * @property {string} email
 * @property {string} password
 * @property {string} newPassword
 */

export const passowordRest = (passowrdRestInfo) => http.post("/auth/passowrd_reset",passowrdRestInfo);

export const profile = (email) => http.get("/member/profile?email="+email);

/**
 * 회원탈퇴 정보
 * @typedef {Object} memberInfo
 * @property {string} email
 * @property {string} password
 */

export const memberDelete =  (memberInfo) => http.delete("/member/"+memberInfo.email,memberInfo.passowrd);

/**
 * 회원가입 정보
 * @typedef {Object} singupInfo
 * @property {string} email
 * @property {string} password
 * @property {boolean} email_confirm_result
 */

export const signup = (singupInfo) => http.post("/member/signup",singupInfo);

export const emailConfirm = (email) => http.post("/member/signup/email_confirm",email);



