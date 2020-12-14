/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import wxs_behavior from '../../../behavior/wxs_behavior'
import weixin_behavior from '../../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  properties: {
    type: {// 做不了
      type: String,
      value: ''
    },
    canvasId: {
      type: String,
      value: ''
    },
  },

  methods: {
    canvas_touchstart(e) {
      console.log('touchstart', e)
      this.triggerEvent('touchstart', e)
    },
    canvas_touchmove(e) {
      console.log('touchmove', e)
      this.triggerEvent('touchmove', e)
    },
    canvas_touchend(e) {
      console.log('canvas_touchend', e)
      this.triggerEvent('touchend', e)
    },
    canvas_touchcancel(e) {
      console.log('canvas_touchcancel', e)
      this.triggerEvent('touchcancel', e)
    }
  }
})
