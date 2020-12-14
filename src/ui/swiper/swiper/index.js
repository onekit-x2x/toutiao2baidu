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
    indicatorDots: {
      type: Boolean,
      value: false,
    },
    indicatorColor: {
      type: String,
      value: 'Rgba(0, 0, 0, .3)',
    },
    indicatorActiveColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0)',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: 0,
    },
    currentItemId: {
      type: String,
      value: '',
    },
    interval: {
      type: Number,
      value: 5000,
    },
    previousMargin: {
      type: String,
      value: '',
    },
    nextMargin: {
      type: String,
      value: '',
    },
    displayMultipleItems: {
      type: Number,
      value: 1,
    },
    duration: {
      type: Number,
      value: 500,
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
  },

  data: {},
  attached() { },

  detached() { },

  methods: {
    swiper_Change(e) {
      this.triggerEvent('change', e)
    },
    swiper_AnimationEnd(e) {
      this.triggerEvent('animationfinish', e)
    },
    //
    trigger_transition(e) {
      this.triggerEvent('transition', e)
    }
  }
})
