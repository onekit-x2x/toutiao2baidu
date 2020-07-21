import tt from "../../../onekit/tt"
Component({
  mixins: [],
  data: {
    hideContact: true
  },
  attached() {},
  properties: {},
  methods: {
      
bindgetuserinfo(info) {
    console.log("[UI]",info)
    tt.getUserInfo({
        success(res){
             this.triggerEvent('getuserinfo', res);
        }
    })
  },
  button_onTap(info){
      console.log(info);
      console.log(this.properties);
      
    //    tt.getUserInfo({
    //            success(res){
    //         console.log("[API]",res);
    //         } 
    //     });
  }
    }
});