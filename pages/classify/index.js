// pages/classify/index.js
var api = require("../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typebrandList:[],
    SelectedTypebrand:1,
    SelectedNodes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.GET(api.apiUrl.typebrandList,null).then(res=>{
      // console.log(res)
      this.setData({ typebrandList:res})
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
  
  },
  typebrandSelect:function(e){
    // console.log(e)
    this.setSelectTypebrand(e.currentTarget.id)
  },
  setSelectTypebrand:function(id){
    this.setData({ SelectedTypebrand: id })
    console.log(id)
    var nodes = null
    for (var index in this.data.typebrandList){
      var item = this.data.typebrandList[index]
      if (item.id==id){
        nodes = item.tree.nodes;
      }
    }
    console.log(nodes)
    this.setData({ SelectedNodes:nodes})
  }
})