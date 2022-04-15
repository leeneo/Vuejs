import {
    request
} from "./request";

export function requestHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function requestHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}
