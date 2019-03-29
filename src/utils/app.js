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
