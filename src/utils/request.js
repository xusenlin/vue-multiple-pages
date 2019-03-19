import Axios from 'axios'
import Config from '../config/app.js'
import { Toast } from 'vant';

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*'
    },
    timeout: Config.timeout
})


service.interceptors.request.use(
    config => {

        if(!config.closeLoading){
            //加载提示
            window.loadingInstance = Toast.loading({
                mask: true,
                message: '加载中...'
            });
        }

        let noParameters = config.url.indexOf('?')  == -1;
        //config.headers['X-Token'] = getToken() //
        config.url = noParameters ? config.url+'?access_token=' + getToken(): config.url+'&access_token='+ getToken();

        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        if(!response.config.closeLoading){
            setTimeout(_=>{
                if(window.loadingInstance){
                    window.loadingInstance.clear();
                }
            },400);
        }

        const res = response
        if (res.status !== 200) {
            Toast('数据返回出错');
            return Promise.reject('error')
        } else {
            if(res.data.resultCode != 200){
                Toast(res.data.message);
                return Promise.reject('error');
            }
            return res.data.data
        }
    },
    error => {

        setTimeout(_=>{
            if(window.loadingInstance){
                window.loadingInstance.clear();
            }
        },300);
        Toast("请求未响应");
        return Promise.reject(error)
    }
)

export default service
