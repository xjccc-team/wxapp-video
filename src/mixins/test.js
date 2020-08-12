import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.',
    openid: ''
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    this.setData({ openid: wepy.getStorageSync('openid') })
    this.openid = wepy.getStorageSync('openid')
  }
  showToast (message, succress) {
    wepy.showToast({
      icon: 'none',
      mask: true,
      title: message,
      duration: 2000
    }).then(succress)
  }
}
