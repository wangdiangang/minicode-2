//这个js文件个 中,专门来创建 store实例对象
import {
  action,
  observable
} from "mobx-miniprogram";
export const store = observable({
  // 数据字段 直接写
  active:0,
  //计算属性
  get getActive(){
    return this.active
  },
  /// actions 使用箭头函数 出this问题
  setActive:action(function(n){
    this.active=n
  })
})