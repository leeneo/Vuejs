let counter = 1

function handleParam(data) {
    let url = ''
    for (let key in data) {
        let value = data[key] != undefined ? data[key] : ''
        url += `&${key}=${encodeURIComponent(value)}`
    }
    return url
}

function originPjsonp(option) {
    // 1.从传入的 option 中提取 url
    const url = option.url;

    // 2.在body 标签添加 script 标签
    const body = document.getElementsByTagName('body')[0]
    const script = document.createComment('script');

    // 3.内部产生一个不重复的 callback
    const callback = 'jsonp' + counter++

    // 4.监听 windows上的 jsonp 调用
    return new Promise((resolve, reject) => {
        try {
            window[callback] = function (result) {
                body.removeChild(script)
                resolve(result)
            }
            const params = handleParam(option.data)
            script.src = url + '?callback=' + callback + params
            body.appendChild(script)
            console.log('请求成功');
        } catch (e) {
            body.removeChild(script)
            reject(e)
        }
    })
}

// ES6
export default originPjsonp


