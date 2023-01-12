import http from "../instance/instance";

/**
 * word,wordBank 정보
 * @typedef {Object} wtowbInfo
 * @property {number} wordNo 
 * @property {number} wordBankNo
 */

export const addWord = (wtowbInfo) => http.put("/relation/word/"+wtowbInfo.wordNo+"/bank/"+wtowbInfo.wordBankNo);

export const deleteWord = (wtowbInfo) => http.delete("/relation/word/"+wtowbInfo.wordNo+"/bank/"+wtowbInfo.wordBankNo);
