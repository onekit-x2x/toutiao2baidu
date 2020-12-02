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
    hoverClass: {
      type: String,
      value: ''
    },
    hoverStarTime: {
      type: Number,
      value: ''
    },
    hoverStayTime: {
      type: Number,
      value: ''
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    disableScroll: {
      type: Boolean,
      value: false
    },
    hidden: {
      type: Boolean,
      value: false
    },
  },
  methods: {
    view_Tap(e) {
      this.triggerEvent('Tap', e)
    }
  }
})
