Component({
 options: {
        addGlobalClass: true,
    },
    properties: {
            onekitClass: {
                type: String,
                value: ""
            },
            onekitStyle: {
                type: String,
                value: ""
            },
            onekitId: {
                type: String,
                value: ""
            },
        url:{
        type:String,
        value:""
        },
        delta:{
        type:Number,
        value:0
        },
        openType:{
        type:String,
        value:"navigate"
        },
        hoverClass:{
        type:String,
        value:"navigator-hover"
        },
        hoverStartTime:{
        type:Number,
        value:50
        },
        hoverStayTime:{
        type:Number,
        value:400
        },
        hoverStopPropagation:{
        type:Boolean,
        value:false
        },
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});