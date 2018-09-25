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
          "tittle": "初中的时候",
          "imgurl": "/images/we/look1.jpg",
          "text": "原来十五年前就注定我是程序员",
        },
        {
          "id": 2,
          "tittle": "高中的时候",
          "imgurl": "/images/we/look2.jpg",
          "text": "起初还有来信，后来，联系越来越少了",
        },
        {
          "id": 3,
          "tittle": "大学的时候",
          "imgurl": "/images/we/look3.jpg",
          "text": "慢慢被喂成了现在的胖子",
        },
        {
          "id": 4,
          "tittle": "未知的我",
          "imgurl": "/images/we/look4.jpg",
          "text": "一个人看的日出，我是习惯的，不知道以后我会是什么样子。以前太在意自己，此时更在意你",
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