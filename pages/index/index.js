Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "国内",
      "国际",
      "财经",
      "娱乐",
      "军事",
      "体育",
      "其他"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  /**
     * 点击导航栏
      */
     onNavBarTap(event){
         // 获取点击的navbar的index
       console.log(event)
         let navbarTapIndex = event.currentTarget.dataset.navbarIndex
       console.log(navbarTapIndex)
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: navbarTapIndex      

    })
  },

  onBindAnimationFinish: function ({ detail }) {
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: detail.current
     })
    
  },

  onLoad: function (options) {

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  

 

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})