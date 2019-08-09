import request from '../utils/request.js'

/**
 * 获取短消息
 * @param params
 * @returns {AxiosPromise}
 */
export function getSMSCode(params) {
    return request({
        url: '/open/getSMSCode',
        method: 'get',
        params: params
    })
}
