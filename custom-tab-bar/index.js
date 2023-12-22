import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/index"
Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,// 指定要绑定的 store
    fields: { // 指定要绑定的字段数据
      getActive: 'getActive' // 第三种写法(推荐精简)
    },
    actions: { // 指定要绑定的方法
      setActive: 'setActive'// 结构：自己定义的名(随便起,合法就行) : store 中的方法
    }
  },
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/square/index",
      iconPath: "home-o",
      text: "广场"
    }, {
      pagePath: "/pages/order/index",
      iconPath: "home-o",
      text: "订单"
    }, {
      pagePath: "/pages/message/index",
      iconPath: "friends-o",
      text: "消息"
    }, {
      pagePath: "/pages/mine/index",
      iconPath: "/image/icon_API.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    onChange(e) {
      console.log('onChange', e);
      let url = this.data.list[e.detail].pagePath
      wx.switchTab({ url })
      this.setActive(e.detail)
      if(e.detail == 2){
        console.log('行程');
       
      }
    }
  }
})