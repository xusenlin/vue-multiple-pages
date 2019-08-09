import {currentUrlToParams} from './app.js'
import allPageConfig from '@/config/page.js'




const currentPageParams = currentUrlToParams();
let pageConfig = allPageConfig[window.PAGE_PATH]; //PAGE_PATH在public中定义。

export function validateAndInitUrlParams() {
    window.URL_PARAMS = currentPageParams;
    let noRequiredParams = false;
    let errorMsg = '';
    if(pageConfig.requiredParams && Object.keys(pageConfig.requiredParams).length != 0){
        let requiredParams = pageConfig.requiredParams;
        errorMsg = 'Url缺少参数:';
        for (let key in requiredParams){
            if(!URL_PARAMS.hasOwnProperty(key)){
                errorMsg += `[${key}(${requiredParams[key]})]`;
                noRequiredParams = true
            }
        }
    }
    // if(pageConfig.localStorage && Object.keys(pageConfig.localStorage).length != 0 && !noRequiredParams){
    //     let requiredParams = pageConfig.localStorage;
    //     errorMsg = 'localStorage缺少数据:';
    //
    //     for (let key in requiredParams){
    //         if(!localStorage.getItem(key)){
    //             errorMsg += `[${key}${requiredParams[key]}]`;
    //             noRequiredParams = true
    //         }
    //     }
    // }
    // if(pageConfig.sessionStorage && Object.keys(pageConfig.sessionStorage).length != 0 && !noRequiredParams){
    //     let requiredParams = pageConfig.sessionStorage;
    //     errorMsg = 'sessionStorage缺少数据:';
    //
    //     for (let key in requiredParams){
    //         if(!sessionStorage.getItem(key)){
    //             errorMsg += `[${key}${requiredParams[key]}]`;
    //             noRequiredParams = true
    //         }
    //     }
    // }
    if(noRequiredParams){
        alert(errorMsg);
        throw new Error(errorMsg);
        return false
    }

    return true
}


