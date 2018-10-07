var touchDotX = 0;
var touchDotY = 0;
var time = 0;
var interval = "";
var flag_hd = true;

Page({
  data: {
    musicSrc: '',
    musicTitle: '',
    musicText: '',
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
    //music end
  },

  onPullDownRefresh: function() {},

  onLoad: function(options) {
    var self = this;

    const db = wx.cloud.database()
    db.collection('music').doc('W7Ihtw6qgQy38iYM').get({
      success: res => {
        console.log(res.data);

        self.setData({
          musicSrc: res.data.src,
          musicTitle: res.data.title,
          musicText: res.data.text,
        })

        const back = wx.getBackgroundAudioManager();
        back.title = res.data.title;
        back.src = res.data.src;
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })

    db.collection('lunboData').get({
      success: res => {
        console.log('lunboData:'+res.data[0]);

        self.setData({
          lunboData: res.data
        })

        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
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
      this.setData({
        musicPlay: false
      });
      back.pause();
    } else {
      this.setData({
        musicPlay: true
      });
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