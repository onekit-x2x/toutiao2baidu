import {OnekitPage} from '../toutiao2baidu/index';
import {tt} from '../toutiao2baidu/index';
import {STRING} from 'oneutil'

OnekitPage({
    data:{},
    onLoad:function(){
         const base64Str = "Ynl0ZWRhbmNl";
        const arrayBuffer = STRING.base64ToArrayBuffer(base64Str);
        // console.log(arrayBuffer);
        // const arr2b64 = STRING.arrayBufferToBase64(arrayBuffer)
        // console.log(arr2b64)

        console.log(arrayBuffer)
    }
});
