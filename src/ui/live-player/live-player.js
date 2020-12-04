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
    src: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    muted: {
      type: Boolean,
      value: false,
    },
    orientation: {
      type: String,
      value: 'vertical',
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
  },

  methods: {
    live_statechange(e) {
      console.log('statechange', e)
      this.triggerEvent('statechange', e.details)
    },
    live_netstatus(e) {
      console.log('netstatus', e)
      this.triggerEvent('netstatus', e.details)
    },
    live_fullscreenchange(e) {
      console.log('fullscreenchange', e)
      this.triggerEvent('fullscreenchange', e.details)
    },
    trigger_error(e) {
      console.log('error', e)
      this.triggerEvent('error', e.details)
    },
  }
})
