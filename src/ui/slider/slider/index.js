/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import toutiao_behavior from '../../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior],
  options: {
    addGlobalClass: true,
  },
  properties: {
    min: {
      type: Number,
      value: 0
    },
    max: {
      type: Number,
      value: 100
    },
    step: {
      type: Number,
      value: 1
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: Number,
      value: 0
    },
    color: {
      type: String
    },
    selectedColor: {
      type: String
    },
    activeColor: {
      type: String,
      value: '#F85959'
    },
    backgroundColor: {
      type: String,
      value: '#ddd'
    },
    blockSize: {
      type: Number,
      value: 28
    },
    blockColor: {
      type: String,
      value: '#ffffff'
    },
    showValue: {
      type: Boolean,
      value: false
    },
  },

  methods: {
    slider_Change(e) {
      console.log('slider_Change', e)
      this.triggerEvent('change', e.details)
    },
    slider_Changing(e) {
      console.log('slider_Changing', e)
      this.triggerEvent('changing', e.details)
    }
  }
})
