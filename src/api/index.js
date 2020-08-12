import fetch from './ajax'
class XHR {
  getAccessToken (json) {  // access_Token
    return fetch({
      url: `${fetch.URLS}/auth/getAccessToken`,
      body: json,
      type: 'GET'
    })
  }
  getOpenId (json) {  // 获取openId
    return fetch({
      url: `${fetch.URLS}/auth/login`,
      body: json,
      type: 'GET'
    })
  }
  register (json) {  // 注册会员信息
    return fetch({
      url: `${fetch.URLS}/user/register`,
      body: json,
      type: 'POST'
    })
  }
  queryUser(json) { // 获取用户信息
    return fetch({
      url: `${fetch.URLS}/user/queryUser`,
      body: json,
      type: 'GET'
    })
  }
  registerMobile (json) { // 手机号授权
    return fetch({
      url: `${fetch.URLS}/user/registerMobile`,
      body: json,
      type: 'POST'
    })
  }
}

export default new XHR()
