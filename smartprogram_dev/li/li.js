import {OnekitPage, tt} from '../toutiao2baidu/index';

//  slider
// const pageData = {
//     bindchanging:function(e){
//         console.log('拖动过程中触发的事件',e);
//     }
// };
// for(var i = 1;(i < 5);++i){
//     (function(index){
//         pageData[((('slider' + index)) + 'change')] = function(e){
//         console.log(((('slider' + index)) + '发生change事件，携带值为'),e.detail.value);
//     };
//     })(i);
// };
// OnekitPage(pageData);

//  view
// const app = getApp();
// OnekitPage({
//     data:{},
//     onLoad:function(){
//         console.log('Welcome to Mini Code');
//     }
// });

//slier
OnekitPage({
    data:{
        background:[
            'demo-text-1',
            'demo-text-2',
            'demo-text-3'
        ],
        indicatorDots:true,
        vertical:false,
        autoplay:false,
        circular:false,
        interval:2000,
        duration:500
    },
    changeIndicatorDots:function(e){
        this.setData({
        indicatorDots:!this.data.indicatorDots
    });
    },
    changeAutoplay:function(e){
        this.setData({
        autoplay:!this.data.autoplay
    });
    },
    changeCircular:function(e){
        this.setData({
        circular:!this.data.circular
    });
    },
    changeVertical:function(e){
        this.setData({
        vertical:!this.data.vertical
    });
    },
    intervalChange:function(e){
        this.setData({
        interval:e.detail.value
    });
    },
    durationChange:function(e){
        this.setData({
        duration:e.detail.value
    });
    },
    animationFinish:function(e){
        console.log(e.detail);
    },
    transition:function(e){
        console.log(e.detail);
    }
});
