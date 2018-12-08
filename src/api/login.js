import request from '../utils/request.js'

export function getSMSCode(params) {
    return request({
        url: '/open/getSMSCode',
        method: 'get',
        params: params
    })
}
