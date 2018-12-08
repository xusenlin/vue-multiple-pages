import request from '../utils/request.js'

export function wechatSignatureApi(params) {
    return request({
        url: '/open/getHsjJsignature',
        method: 'get',
        params:params
    })
}

export function postRequest(params) {
    return request({
        url: '/open/post',
        method: 'post',
        data:params
    })
}
