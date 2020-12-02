Component({
  options: {
    addGlobalClass: true,
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
      value: '#000000',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    current: {
      type: Number,
      value: '0',
    },
    interval: {
      type: Number,
      value: '5000',
    },
    duration: {
      type: Number,
      value: '5000',
    },
    circular: {
      type: Boolean,
      value: false,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
    previousMargin: {
      type: String,
      value: '0px',
    },
    nextMargin: {
      type: String,
      value: '0px',
    },
    displayMultipleItems: {
      type: Number,
      value: '1',
    },
  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() { },

  detached() { },

  methods: {
    swiper_Change(e) {
      this.triggerEvent('change', e)
    },
    swiper_AnimationEnd(e) {
      this.triggerEvent('animationfinish', e)
    },
    swiper_transition(e) {
      this.triggerEvent('transition', e)
    }
  }
})
