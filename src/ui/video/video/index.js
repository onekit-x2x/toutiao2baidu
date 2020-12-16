/* eslint-disable max-len */
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
    src: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    poster: {
      type: String,
      value: ''
    },
    loop: {
      type: Boolean,
      value: false,
    },
    showFullscreenBtn: {
      type: Boolean,
      value: true,
    },
    showPlayBtn: {
      type: Boolean,
      value: true,
    },
    controls: {
      type: Boolean,
      value: true,
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
    showCenterPlayBtn: {
      type: Boolean,
      value: true
    },
    playBtnPosition: {
      type: String,
      value: 'center',
      observer(newVal) {
        if (newVal === 'center') {
          console.log('1', newVal, this.properties.showPlayBtn, this.properties.showCenterPlayBtn)
          this.properties.showPlayBtn = false
          this.properties.showCenterPlayBtn = true
          console.log('11', newVal, this.properties.showPlayBtn, this.properties.showCenterPlayBtn)
        }
        if (newVal === 'bottom') {
          console.log('2', newVal, this.properties.showPlayBtn, this.properties.showCenterPlayBtn)
          this.properties.showPlayBtn = true
          this.properties.showCenterPlayBtn = false
          console.log('22', newVal, this.properties.showPlayBtn, this.properties.showCenterPlayBtn)
        }
        this.setData({
          showPlayBtn: this.properties.showPlayBtn,
          showCenterPlayBtn: this.properties.showCenterPlayBtn
        })
      }
    },
    // 广告做不了
    preRollUniId: {
      type: String,
      value: '',
    },
    postRollUniId: {
      type: String,
      value: '',
    }
  },
  methods: {
    video_play(e) {
      this.triggerEvent('play', e)
    },
    video_pause(e) {
      this.triggerEvent('pause', e)
    },
    video_ended(e) {
      this.triggerEvent('ended', e)
    },
    video_error(e) {
      this.triggerEvent('error', e)
    },
    video_timeupdate(e) {
      this.triggerEvent('timeupdate', e)
    },
    video_fullscreenchange(e) {
      this.triggerEvent('fullscreenchange', e)
    },
    video_waiting(e) {
      this.triggerEvent('waiting', e)
    },

    // 广告做不了
    trigger_adstart(e) {
      this.triggerEvent('adstart', e)
    },
    trigger_adended(e) {
      this.triggerEvent('adended', e)
    },
    trigger_adload(e) {
      this.triggerEvent('adload', e)
    },
    trigger_adclose(e) {
      this.triggerEvent('adclose', e)
    },
    trigger_aderror(e) {
      this.triggerEvent('aderror', e)
    },
  }
})
