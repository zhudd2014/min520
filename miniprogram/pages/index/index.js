Page({
  data: {
    birthday: "",
    hideOne: false,
    hideTwo: true,
    hasAuthed:false,
  },


  onLoad: function(options) {

  },

  getUserInfo: function (e) {
    var that = this;
    console.log(e.detail)
 
    //TODO 根据openId直接跳到main页面   

    if (e.detail.errMsg == 'getUserInfo:ok'){
      that.setData({
        hasAuthed: true,
        hideOne: true,
        hideTwo: false,
      })
    }
  },

  setBirthday: function(e) {
    this.data.birthday = e.detail.value;
  },
  notMin: function(e) {
    wx.showToast({
      title: 'byebye',
    })
  },


  checkMin: function(e) {
    if(!this.data.hasAuthed){
      wx.showToast({
        title: "用户未授权",
        icon: 'loading',
        duration: 1500
      })
      return;
    }

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