// pages/min/min.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var paramType = decodeURIComponent(options.type);
    var data = {
      "min": [
        {
          "id": 1,
          "tittle": "简单",
          "imgurl": "/images/we/min1.jpg",
          "text": "老实交代，这个抖音是拍给我看的么，肯定是，一定是，必须是[哭][哭][哭]",
        },
        {
          "id": 2,
          "tittle": "漂亮",
          "imgurl": "/images/we/min2.jpg",
          "text": "这么好看，实在喜欢",
        },
        {
          "id": 3,
          "tittle": "坚强",
          "imgurl": "/images/we/min3.jpg",
          "text": "减肥是不可能的，带你吃好吃的，给我胖回来",
        },
        {
          "id": 4,
          "tittle": "想保护你",
          "imgurl": "/images/we/min4.jpg",
          "text": "",
        }
      ],
      "look": [
        {
          "id": 1,
          "tittle": "我们认识的时候",
          "imgurl": "/images/we/look1.jpg",
          "text": "十五年前的照片，也就是我们认识的时候，并没有留下太多的美好给到我们，依稀记得的，就是叫过你minmin",
        },
        {
          "id": 2,
          "tittle": "我们远离的时候",
          "imgurl": "/images/we/look2.jpg",
          "text": "起初还有来信，后来，联系越来越少了。我们不知道对方经历着什么，可能一辈子就分叉了，好在长沙的几段联系，把我们拉近",
        },
        {
          "id": 3,
          "tittle": "现在的我",
          "imgurl": "/images/we/look3.jpg",
          "text": "慢慢被喂成了胖子，以前觉得自己能改变世界，现在发现，是被它改变着。它不仅改变着我，也改变着你。以前你为我做了很多事情，现在的我，想为你做一些事情。",
        },
        {
          "id": 4,
          "tittle": "以后的我",
          "imgurl": "/images/we/look4.jpg",
          "text": "一辈子多长我不知道，自以为是的希望，我能给你温暖给你阳光。自以为是的想要，我想要你永远开心快乐的属于我。",
        },
      ]
    };
    if (paramType == 'min') {
      that.setData({
        postsList: data.min,
      })
    } else {
      that.setData({
        postsList: data.look,
      })
    }

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