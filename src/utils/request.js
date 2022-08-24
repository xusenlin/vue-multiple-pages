import Axios from "axios";
import { getToken } from "@/utils/common.js";
import { showLoadingToast,closeToast } from "vant";
import { baseURL,timeout,requestRetryDelay,requestRetry } from "@/config/request";

const service = Axios.create({
  baseURL,
  headers: {
    Accept: "*/*"
  },
  timeout
});

service.defaults.retry = requestRetry;
service.defaults.retryDelay = requestRetryDelay;


service.interceptors.request.use(
  config => {
    if (config.showLoading) {
      showLoadingToast({
        message: '加载中...',
        forbidClick: true,
      });
    }
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    closeToast()
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    closeToast()
    if (res.status !== 200) {
      //Toast('数据返回出错');
      return Promise.reject("响应非200！");
    } else {
      if (res.data.code != 100000) {
        //统一处理错误
        //Toast(res.data.msg);
        return Promise.reject("error");
      }
      return res.data.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;


export const transformRequest = [function (data) {
  let formData = new FormData()
  for (let key in data) {
    formData.append(key, data[key])
  }
  return formData
}];
