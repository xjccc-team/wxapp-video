import wepy from 'wepy'
const fetch = ({url, body, type}) => {
  if (type === 'POST') {
    return wepy.request({
      url,
      data: body,
      method: 'POST'
    })
  } else {
    return wepy.request({ url, data: body })
  }
}
const DEBUG = false // 是否开发模式

fetch.HTTP_DEV = 'http://49.233.63.162' // 测试地址
fetch.HTTPS = 'https://www.wingstechnology.cn/api-server/' // 正式地址
fetch.URLS = DEBUG ? fetch.HTTP_DEV : fetch.HTTPS
export default fetch
