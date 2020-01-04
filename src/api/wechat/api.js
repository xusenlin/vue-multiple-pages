import request from "@/utils/request.js";

/**
 * 微信签名
 * @param params
 * @returns {AxiosPromise}
 */
export function wechatSignatureApi(params) {
  return request({
    url: "/open/signature",
    method: "get",
    params: params
  });
}

/**
 * xxx
 * @param params
 * @returns {AxiosPromise}
 */
export function postRequest(params) {
  return request({
    url: "/user",
    method: "post",
    data: params
  });
}
