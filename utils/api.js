var apiUrl = {
  baseUrl: "http://huanqiuxiaozhen.com/wemall",
  typebrandList: "/goodstype/typebrandList",//分类
  goodsDetail: "/goods/inqgoods",//商品详情
  sliderList: "/slider/list",//左侧边栏
  venuesList: "/venues/venuesList",//
  choiceList: "/goods/choiceList"//选择商品
}
var requestUrl = url => apiUrl.baseUrl + url
var GET = (url, params) => new Promise((resolve, reject) => {
  wx.showLoading({
    title: requestUrl(url),
  })
  wx.request({
    url: requestUrl(url),
    data: params,
    header: {
      'Accept': 'application/json'
    },
    method: "GET",
    success: (res) => { resolve(res) },
    fail: error => { reject(error) },
    complete: wx.hideLoading()
  })
}).then(res => {
  console.log(requestUrl(url))
  console.log(params)
  console.log(res)
  return res.data
}).catch(error => error)
module.exports = {
  apiUrl,
  GET
}