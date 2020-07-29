Component({
 options: {
        addGlobalClass: true,
    },
    properties: {
        scrollX: {
            type: Boolean,
            value: false,
        },
        scrollY: {
            type: Boolean,
            value: false,
        },
        upperThreshold: {
            type: Number | String,
            value: '50',
        },
        lowerThreshold: {
            type: Number | String,
            value: '50',
        },
        scrollTop: {
            type: Number | String,
            value: "",
        },
        scrollLeft: {
            type: Number | String,
            value: "",
        },
        scrollIntoView: {
            type: String,
            value: "",
        },
        scrollWithAnimation: {
            type: Boolean,
            value: false,
        },
        enableBackToTop: {
            type: Boolean,
            value: false,
        },
        // "bindscrolltoupper": {
        //     type: Eventhandle, 
        //     value:"", 
        // },
        // "bindscrolltolower": {
        //     type: Eventhandle, 
        //     value:"", 
        // },
        // "bindscroll": {
        //     type: Eventhandle, 
        //     value:"", 
        // }
    },
    data: {},
    lifetimes: {
        attached: function () {
            /* if(this.properties.scrollX){
                 swan.createSelectorQuery()
                       //  .in(this)
                         .selectAll("page")
                         .boundingClientRect(res => {
                             console.log("xxx",res)
                         }).exec();
                 
             }*/
        }
    },
    methods: {
    }
});