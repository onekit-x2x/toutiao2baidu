/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  properties: {
    unitId: {
      type: String,
      value: null,
    },
    adIntervals: {
      type: Number || String,
      value: null
    },
    fixed: {
      type: Boolean,
      value: null,
    },
    type: {
      type: String,
      value: 'banner'
    },
    scale: {
      type: Number,
      value: 100
    }
  },
  data: {},
  attached() {
    //
    let fixed
    let static
    if (this.properties.fixed === true) {
      this.properties.fixed = fixed
    } else {
      this.properties.fixed = static
    }
    this.setData({
      fixed
    })
  },

  detached() {},

  methods: {
    ad_load(e) {
      this.triggerEvent('load', e)
    },
    ad_error(e) {
      this.triggerEvent('error', e)
    },
    ad_close(e) {
      this.triggerEvent('close', e)
    },
  }
})
