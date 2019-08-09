import Config from '../config/app'

export function currentUrlToParams(key = null) {
    let paramsUrl = (window.location.href).split('?');
    if(paramsUrl.length<2)return key ? null : {};
    let paramsArr = paramsUrl[1].split('&');
    let paramsData = {}
    paramsArr.forEach(r=>{
        let data = r.split('=')
        paramsData[data[0]] = data[1]
    })
    if(key)return paramsData.hasOwnProperty(key) ? paramsData[key] : null;
    return paramsData;
}

/**
 * 将对象转换为?a=5&b=7形式
 * @param obj
 * @param firstStr
 * @returns {string|string}
 */
export function obj2StrParams(obj,firstStr = '?') {
    let params = firstStr;
    for (let p in obj){
        let isFirst = ( params === '?');
        let qz = isFirst ? '' : (params === '&' ? '' : '&');
        params += (qz + p + '=' + obj[p] )
    }
    return params
}


export function getToken() {
    return localStorage.getItem(Config.accessTokenKey);
}

export function setToken(token) {
    return localStorage.setItem(Config.accessTokenKey,token);
}

export function getUserInfo() {
    return JSON.parse(localStorage.getItem(Config.userInfoKey));
}

export function setUserInfo(userInfo) {
    return localStorage.setItem(Config.userInfoKey,JSON.stringify(userInfo));
}


/**
 * 重置对象参数
 * @params -> Object
 * @arg = Array => []
 * @arg = Boolean => false
 * @arg = Number => null
 * @arg = String => ''
 * */
export function resetArgs(args,def = {}) {
    for (let key in args) {
        if(def.hasOwnProperty(key)){
            args[key] = def[key]
        }else {
            if (Array.isArray(args[key])) args[key] = [];
            if ('string' == typeof args[key]) args[key] = '';
            if ('number' == typeof args[key]) args[key] = null;
            if ('boolean' == typeof args[key]) args[key] = false;
        }
    }
}

/**
 * @param obj
 * @param row
 */
export function fillerLeft(obj,row = {}) {
    for (let key in obj) {
        if(row.hasOwnProperty(key) && row[key] !== null && row[key] !== undefined){
            obj[key] = row[key]
        }
    }
}


