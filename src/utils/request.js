import Axios from "axios";
import Config from "@/config/index.js";
import { getToken } from "@/utils/common.js";
//import { Toast } from "vant";

const service = Axios.create({
  baseURL: Config.apiUrl + "/" + Config.apiPrefix,
  headers: {
    Accept: "*/*"
  },
  timeout: Config.timeout
});

service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;
// let LoadingInstance = null;

service.interceptors.request.use(
  config => {
    if (!config.closeLoading) {
      //加载提示
      // window.LoadingInstance = Toast.loading({
      //     mask: true,
      //     message: '加载中...'
      // });
    }
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    //if(LoadingInstance){LoadingInstance.clear();}

    if (res.status !== 200) {
      //Toast('数据返回出错');
      return Promise.reject("响应非200！");
    } else {
      if (res.data.code != 100000) {
        if (res.config.closeInterceptors) {
          return Promise.reject(res.data); //自己处理错误
        }
        //统一处理错误
        //Toast(res.data.msg);
        return Promise.reject("error");
      }
      return res.data.data;
    }
  },
  error => {
    //if(LoadingInstance){LoadingInstance.clear();}
    //Toast("网络错误");
    return Promise.reject(error);
  }
);

export default service;
