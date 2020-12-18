/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../../behavior/onekit_behavior'
import toutiao_behavior from '../../../behavior/toutiao_behavior'

Component({
  behaviors: [onekit_behavior, toutiao_behavior, 'swan://form-field'],
  options: {
    addGlobalClass: true,
  },
  properties: {
    checked: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    type: {
      type: String,
      value: 'switch',
    },
    color: {
      type: String,
      value: '#F85959'
    },
  },
  methods: {
    switch_change(e) {
      this.triggerEvent('change', e.details)
    },
  }
})
