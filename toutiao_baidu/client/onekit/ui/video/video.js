Component({
    options: {
        addGlobalClass: true,
    },
      lifetimes: {
     attached: function () {

     if(this.properties.poster===true){
     this.setData({poster: "https://www.baidu.com/img/flexible/logo/pc/result.png"});
     }
     }
     },
    properties: {
    Class: {
                type: String,
                value: ""
            },
            Style: {
                type: String,
                value: ""
            },
            Id: {
                type: String,
                value: ""
            },
        src:{
            type: String,
            value: "",
        },
        objectFit:{
            type: String,
            value: 'contain',
        },
        controls:{
            type: Boolean,
            value: true,
        },
        autoplay:{
            type: Boolean,
            value: false,
        },
        loop:{
            type: Boolean,
            value: false,
        },
        showFullscreenBtn:{
            type: Boolean,
            value: true,
        },

        showPlayBtn:{
            type: Boolean,
            value: true,
        },
        
        poster:{
            type: String,
            value:""
        },
        title:{
            type: String,
            value: "",
        },
    },
     methods: {
       video_play(e){
       console.log("video_play", e);
        this.triggerEvent('play',e.details)
       },
       video_pause(e){
       console.log("video_pause", e);
        this.triggerEvent('pause',e.details)
       },
       video_ended(e){
       console.log("video_ended", e);
        this.triggerEvent('ended',e.details)
       },
       video_timeupdate(e){
       console.log("video_timeupdate", e);
        this.triggerEvent('timeupdate',e.details)
       },
       video_fullscreenchange(e){
       console.log("video_fullscreenchange", e);
        this.triggerEvent('fullscreenchange',e.details)
       },
       video_waiting(e){
       console.log("video_waiting", e);
        this.triggerEvent('waiting',e.details)
       },
       video_error(e){
       console.log("video_error", e);
        this.triggerEvent('error',e.details)
       },
    }
});
