var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js')
import config from '../../utils/config.js'
var pageCount = config.getPageCount;

var touchDotX = 0;
var touchDotY = 0;
var time = 0;
var interval = "";
var flag_hd = true;

Page({
  data: {
    isTip: true,
    postsList: [],
    postsShowSwiperList: [],
    isLastPage: false,
    page: 1,
    vertical: true,
    search: '',
    categories: 0,
    showerror: "none",
    showCategoryName: "",
    categoryName: "",
    showallDisplay: "block",
    displayHeader: "block",
    displaySwiper: "block",
    floatDisplay: "none",
    displayfirstSwiper: "none",
    //music start
    musicPlay: true,
    audioPoster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    audioName: '此时此刻',
    audioAuthor: '许巍',
    audioSrc: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    //music end
    topNav: []
  },

  onPullDownRefresh: function() {},

  onLoad: function(options) {
    wx.hideTabBar({});
    const back = wx.getBackgroundAudioManager();
    back.src = "http://music.163.com/song/media/outer/url?id=25643291.mp3";
    back.title = "需要人陪";
    back.coverImgUrl = "";

    var self = this;
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "/images/we/min1.jpg",
          "text": "这个抖音是不是给我看的",
        },
        {
          "id": 2,
          "imgurl": "/images/we/min2.jpg",
          "text": "min2",
        },
        {
          "id": 3,
          "imgurl": "/images/we/min3.jpg",
          "text": "减肥是不可能的，胖回来再说",
        },
      ]
    };
    self.setData({
      topNav: config.getIndexNav,
      lunboData: data.datas
    });
  },
  onShow: function(options) {
    wx.setStorageSync('openLinkCount', 0);
    flag_hd = true; //重新进入页面之后，可以再次执行滑动切换页面代码
    clearInterval(interval); // 清除setInterval
    time = 0;
  },
  //music
  playerMusic: function(e) {

    const back = wx.getBackgroundAudioManager();

    if (this.data.musicPlay) {
      this.setData({ musicPlay: false });
      back.pause();
    } else {
      this.setData({ musicPlay: true });
      back.play();
    }

  },

  //end music
  goLook: function(e) {
    wx.navigateTo({
      url: '../min/min?type=look',
    })
  },
  goMin: function(e) {

    wx.navigateTo({
      url: '../min/min?type=min',
    })
  },
  goWe: function(e) {
    wx.navigateTo({
      url: '../we/we',
    })
  },
  // 触摸开始事件
  touchStart: function(e) {
    touchDotX = e.touches[0].pageX; // 获取触摸时的原点
    touchDotY = e.touches[0].pageY;
    // 使用js计时器记录时间    
    interval = setInterval(function() {
      time++;
    }, 100);
  },
  // 触摸结束事件
  touchEnd: function(e) {

    var touchMoveX = e.changedTouches[0].pageX;
    var touchMoveY = e.changedTouches[0].pageY;
    // // 向左滑动   
    // if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
    //   flag_hd = false;
    //   //执行切换页面的方法
    //   console.log("向右滑动");
    //   wx.navigateTo({
    //     url: '../min/min?type=look'
    //   })
    // }
    // // 向右滑动   
    // if (touchMove - touchDot >= 40 && time < 10 && flag_hd == true) {
    //   flag_hd = false;
    //   //执行切换页面的方法
    //   console.log("向左滑动");
    //   wx.navigateTo({
    //     url: '../min/min?type=min'
    //   })
    // }
    //向上滑动
    if (touchMoveY - touchDotY <= -40 && time < 10 && flag_hd == true) {
      flag_hd = false;
      //执行切换页面的方法
      console.log("向上滑动");
      wx.navigateTo({
        url: '../dream/dream'
      })
    }
    clearInterval(interval); // 清除setInterval
    time = 0;
  }
})