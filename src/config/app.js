
const devApiUrl = 'http://192.168.49.00:10005';

//正式环境变量,注意修改
const proApiUrl = 'https://pro.web.com';


const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;
export default {
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:1000,
    accessTokenKey:'ACCESS_TOKEN',
    userInfoKey:'USER_INFO',
    requestRetry:4,
    requestRetryDelay:800,
    designSize:375,//设计稿宽度 375
}
