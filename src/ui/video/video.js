Component({
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached() {
      if (this.properties.poster === true) {
        this.setData({poster: 'https://www.baidu.com/img/flexible/logo/pc/result.png'})
      }
    }
  },
  properties: {
    onekitClass: {
      type: String,
      value: ''
    },
    onekitStyle: {
      type: String,
      value: ''
    },
    onekitId: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: '',
    },
    objectFit: {
      type: String,
      value: 'contain',
    },
    controls: {
      type: Boolean,
      value: true,
    },
    autoplay: {
      type: Boolean,
      value: false,
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

    poster: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '',
    },
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
    video_timeupdate(e) {
      this.triggerEvent('timeupdate', e)
    },
    video_fullscreenchange(e) {
      this.triggerEvent('fullscreenchange', e)
    },
    video_waiting(e) {
      this.triggerEvent('waiting', e)
    },
    video_error(e) {
      this.triggerEvent('error', e)
    },
  }
})
