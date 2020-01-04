import Storage from "good-storage";
import Config from "@/config/index.js";

export function currentUrlToParams(key = null) {
  let paramsUrl = window.location.href.split("?");
  if (paramsUrl.length < 2) return key ? null : {};
  let paramsArr = paramsUrl[1].split("&");
  let paramsData = {};
  paramsArr.forEach(r => {
    let data = r.split("=");
    paramsData[data[0]] = data[1];
  });
  if (key) return paramsData.hasOwnProperty(key) ? paramsData[key] : null;
  return paramsData;
}

/**
 * 将对象转换为?a=5&b=7形式
 * @param obj
 * @param firstStr
 * @returns {string|string}
 */
export function obj2StrParams(obj, firstStr = "?") {
  let params = firstStr;

  for (let p in obj) {
    params += p + "=" + obj[p] + "&";
  }
  return params.substring(0, params.length - 1);
}
/*
获取当前url
http://192.168.49.71:8081/ => http://192.168.49.71:8081/
http://192.168.49.71:8081/mm/ => http://192.168.49.71:8081/mm/
http://192.168.49.71:8081/mm/index.html => http://192.168.49.71:8081/mm/
http://192.168.49.71:8081/mm/ff/login.html?id=55 => http://192.168.49.71:8081/mm/ff/

页面名字不能能匹配除\w 的地址，也就是说你的页面名字名字必须由a-z、A-Z、0-9，以及下划线组成才可以。
*/
export function getCurrentUrl() {
  let allUrl = window.location.href;
  let match = allUrl.match(/(\S+\/)\w+.html/i);
  return match && Array.isArray(match) && match.length > 1 ? match[1] : allUrl;
}

/**
 * 重置对象（会修改原始对象）
 * @param object
 * @param defaultVal
 */
export function resetObject(object, defaultVal = {}) {
  for (let k in object) {
    if (defaultVal.hasOwnProperty(k)) {
      object[k] = defaultVal[k];
    } else {
      if (Array.isArray(object[k])) object[k] = [];
      if ("string" == typeof object[k]) object[k] = "";
      if ("number" == typeof object[k]) object[k] = null;
      if ("boolean" == typeof object[k]) object[k] = false;
    }
  }
}

/**
 * 对象赋值（会修改原始对象）
 * @param object
 * @param valObject
 */
export function fillerLeft(object, valObject = {}) {
  for (let k in object) {
    if (valObject.hasOwnProperty(k)) {
      object[k] = valObject[k];
    }
  }
}

/**
 * 获取用户信息
 * @param key
 * @returns {null|*|undefined|{}}
 */
export function getUserInfo(key = null) {
  let userInfo = Storage.get(Config.userInfoKey);
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
  return userInfo || {};
}

/**
 * 设置用户信息
 * @param user
 * @returns {*}
 */
export function setUserInfo(user) {
  Storage.set(Config.userInfoKey, user);
  return user;
}

/**
 * 获取Token
 * @returns {*|undefined}
 */
export function getToken() {
  return Storage.get(Config.tokenKey);
}

/**
 * 设置Token
 * @param token
 * @returns {*|undefined}
 */
export function setToken(token) {
  return Storage.set(Config.tokenKey, token);
}

/**
 * 移除Token
 * @returns {*}
 */
export function removeToken() {
  return Storage.remove(Config.tokenKey);
}
