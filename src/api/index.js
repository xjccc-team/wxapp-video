import fetch from './ajax'
class XHR {
  getUnionid (json) {  // 获取openId
    return fetch({
      url: `${fetch.URLS}/smallLogin.do`,
      body: json,
      type: 'POST'
    })
  }
  authorization (json) {  // 授权存储
    return fetch({
      url: `${fetch.URLS}/smallSignup.do`,
      body: json,
      type: 'POST'
    })
  }
  getPhoneCode(json) { // 获取手机号
    return fetch({
      url: `${fetch.URLS}/mobileSignup.do`,
      body: json,
      type: 'POST'
    })
  }
  queryUser(json) { // 获取用户信息
    return fetch({
      url: `${fetch.URLS}/queryUser.do`,
      body: json,
      type: 'POST'
    })
  }
  submitPhone(json) { // 提交手机号
    return fetch({
      url: `${fetch.URLS}/mobileLogin.do`,
      body: json,
      type: 'POST'
    })
  }
  editPhone(json) { // 修改手机号
    return fetch({
      url: `${fetch.URLS}/updateMobile.do`,
      body: json,
      type: 'POST'
    })
  }
}

export default new XHR()
