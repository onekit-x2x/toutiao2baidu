/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  options: {
    addGlobalClass: true,
  },
  properties: {
    resolution: {// 做不了
      type: String,
      value: 'medium'
    },
    audevicePosition: {
      type: String,
      value: 'back'
    },
    frameSize: {// 做不了
      type: String,
      value: 'medium'
    },
  },
  methods: {
    trigger_initdone(e) {
      this.triggerEvent('initdone', e)
    },
    camera_error(e) {
      this.triggerEvent('error', e)
    },
    camera_stop(e) {
      this.triggerEvent('load', e)
    }
  }
})
