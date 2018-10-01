// var Api = require('../../utils/api.js');
// var util = require('../../utils/util.js');
// var WxParse = require('../../wxParse/wxParse.js');
// var wxApi = require('../../utils/wxApi.js')
// var wxRequest = require('../../utils/wxRequest.js')
// import config from '../../utils/config.js'
// var pageCount = config.getPageCount;
Page({
  data: {
    birthday: "",
    hideOne: false,
    hideTwo: true,
  },


  onLoad: function(options) {
    wx.hideTabBar({});
    var self = this;
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "/images/we/min5.jpg",
        },
        {
          "id": 2,
          "imgurl": "/images/we/min2.jpg",
        },
        {
          "id": 3,
          "imgurl": "/images/we/min3.jpg",
        },
      ]
    };
    self.setData({
      lunboData: data.datas
    });
  },


  setBirthday: function(e) {
    this.data.birthday = e.detail.value;
  },
  notMin: function(e) {
    wx.showToast({
      title: 'byebye',
    })
  },

  yesMin: function(e) {
    var that = this;
    that.setData({
      hideOne: true,
      hideTwo: false,
    })

  },

  checkMin: function(e) {


    if (this.data.birthday != '910418') {
      var random = Math.floor(Math.random() * 10);
      var info = '自作多情呢';

      if (random > 7) {
        info = '白高兴一场'
      } else if (random > 5) {
        info = '暗恋我？'
      } else if (random >= 2) {
        info = '我只喜欢min'
      }

      wx.showToast({
        title: info,
        icon: 'loading',
        duration: 1500
      })
      return;
    }

    wx.showToast({
      title: '终于等到你',
      icon: 'success',
      duration: 1000
    });
    setTimeout(function() {
      wx.navigateTo({
        url: '../main/main'
      })
    }, 1000)

  },

})