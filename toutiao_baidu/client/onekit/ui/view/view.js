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
        onekitId: { type: String, value: "" },
        hoverClass: {
            type: String,
            value: ""
        },
        hoverStarTime: {
            type: Number,
            value: ""
        },
        hoverStayTime: {
            type: Number,
            value: ""
        },
        hoverStopPropagation: {
            type: Boolean,
            value: false
        },
        disableScroll: {
            type: Boolean,
            value: false
        },
        hidden: {
            type: Boolean,
            value: false
        },
        disableScroll: {
            type: Object,
            value: {}
        },
    },
    methods: {
        view_Tap(e) {
            this.triggerEvent("Tap", e)
        }
    }
});