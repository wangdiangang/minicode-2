
let startPoint = null
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: 0,
    windowWidth: 0
  },
  pageLifetimes: {
    show() {
      wx.getSystemInfo({
        success: (res) => {
          console.log(res, 'info')
          //获取到设备的宽高
          let h = res.windowHeight, w = res.windowWidth
          this.setData({
            windowHeight: h,
            windowWidth: w,
            /* buttonLeft: getStorage('buttonLeft') ? getStorage('buttonLeft') : w * 0.7,
            buttonTop: getStorage('buttonTop') ? getStorage('buttonTop') : h * 0.7 */
            buttonLeft: w *0.8,
            buttonTop: h * 0.8
          })
          console.log(this.data);
        }
      })
    },
    hide: function () {
      // 页面被隐藏
      /*  setStorage('buttonLeft', this.data.buttonLeft)
       setStorage('buttonTop', this.data.buttonTop) */
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(){
      console.log('点击事件');
      wx.navigateTo({
        url: '/pages/release/index',
      })
    },
    buttonStart(e) {
      // console.log(e, 'buttonStart')
      startPoint = e.touches[0]
    },
    buttonMove(e) {
      //计算拖动后的坐标
      let endPoint = e.touches[e.touches.length - 1],
        disX = endPoint.clientX - startPoint.clientX,
        disY = endPoint.clientY - startPoint.clientY
      startPoint = endPoint

      let buttonTop = this.data.buttonTop + disY,
        buttonLeft = this.data.buttonLeft + disX

      //判断是否超出屏幕
      if (buttonLeft + 52 >= this.data.windowWidth) {
        buttonLeft = this.data.windowWidth - 52
      }
      if (buttonLeft <= 0) {
        buttonLeft = 0
      }
      if (buttonTop + 105 >= this.data.windowHeight) {
        buttonTop = this.data.windowHeight - 105
      }
      // console.log('buttonTop',buttonTop);
      if (buttonTop <= 0) {
        buttonTop = 0
      }

      this.setData({
        buttonTop,
        buttonLeft
      })
      // console.log(disX, disY, '999')
    },
    buttonEnd(e){
      let buttonLeft
      if(this.data.windowWidth/2<e.target.offsetLeft){
         buttonLeft = this.data.windowWidth - 57
        
      }else{
         buttonLeft = 0
      }
      this.setData({
        buttonLeft
      })
    }
  }
})
