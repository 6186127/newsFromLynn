const NaviMap = ['gn', 'gj', 'cj', 'yl', 'js', 'ty', 'other']


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
    conPic: '',
    conHead : '',
    conFrom:'',
    naviClass:'gn',
    newList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */

  /**
     * 点击导航栏
      */
     onNavBarTap(event){
         // 获取点击的navbar的index
       //console.log(event)
         let navbarTapIndex = event.currentTarget.dataset.navbarIndex
       console.log(navbarTapIndex)
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: navbarTapIndex      

    })
    //点击后刷新新闻内容
       let ClassTitle = NaviMap[navbarTapIndex]
       console.log(ClassTitle)
       this.getList(ClassTitle)
  },

  getList(ClassTitle) {
    console.log(ClassTitle)
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: ClassTitle
      },
      success: res => {
        console.log(res)
        let cs = res.data.result
        console.log(cs)
        this.showNewList(cs)
      }
    })
  },
    
  showNewList(result){
    let length = result.length
    let news = result
    let list = []
    console.log(length)
    for (let i = 0; i < length; i += 1) {
      list.push({
        id: news[i].id,
        title: news[i].title,
        source: news[i].source,
        pic: 'http:' + news[i].firstImage,
      })
    }
    //list[0].arrTime = 'Now'
    console.log(list)
    this.setData({ newList: list })

  },
  onBindAnimationFinish: function ({ detail }) {
         // 设置data属性中的navbarActiveIndex为当前点击的navbar
         this.setData({
             navbarActiveIndex: detail.current
     })
    
  },

  onLoad(){
    this.getList(this.data.naviClass);

    
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