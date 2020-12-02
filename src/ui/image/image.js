Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    src: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
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
  },
  methods: {
    image_error(e) {
      this.triggerEvent('error', e)
    },
    image_load(e) {
      this.triggerEvent('load', e)
    },
  }
})
