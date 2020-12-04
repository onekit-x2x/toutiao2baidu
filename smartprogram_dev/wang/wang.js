import {STRING} from 'oneutil'
import {OnekitPage, tt} from '../toutiao2baidu/index'


OnekitPage({
  data: {},
  onLoad() {
    const res = tt.env
    console.log(res)
  }
})
