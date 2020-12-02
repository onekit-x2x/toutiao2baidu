/* eslint-disable no-console */
import tt from '../../tt'

/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  behaviors: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {
    hideContact: true
  },
  attached() {},
  properties: {},
  methods: {

    bindgetuserinfo(info) {
      console.log('[UI]', info)
      tt.getUserInfo({
        success(res) {
          this.triggerEvent('getuserinfo', res)
        }
      })
    },
    button_onTap(info) {
      console.log(info)
      console.log(this.properties)

    //    tt.getUserInfo({
    //            success(res){
    //         console.log("[API]",res);
    //         }
    //     });
    }
  }
})
