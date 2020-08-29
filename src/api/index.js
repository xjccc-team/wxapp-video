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
  decodeMobile (json) { // 手机号解密
    return fetch({
      url: `${fetch.URLS}/user/decodeMobile`,
      body: json,
      type: 'POST'
    })
  }
  registerMobile (json) { // 手机号授权
    return fetch({
      url: `${fetch.URLS}/user/registerMobile`,
      body: json,
      type: 'POST'
    })
  }
  upload (json) { // 上传视频
    return fetch({
      url: `${fetch.URLS}/video/upload`,
      body: json,
      type: 'POST'
    })
  }
  videoInfo (json) { // 获取视频状态
    return fetch({
      url: `${fetch.URLS}/video/info`,
      body: json,
      type: 'GET'
    })
  }
  videoList (json) { // 视频列表（审核通过的）
    return fetch({
      url: `${fetch.URLS}/video/list`,
      body: json,
      type: 'GET'
    })
  }
  videoPraise (json) { // 点赞接口
    return fetch({
      url: `${fetch.URLS}/video/praise`,
      body: json,
      type: 'POST'
    })
  }
  uploadMake (json) { // 视频制作
    return fetch({
      url: `${fetch.URLS}/video/uploadMake`,
      body: json,
      type: 'POST'
    })
  }
  delVideo (json) { // 删除视频
    return fetch({
      url: `${fetch.URLS}/admin/video/del`,
      body: json,
      type: 'GET'
    })
  }
  videoDetail (json) { // 视频详情
    return fetch({
      url: `${fetch.URLS}//video/detail`,
      body: json,
      type: 'GET'
    })
  }
}

export default new XHR()
