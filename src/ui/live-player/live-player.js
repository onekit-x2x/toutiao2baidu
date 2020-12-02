/* eslint-disable no-console */
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
    backgroundMute: {
      type: Boolean,
      value: false,
    },
    minCache: {
      type: Number,
      value: '1',
    },
    maxCache: {
      type: Number,
      value: '3',
    },
  },

  methods: {
    live_player_statechange(e) {
      console.log('live_player_statechange', e)
      this.triggerEvent('statechange', e.details)
    },
    live_player_netstatus(e) {
      console.log('live_player_netstatus', e)
      this.triggerEvent('netstatus', e.details)
    },
    live_player_fullscreenchange(e) {
      console.log('live_player_fullscreenchange', e)
      this.triggerEvent('fullscreenchange', e.details)
    },
  }
})
