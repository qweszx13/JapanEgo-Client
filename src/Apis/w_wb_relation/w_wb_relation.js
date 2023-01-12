import http from "../instance/instance";

/**
 * word,member 정보
 * @typedef {Object} wtomInfo
 * @property {number} wordNo 
 * @property {number} memberNo
 */

export const addWord = (wtomInfo) => http.put("/relation/word/"+wtomInfo.wordNo+"/member/"+wtomInfo.memberNo);

export const deleteWord = (wtomInfo) => http.delete("/relation/word/"+wtomInfo.wordNo+"/member/"+wtomInfo.memberNo);
