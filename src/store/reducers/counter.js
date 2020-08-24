import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, MOBILEPHONE, USERINFO, OPENID, VIDEOSRC} from '../types/counter'

const defaulState = {
  companyId: 0,
  userId: 0,
  isIpx: false,
  userinfo: {},
  openid: '',
  videoSrc: '' // 本地上传视频返回的路径
}

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  [MOBILEPHONE] (state, string) {
    return {
      ...state,
      actionSheet: string
    }
  },
  [USERINFO] (state, action) {
    return {
      ...state,
      userinfo: action.payload
    }
  },
  [OPENID] (state, action) {
    return {
      ...state,
      openid: action.payload
    }
  },
  [VIDEOSRC] (state, action) {
    return {
      ...state,
      videoSrc: action.payload
    }
  }

}, defaulState)
