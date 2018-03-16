// pages/details/index.js
var api = require("../../utils/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail:{},
    goodsInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    api.GET(api.apiUrl.goodsDetail + "?id=" + options.id,null).then(res=>{
      console.log(res)
      this.setData({ goodsDetail:res.data})
      var goodsInfoStr = res.data.goodspics.substring(0, res.data.goodspics.length-1);
      var goodsInfo = goodsInfoStr.split("#")
      this.setData({ goodsInfo: goodsInfo})

      console.log(this.data)
    }).catch(error=>{

    })
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
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