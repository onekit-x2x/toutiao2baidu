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
    percent: {
      type: Number,
    //   observer(newVal, oldVal, changedPath) {
    //     const that = this
    //     setTimeout(() => {
    //       that.triggerEvent('activeend')
    //     }, 1000)
    //   }
    },
    showInfo: {type: Boolean, value: false},
    borderRadius: {type: String, value: 0},
    strokeWidth: {type: String, value: 6},
    color: {type: String, value: '#09BB07'},
    activeColor: {type: String, value: '#09BB07'},
    backgroundColor: {type: String, value: '#EBEBEB'},
    active: {type: Boolean, value: false},
    activeMode: {type: String, value: 'backwards'},
    bindactiveend: {type: 'Eventhandle'},
    fontSize: {type: String, value: 16}

  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {
    let borderRadius = this.properties.borderRadius
    borderRadius = this._num2str(borderRadius)
    //
    let strokeWidth = this.properties.strokeWidth
    strokeWidth = this._str2num(strokeWidth)
    //
    let fontSize = this.properties.fontSize
    fontSize = this._num2str(fontSize)
    //
    this.setData({borderRadius, strokeWidth, fontSize})

    // console.log(borderRadius)
  },

  detached() { },

  methods: {
    // _num2str(string) {
    //   if (!string) {
    //     string = 0
    //   }
    //   if (!isNaN(string)) {
    //     string += 'px'
    //   }
    //   return string
    // },
    // _str2num(string) {
    //   if (!isNaN(string)) {
    //     return string
    //   }
    //   string = string.replace('rpx', '')
    //   string = string.replace('px', '')
    //   string = string.trim()
    //   return string
    // },
  }
})
