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
      value: 'none'
    },
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStarTime: {
      type: Number,
      value: 50
    },
    hoverStayTime: {
      type: Number,
      value: 400
    },
  },
  methods: {
  }
})
