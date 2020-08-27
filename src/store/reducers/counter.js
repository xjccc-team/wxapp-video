import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, MOBILEPHONE, USERINFO, OPENID, VIDEONOW} from '../types/counter'

const defaulState = {
  companyId: 0,
  userId: 0,
  isIpx: false,
  userinfo: {},
  openid: '',
  videoNow: [] // 本地上传视频返回的路径
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
  [VIDEONOW] (state, action) {
    console.log(action.payload)

    return {
      ...state,
      videoNow: action.payload
    }
  }

}, defaulState)
