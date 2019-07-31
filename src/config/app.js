
const devApiUrl = 'http://192.168.49.00:10005';


const buildDevApiUrl = 'http://192.168.48.192:9088';//打包开发环境
const buildDevTestApiUrl = 'http://192.168.48.192:9288';//打包开发测试环境
const buildTestApiUrl = 'http://192.168.48.192:9188';//打包测试环境
const buildProApiUrl = 'https://hsjapi.hulian120.com';//打包正式环境


let useApiUrl;

if(process.env.NODE_ENV === 'development'){
    useApiUrl = devApiUrl;
}else {//production
    switch (process.env.VUE_APP_MODE) {
        case 'buildDev':
            useApiUrl = buildDevApiUrl;
            break;
        case 'buildDevTest':
            useApiUrl = buildDevTestApiUrl;
            break;
        case 'buildTest':
            useApiUrl = buildTestApiUrl;
            break;
        default:
            useApiUrl = buildProApiUrl;
            break;
    }
}


export default {
    apiUrl:useApiUrl,
    apiPrefix : "",
    timeout:1000,
    accessTokenKey:'ACCESS_TOKEN',
    userInfoKey:'USER_INFO',
    requestRetry:4,
    requestRetryDelay:800,
    designSize:375,//设计稿宽度 375,建议使用375，可以和一些主流的ui库兼容。如vant
}
