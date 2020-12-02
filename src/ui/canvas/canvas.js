Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    propName: { // 属性名
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
      canvasId: {
        type: String,
        value: ''
      },
    }
  },

  data: {}, // 私有数据，可用于模版渲染

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() { },

  methods: {
    onTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    }
  }
})