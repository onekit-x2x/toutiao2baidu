/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import wxs_behavior from '../../../behavior/wxs_behavior'
import toutiao_behavior from '../../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, toutiao_behavior],
  properties: {
    src: {
      type: String,
      value: 'N/A'
    },
    progressbarColor: {
      type: String,
      value: '#51a0d8'
    }
  },
  data: {
    percent: 0
  },
  attached() {
    if (this.properties.percent === 100) {
      this.trigger_load()
    }
  },

  detached() { },

  methods: {
    web_message(e) {
      console.log('message', e)
      this.triggerEvent('message', e)
    },
    trigger_load(e) {
      console.log('load', e)
      this.triggerEvent('load', e)
    },
    //
    trigger_error(e) {
      console.log('error', e)
      this.triggerEvent('error', e)
    },
  }
})
