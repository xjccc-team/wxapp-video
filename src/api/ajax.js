import wepy from 'wepy'
const fetch = ({url, body, type}) => {
  if (body) {
    body['ts'] = +new Date()
  }

  if (type === 'POST') {
    return wepy.request({
      url,
      data: body,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      }
    })
  } else {
    return wepy.request({ url, data: body })
  }
}
const DEBUG = true // 是否开发模式

fetch.HTTP_DEV = 'http://49.233.63.162:8080/' // 测试地址
fetch.HTTPS = 'https://small.5178u.com/' // 正式地址
fetch.URLS = DEBUG ? fetch.HTTP_DEV : fetch.HTTPS
export default fetch
