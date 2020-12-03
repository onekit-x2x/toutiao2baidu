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
// OnekitPage({
//     data:{
//         background:[
//             'demo-text-1',
//             'demo-text-2',
//             'demo-text-3'
//         ],
//         indicatorDots:true,
//         vertical:false,
//         autoplay:false,
//         circular:false,
//         interval:2000,
//         duration:500
//     },
//     changeIndicatorDots:function(e){
//         this.setData({
//         indicatorDots:!this.data.indicatorDots
//     });
//     },
//     changeAutoplay:function(e){
//         this.setData({
//         autoplay:!this.data.autoplay
//     });
//     },
//     changeCircular:function(e){
//         this.setData({
//         circular:!this.data.circular
//     });
//     },
//     changeVertical:function(e){
//         this.setData({
//         vertical:!this.data.vertical
//     });
//     },
//     intervalChange:function(e){
//         this.setData({
//         interval:e.detail.value
//     });
//     },
//     durationChange:function(e){
//         this.setData({
//         duration:e.detail.value
//     });
//     },
//     animationFinish:function(e){
//         console.log(e.detail);
//     },
//     transition:function(e){
//         console.log(e.detail);
//     }
// });

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