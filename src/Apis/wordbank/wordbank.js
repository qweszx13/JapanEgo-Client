import http from "../instance/instance";

export const wordBankList = (email) => http.get("/wordbank?email={email}"+email);

/**
 * 워드뱅크 정보
 * @typedef {Object} wordBankCreateInfo
 * @property {string} email
 * @property {string} wordBankName
 */

export const wordBankCreate = (wordBankCreateInfo) => http.post("/wordbank",wordBankCreateInfo);

export const wordBankDelete = (wordBankNo) => http.delete("/wordbank/"+wordBankNo);

export const wordBankModify = (newWordBankName)=> http.patch("/wordbank/"+newWordBankName);

/**
 * 워드뱅크 정보
 * @typedef {Object} wordBankDetailInfo
 * @property {string} wordBankNo
 * @property {number} page
 */

export const wordBankDetail = (wordBankDetailInfo) => 
http.get("/wordbank/detail?wordbank_no="+wordBankDetailInfo.wordBankNo+"&page="+wordBankDetailInfo.page+"&size=10");



