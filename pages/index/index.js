var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');
var wxApi = require('../../utils/wxApi.js')
var wxRequest = require('../../utils/wxRequest.js')
import config from '../../utils/config.js'
var pageCount = config.getPageCount;
Page({
  data: {
    birthday: "",
    hideOne: false,
    hideTwo: true,
  },

  onShareAppMessage: function() {
    return {
      title: '“' + config.getWebsiteName + '带你看到更大的世界',
      path: 'pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  onPullDownRefresh: function() {
    var self = this;
    self.setData({
      showerror: "none",
      showallDisplay: "none",
      displaySwiper: "none",
      floatDisplay: "none",
      isLastPage: false,
      page: 0,
      postsShowSwiperList: []
    });
    this.fetchTopFivePosts();

  },
  onReachBottom: function() {
    var self = this;
    if (!self.data.isLastPage) {
      self.setData({
        page: self.data.page + 1
      });
      console.log('当前页' + self.data.page);
      this.fetchPostsData(self.data);
    } else {
      console.log('最后一页');
    }
  },
  onLoad: function(options) {
    wx.hideTabBar({});
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
    this.fetchTopFivePosts();
    self.setData({
      topNav: config.getIndexNav,
      lunboData: data.datas
    });
  },
  onShow: function(options) {
    wx.setStorageSync('openLinkCount', 0);
  },
  fetchTopFivePosts: function() {
    var self = this;
    //取置顶的文章
    var getPostsRequest = wxRequest.getRequest(Api.getSwiperPosts());
    getPostsRequest.then(response => {
        if (response.data.status == '200' && response.data.posts.length > 0) {
          self.setData({
            postsShowSwiperList: response.data.posts,
            // postsShowSwiperList: self.data.postsShowSwiperList.concat(response.data.posts.map(function(item) {
            //   //item.firstImage = Api.getContentFirstImage(item.content.rendered);
            //   if (item.post_medium_image_300 == null || item.post_medium_image_300 == '') {
            //     if (item.content_first_image != null && item.content_first_image != '') {
            //       item.post_medium_image_300 = item.content_first_image;
            //     } else {
            //       item.post_medium_image_300 = "../../images/logo700.png";
            //     }

            //   }
            //   return item;
            // })),
            showallDisplay: "block",
            displaySwiper: "block"
          });

        } else {
          self.setData({
            displaySwiper: "none",
            displayHeader: "block",
            showallDisplay: "block",
          });
        }
      })
      .then(response => {
        self.fetchPostsData(self.data);
      })
      .catch(function(response) {
        console.log(response);
        self.setData({
          showerror: "block",
          floatDisplay: "none"
        });

      })
      .finally(function() {

      });

  },

  //获取文章列表数据
  fetchPostsData: function(data) {
    var self = this;
    if (!data) data = {};
    if (!data.page) data.page = 1;
    if (!data.categories) data.categories = 0;
    if (!data.search) data.search = '';
    if (data.page === 1) {
      self.setData({
        postsList: []
      });
    };
    self.setData({
      isTip: false
    })
    var getPostsRequest = wxRequest.getRequest(Api.getPosts(data));
    getPostsRequest
      .then(response => {
        if (response.statusCode === 200) {

          if (response.data.length < pageCount) {
            self.setData({
              isLastPage: true
            });
          }

          self.setData({
            floatDisplay: "block",
            postsList: self.data.postsList.concat(response.data.map(function(item) {
              var strdate = item.date
              var excerpt = item.excerpt.rendered
              item.excerpt.rendered = excerpt.replace(/\[&hellip;\]/ig, '......');
              item.excerpt.rendered = item.excerpt.rendered.replace(/&#8221;/g, '"');
              item.excerpt.rendered = item.excerpt.rendered.substring(0, 32) + "......"
              if (item.category_name != null) {

                item.categoryImage = "../../images/category.png";
              } else {
                item.categoryImage = "";
              }
              if (item.post_thumbnail_image == null || item.post_thumbnail_image == '') {
                item.post_thumbnail_image = "../../images/logo700.png";
              }
              item.date = util.cutstr(strdate, 10, 1);
              return item;
            })),

          });
          setTimeout(function() {
            wx.hideLoading();
            self.setData({
              isTip: true,
              pageMain: false
            })
          }, 900);
        } else {
          if (response.data.code == "rest_post_invalid_page_number") {
            self.setData({
              isLastPage: true
            });
            wx.showToast({
              title: '没有更多内容',
              mask: false,
              duration: 1500
            });
          } else {
            wx.showToast({
              title: response.data.message,
              duration: 1500
            })
          }
        }


      })
      .catch(function(response) {
        if (data.page == 1) {

          self.setData({
            showerror: "block",
            floatDisplay: "none"
          });

        } else {
          wx.showModal({
            title: '加载失败',
            content: '加载数据失败,请重试.',
            showCancel: false,
          });
          self.setData({
            page: data.page - 1
          });
        }

      })
      .finally(function(response) {
        wx.hideLoading();
        wx.stopPullDownRefresh();
      });
  },
  //加载分页
  loadMore: function(e) {

    var self = this;
    if (!self.data.isLastPage) {
      self.setData({
        page: self.data.page + 1
      });
      //console.log('当前页' + self.data.page);
      this.fetchPostsData(self.data);
    } else {
      wx.showToast({
        title: '没有更多内容',
        mask: false,
        duration: 1000
      });
    }
  },
  // 跳转至查看文章详情
  // redictDetail: function (e) {
  //   // console.log('查看文章');
  //   var id = e.currentTarget.id,
  //     url = '../detail/detail?id=' + id;
  //   wx.navigateTo({
  //     url: url
  //   })
  // },
  redictDetail: function(a) {
    var t = "../detail/detail?id=" + a.currentTarget.id;
    wx.navigateTo({
      url: t
    });
  },
  //首页图标跳转
  onNavRedirect: function(e) {
    var redicttype = e.currentTarget.dataset.redicttype;
    var url = e.currentTarget.dataset.url == null ? '' : e.currentTarget.dataset.url;
    var appid = e.currentTarget.dataset.appid == null ? '' : e.currentTarget.dataset.appid;
    var extraData = e.currentTarget.dataset.extraData == null ? '' : e.currentTarget.dataset.extraData;
    if (redicttype == 'apppage') { //跳转到小程序内部页面         
      wx.navigateTo({
        url: url
      })
    } else if (redicttype == 'webpage') //跳转到web-view内嵌的页面
    {
      url = '../webpage/webpage?url=' + url;
      wx.navigateTo({
        url: url
      })
    } else if (redicttype == 'miniapp') //跳转到其他app
    {
      wx.navigateToMiniProgram({
        appId: appid,
        envVersion: 'release',
        path: url,
        extraData: extraData,
        success(res) {
          // 打开成功
        },
        fail: function(res) {
          console.log(res);
        }
      })
    }

  },
  // 跳转至查看小程序列表页面或文章详情页
  redictAppDetail: function(e) {
    // console.log('查看文章');
    var id = e.currentTarget.id;
    var redicttype = e.currentTarget.dataset.redicttype;
    var url = e.currentTarget.dataset.url == null ? '' : e.currentTarget.dataset.url;
    var appid = e.currentTarget.dataset.appid == null ? '' : e.currentTarget.dataset.appid;

    if (redicttype == 'detailpage') //跳转到内容页
    {
      url = '../detail/detail?id=' + id;
      wx.navigateTo({
        url: url
      })
    }
    if (redicttype == 'apppage') { //跳转到小程序内部页面         
      wx.navigateTo({
        url: url
      })
    } else if (redicttype == 'webpage') //跳转到web-view内嵌的页面
    {
      url = '../webpage/webpage?url=' + url;
      wx.navigateTo({
        url: url
      })
    } else if (redicttype == 'miniapp') //跳转到其他app
    {
      wx.navigateToMiniProgram({
        appId: appid,
        envVersion: 'release',
        path: url,
        success(res) {
          // 打开成功
        },
        fail: function(res) {
          //console.log(res);
        }
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

      if(random > 7){
        info = '白高兴一场'
      }else if(random >5){
        info = '暗恋我？'
      }else if(random >= 2){
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
        url: '../only/only'
      })
    }, 1000)

  },

})