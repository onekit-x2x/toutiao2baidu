import {OnekitPage, tt} from '../toutiao2baidu/index';

const pageData = {
    bindchanging:function(e){
        console.log('拖动过程中触发的事件',e);
    }
};
for(var i = 1;(i < 5);++i){
    (function(index){
        pageData[((('slider' + index)) + 'change')] = function(e){
        console.log(((('slider' + index)) + '发生change事件，携带值为'),e.detail.value);
    };
    })(i);
};
OnekitPage(pageData);

