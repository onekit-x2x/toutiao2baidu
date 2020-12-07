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

// swiper
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

//text
// var texts = [
//     '今日头条是一款基于数据挖掘的推荐引擎产品',
//     '它由中国互联网创业者张一鸣于2012年3月创建',
//     '于2012年8月发布第一个版本',
//     '截至2015年12月',
//     '今日头条累计激活用户3.5亿',
//     '日活跃度超过3500万',
//     '其中，“头条号”平台的账号数量已超过4.1万个',
//     '各类媒体、政府、机构总计超过11000家',
//     '其中签约合作的传统媒体过千家',
//     '头条号”自媒体账号总数超过3万个',
//     '......'
// ];
// OnekitPage({
//     data:{
//         text:'',
//         canAdd:true,
//         canRemove:false
//     },
//     extraLine:[
//     ],
//     add:function(e){
//         if(!this.data.canAdd){
//         return;
//     }
//         var that = this;
//         this.extraLine.push(texts[(this.extraLine.length % 12)]);
//         this.setData({
//         text:this.extraLine.join('\n'),
//         canAdd:(this.extraLine.length < 12),
//         canRemove:(this.extraLine.length > 0)
//     });
//         setTimeout(function(){
//         that.setData({
//         scrollTop:99999
//     });
//     },0);
//     },
//     remove:function(e){
//         var that = this;
//         if((this.extraLine.length > 0)){
//         this.extraLine.pop();
//         this.setData({
//             text:this.extraLine.join('\n'),
//             canAdd:(this.extraLine.length < 12),
//             canRemove:(this.extraLine.length > 0)
//         });
//     }
//         setTimeout(function(){
//         that.setData({
//         scrollTop:99999
//     });
//     },0);
//     }
// });

//video
// function getRandomColor(){
//     const rgb = [
//     ];
//     for(var i = 0;(i < 3);++i){
//         var color = Math.floor((Math.random() * 256)).toString(16);
//         color = (color.length == 1)?('0' + color):color;
//         rgb.push(color);
//     };
//     return ('#' + rgb.join(''));
// };
// OnekitPage({
//     onReady:function(res){
//     },
//     inputValue:'',
//     data:{
//         src:'',
//         danmuList:[
//             {
//                 text:'第 1s 出现的弹幕',
//                 color:'#ff0000',
//                 time:1
//             },
//             {
//                 text:'第 3s 出现的弹幕',
//                 color:'#ff00ff',
//                 time:3
//             }
//         ],
//         isFullscreen:false,
//         isLoopPlay:false,
//         isShowPlayBtn:true,
//         isShowControls:true,
//         playBtnPosition:'center',
//         objectFitNum:0,
//         objectFitType:'contain',
//         poster:"https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
//         unitId:'hefbc5g67f9g1axb6p'
//     },
//     bindadload:function(e){
//         console.log('广告加载成功',e);
//     },
//     bindaderror:function(e){
//         console.log('广告出错',e);
//     },
//     bindadclose:function(e){
//         console.log('关闭广告',e);
//     },
//     bindadstart:function(e){
//         console.log('播放广告',e);
//     },
//     bindwaiting:function(e){
//         console.log('视频正在缓冲',e);
//     },
//     bindtimeupdate:function(e){
//     },
//     bindended:function(e){
//         console.log('视频已经播放结束',e);
//     },
//     bindpause:function(e){
//         console.log('视频暂停了',e);
//     },
//     bindplay:function(e){
//         console.log('视频开始播放了',e);
//     },
//     bindInputBlur:function(e){
//         this.inputValue = e.detail.value;
//     },
//     bindButtonTap:function(){
//         var that = this;
//         tt.chooseVideo({
//         sourceType:[
//             'album',
//             'camera'
//         ],
//         maxDuration:60,
//         camera:[
//             'front',
//             'back'
//         ],
//         success:function(res){
//             that.setData({
//             src:res.tempFilePath
//         });
//         }
//     });
//     },
//     videoErrorCallback:function(e){
//         console.log(e.detail.errMsg);
//     },
//     switchFullScreen:function(){
//         this.setData({
//         isFullscreen:!this.data.isFullscreen
//     });
//     },
//     switchLoopPlay:function(){
//         this.setData({
//         isLoopPlay:!this.data.isLoopPlay
//     });
//     },
//     switchPlayBtn:function(){
//         this.setData({
//         isShowPlayBtn:!this.data.isShowPlayBtn
//     });
//     },
//     switchControls:function(){
//         this.setData({
//         isShowControls:!this.data.isShowControls
//     });
//     },
//     switchPlayBtnPosition:function(){
//         console.log('switchPlayBtnPosition:',this.data.playBtnPosition);
//         this.setData({
//         playBtnPosition:(this.data.playBtnPosition === 'center')?'bottom':'center'
//     });
//     },
//     switchFit:function(){
//         const objectFitEnum = [
//         'contain',
//         'fill',
//         'cover'
//     ];
//         this.setData({
//         objectFitType:objectFitEnum[(this.data.objectFitNum % 3)],
//         objectFitNum:(this.data.objectFitNum + 1)
//     });
//     }
// });

// live-player
// OnekitPage({
//     data:{
//         fullScreenDirection:0
//     },
//     statechange:function(e){
//         console.log("状态变化",e);
//     },
//     requestFs:function(){
//         if(!this.ctx){
//         this.ctx = tt.createLivePlayerContext("my-player");
//     }
//         console.log("fullScreenDirection",this.data.fullScreenDirection);
//         this.ctx.requestFullScreen({
//         direction:Number(this.data.fullScreenDirection)
//     });
//     },
//     exitFs:function(){
//         this.ctx.exitFullScreen();
//     }
// });

// camera
// OnekitPage({
//     data:{},
//     onLoad:function(options){
//         tt.getSetting({
//         success:(res)=>{
//             var cameraAllowed = res.authSetting["scope.camera"];
//             if(!cameraAllowed){
//                 tt.showToast({
//                     title:"请授权相机后重新进入",
//                     success:(res)=>{this.auth()}
//                 });
//             }
//         }
//     });
//     },
//     auth:function(){
//         tt.authorize({
//         scope:"scope.camera",
//         success:function(){
//             tt.showToast({
//             title:"授权成功",
//             success:function(){
//                 tt.reLaunch({
//                 url:"/pages/index/index"
//             });
//             }
//         });
//         },
//         fail:function(err){
//             tt.showModal({
//             content:("授权失败：" + JSON.stringify(err))
//         });
//         }
//     });
//     },
//     onInitdone:function(e){
//         tt.showToast({
//         title:"相机初始化完成"
//     });
//     },
//     onStop:function(e){
//         console.log("相机中断");
//     },
//     onError:function(e){
//         tt.showModal({
//         content:("相机出错了：" + e.detail.errMsg)
//     });
//     }
// });

// canvas
// OnekitPage({
//     onShow:function(res){
//         this.ctx = tt.createCanvasContext('canvas');
//         this.r = (300 / 2);
//         this.rem = (300 / 200);
//         this.interval = setInterval(()=>{this.draw()},1000);
//     },
//     drawBackground:function(){
//         var ctx = this.ctx;
//         var r = this.r;
//         var rem = this.rem;
//         ctx.save();
//         ctx.translate(r,r);
//         ctx.beginPath();
//         ctx.lineWidth = (10 * rem);
//         ctx.arc(0,0,(r - ((ctx.lineWidth / 2))),0,(2 * Math.PI),false);
//         ctx.stroke();
//         var hourNumber = [
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9,
//         10,
//         11,
//         12,
//         1,
//         2
//     ];
//         ctx.font = (((18 * rem)) + 'px Arial');
//         ctx.textAlign = 'center';
//         ctx.textBaseline = 'middle';
//         hourNumber.forEach(function(number,i){
//         var rad = (((((2 * Math.PI)) / 12)) * i);
//         var x = (((Math.cos(rad) * ((r - ((30 * rem)))))) - 8);
//         var y = (((Math.sin(rad) * ((r - ((30 * rem)))))) + 10);
//         ctx.fillText(number,x,y);
//     });
//         for(var i = 0;(i < 60);i++){
//         var rad = (((((2 * Math.PI)) / 60)) * i);
//         var x = (Math.cos(rad) * ((r - ((18 * rem)))));
//         var y = (Math.sin(rad) * ((r - ((18 * rem)))));
//         ctx.beginPath();
//         if((((i % 5)) === 0)){
//             ctx.fillStyle = '#000';
//             ctx.arc(x,y,(2 * rem),0,(2 * Math.PI),false);
//         } else {
//             ctx.fillStyle = '#ccc';
//             ctx.arc(x,y,(2 * rem),0,(2 * Math.PI),false);
//         }
//         ctx.fill();
//     };
//     },
//     drawHour:function(hour,minute){
//         var ctx = this.ctx;
//         var r = this.r;
//         var rem = this.rem;
//         ctx.save();
//         ctx.beginPath();
//         var rad = (((((2 * Math.PI)) / 12)) * hour);
//         var mrad = (((((((2 * Math.PI)) / 12)) / 60)) * minute);
//         ctx.rotate((rad + mrad));
//         ctx.lineWidth = 6;
//         ctx.lineCap = 'round';
//         ctx.moveTo(0,(10 * rem));
//         ctx.lineTo(0,(-r / 2));
//         ctx.stroke();
//         ctx.restore();
//     },
//     drawMinute:function(minute){
//         var ctx = this.ctx;
//         var r = this.r;
//         var rem = this.rem;
//         ctx.save();
//         ctx.beginPath();
//         var rad = (((((2 * Math.PI)) / 60)) * minute);
//         ctx.rotate(rad);
//         ctx.lineWidth = (3 * rem);
//         ctx.lineCap = 'round';
//         ctx.moveTo(0,10);
//         ctx.lineTo(0,(-r + ((30 * rem))));
//         ctx.stroke();
//         ctx.restore();
//     },
//     drawSecond:function(second){
//         var ctx = this.ctx;
//         var r = this.r;
//         var rem = this.rem;
//         ctx.save();
//         ctx.beginPath();
//         ctx.fillStyle = '#c14443';
//         var rad = (((((2 * Math.PI)) / 60)) * second);
//         ctx.rotate(rad);
//         ctx.moveTo(-2,(20 * rem));
//         ctx.lineTo(2,(20 * rem));
//         ctx.lineTo(1,(-r + ((18 * rem))));
//         ctx.lineTo(-1,(-r + ((18 * rem))));
//         ctx.fill();
//         ctx.restore();
//     },
//     drawDot:function(){
//         var ctx = this.ctx;
//         var rem = this.rem;
//         ctx.beginPath();
//         ctx.fillStyle = '#fff';
//         ctx.arc(0,0,(3 * rem),0,(2 * Math.PI),false);
//         ctx.fill();
//     },
//     draw:function(){
//         var ctx = this.ctx;
//         ctx.clearRect(0,0,300,300);
//         var now = new Date();
//         var hour = now.getHours();
//         var minutes = now.getMinutes();
//         var seconds = now.getSeconds();
//         this.drawBackground();
//         this.drawHour(hour,minutes);
//         this.drawMinute(minutes);
//         this.drawSecond(seconds);
//         this.drawDot();
//         ctx.restore();
//         ctx.draw();
//     },
//     onUnload:function(){
//         clearInterval(this.interval);
//     }
// });
