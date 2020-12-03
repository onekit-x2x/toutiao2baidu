import {STRING} from 'oneutil'
import {OnekitPage, tt} from '../toutiao2baidu/index'


OnekitPage({
  data: {},
  onLoad() {
    const base64Str = 'Ynl0ZWRhbmNl'
    const arrayBuffer = STRING.base64ToArrayBuffer(base64Str)
    // console.log(arrayBuffer);
    // const arr2b64 = STRING.arrayBufferToBase64(arrayBuffer)
    // console.log(arr2b64)

    console.log(arrayBuffer)
  }
})
