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
    scrollX: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false,
    },
    upperThreshold: {
      type: Number || String,
      value: '50',
    },
    lowerThreshold: {
      type: Number || String,
      value: '50',
    },
    scrollTop: {
      type: Number || String,
      value: '',
    },
    scrollLeft: {
      type: Number || String,
      value: '',
    },
    scrollIntoView: {
      type: String,
      value: '',
    },
    scrollWithAnimation: {
      type: Boolean,
      value: false,
    },
    enableBackToTop: {
      type: Boolean,
      value: false,
    },
  },
  data: {},
  lifetimes: {
    attached() {
    }
  },
  methods: {
    on_toupper(e) {
      this.triggerEvent('scrolltoupper', {e})
    },
    on_tolower(e) {
      this.triggerEvent('scrolltolower', {e})
    },
    on_scroll(e) {
      this.triggerEvent('scroll', {e})
    }
  }
})
